// ==================================================================
// 🐾 script_engine.js V2.2 - 三年级下册专用 (25/25/25/25 科学权重版)
// ==================================================================
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyR1D1HVmrmW7PHuIP-iYgSTcNFVHWBfoXpYIotWWQkXrIYVK8tc6YhzQEoGVDnxpI/exec";

const SPEAKING_RUBRIC = [
    "[1分] 需较多提示，仅能说出零散单词",
    "[2分] 能在提示下大致作答，但不完整",
    "[3分] 能基本作答，有少量语法或读音错误",
    "[4分] 表达自然，信息较完整，发音较好",
    "[5分] 表达地道流利、信息完整、读音准确"
];

let currentData = null;
let currentMode = 'written'; // 'written' 或 'speaking'
let currentQIndex = 0;
let answers = {};
let timerInterval;
let timeLeft = 0;

function getSessionId() {
    const key = 'grade3_s2_quiz_session_id';
    let sid = localStorage.getItem(key);
    if (!sid) {
        sid = `TERM2-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        localStorage.setItem(key, sid);
    }
    return sid;
}

function initEngine(mode) {
    currentMode = mode;
    console.log("Engine Loaded: Grade 3 S2 [" + mode + "] Mode V2.2");

    // 自动加载逻辑
    const urlParams = new URLSearchParams(window.location.search);
    const autoLesson = urlParams.get('lesson');
    if (autoLesson) { loadPaper(autoLesson); }
}

window.LOAD_QUIZ = function (data) {
    currentData = data;
    timeLeft = data.timeLimit || 600;
    const titleEl = document.getElementById('examTitle');
    if (titleEl) titleEl.innerText = data.title;
    toggleDisplay('loadingBox', false);
    toggleDisplay('menuBox', false);
    toggleDisplay('setupBox', true);
};

function loadPaper(path) {
    toggleDisplay('loadingBox', true);
    const script = document.createElement('script');
    script.src = "data/written/" + path + "?t=" + Date.now();
    script.onerror = () => { alert("❌ 文件未找到: " + path); location.reload(); };
    document.body.appendChild(script);
}

function startExam() {
    const studentName = document.getElementById('selectedStudentName').value;
    if (!studentName) { alert("请先点击选择名字！"); return; }

    toggleDisplay('setupBox', false);
    toggleDisplay('quizInterface', true);
    document.getElementById('studentNameDisplay').innerText = studentName;

    currentQIndex = 0;
    answers = {};
    renderQuestion();
    if (currentMode === 'written') startTimer();
}

// ================= ⭐ 核心渲染逻辑 ⭐ =================
function renderQuestion() {
    const allQs = currentData.questions;

    // 过滤逻辑：笔试模式只看 A/B/C，口语模式只看 D
    const relevantQs = allQs.filter(q => {
        if (currentMode === 'written') return q.part === 'A' || q.part === 'B' || q.part === 'C';
        return q.part === 'D';
    });

    if (relevantQs.length === 0) {
        document.getElementById('qContent').innerHTML = "<p style='padding:20px;'>本课暂无该部分的题目。</p>";
        return;
    }

    // 确保 index 不越界
    if (currentQIndex >= relevantQs.length) currentQIndex = relevantQs.length - 1;
    const q = relevantQs[currentQIndex];

    // 更新进度条
    document.getElementById('progressText').innerText = `Part ${q.part} | 第 ${currentQIndex + 1} 题 / 共 ${relevantQs.length} 题`;
    document.getElementById('progressBar').style.width = `${((currentQIndex + 1) / relevantQs.length) * 100}%`;

    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const btnSubmit = document.getElementById('btnSubmit');

    btnPrev.disabled = (currentQIndex === 0);
    if (currentQIndex === relevantQs.length - 1) {
        toggleDisplay('btnNext', false);
        toggleDisplay('btnSubmit', true);
    } else {
        toggleDisplay('btnNext', true);
        toggleDisplay('btnSubmit', false);
    }

    const hasAnswered = answers['Q' + q.qNum] !== undefined;
    const targetBtn = (currentQIndex === relevantQs.length - 1) ? btnSubmit : btnNext;
    targetBtn.disabled = !hasAnswered;

    let html = '';
    const partMap = { 'A': 'Listening 听力', 'B': 'Reading 阅读', 'C': 'Writing 写作', 'D': 'Speaking 口语面试' };
    html += `<div class="part-tag">${partMap[q.part] || 'Part ' + q.part}</div>`;
    html += `<h3 class="q-text">${q.qNum}. ${q.text}</h3>`;

    if (q.audioText) {
        html += `<button class="audio-btn" onclick="speak('${q.audioText.replace(/'/g, "\\'")}')">🔊 播放录音 (Listen)</button>`;
    }

    if (q.imageUri) {
        let imgSrc = q.imageUri;
        if (!imgSrc.startsWith('http') && !imgSrc.startsWith('img/')) imgSrc = 'img/' + imgSrc;
        html += `<div class="q-img-box"><img src="${imgSrc}" class="q-img"></div>`;
    }

    if (q.part !== 'D') {
        // 笔试题型
        if (q.type === 'select' || !q.type) {
            html += `<div class="options-list">`;
            q.options.forEach(opt => {
                const isSelected = answers['Q' + q.qNum] === opt ? 'selected' : '';
                html += `<div class="option-item ${isSelected}" onclick="choose('${q.qNum}', '${opt.replace(/'/g, "\\'")}')">${opt}</div>`;
            });
            html += `</div>`;
        } else if (q.type === 'drag-sort') {
            html += `<div style="margin:10px 0; color:#666; font-size:14px;">(点击单词进行排序)</div>`;
            html += `<div class="drag-area" id="target-${q.qNum}">${(answers['Q' + q.qNum] || "").split(' ').filter(x => x).map(w => `<span class="word-chip active">${w}</span>`).join('')}</div>`;
            html += `<div class="drag-area" id="source-${q.qNum}">`;
            let remaining = [...q.words];
            (answers['Q' + q.qNum] || "").split(' ').forEach(w => { let i = remaining.indexOf(w); if (i > -1) remaining.splice(i, 1); });
            remaining.forEach(w => html += `<span class="word-chip" onclick="moveWord(this, 'target-${q.qNum}', 'source-${q.qNum}', '${q.qNum}')">${w}</span>`);
            html += `</div>`;
        } else if (q.type === 'fill') {
            html += `<input type="text" class="fill-input" value="${answers['Q' + q.qNum] || ''}" oninput="updateFill('${q.qNum}')" placeholder="在此输入答案">`;
        }
    } else {
        // 口语评分
        html += `<div class="score-row">`;
        for (let s = 5; s >= 1; s--) {
            const active = answers['Q' + q.qNum] === s ? 'active' : '';
            html += `<div class="score-item" onclick="rate('${q.qNum}', ${s})"><button class="score-btn ${active}">${s}分</button><span class="score-desc">${SPEAKING_RUBRIC[s - 1]}</span></div>`;
        }
        html += `</div>`;
    }
    document.getElementById('qContent').innerHTML = html;
}

// 🔥 核心评分算法 🔥
function calculateSubmissionScore() {
    let parts = { 'A': { c: 0, t: 0 }, 'B': { c: 0, t: 0 }, 'C': { c: 0, t: 0 }, 'D': { s: 0, m: 0, t: 0 } };

    currentData.questions.forEach(q => {
        if (q.part === 'D') {
            parts['D'].t++;
            parts['D'].s += parseInt(answers['Q' + q.qNum]) || 0;
            parts['D'].m += 5;
        } else {
            parts[q.part].t++;
            let user = (answers['Q' + q.qNum] || "").toString().toLowerCase().trim().replace(/[.,?!]/g, '');
            let correct = (q.correct || "MISSING").toString().toLowerCase().trim().replace(/[.,?!]/g, '');
            if (user === correct) parts[q.part].c++;
        }
    });

    const getPScore = (p) => {
        if (p === 'D') return parts['D'].m > 0 ? (parts['D'].s / parts['D'].m) * 25 : 0;
        return parts[p].t > 0 ? (parts[p].c / parts[p].t) * 25 : 0;
    };

    let scA = Math.round(getPScore('A'));
    let scB = Math.round(getPScore('B'));
    let scC = Math.round(getPScore('C'));
    let scD = Math.round(getPScore('D'));

    return { total: scA + scB + scC + scD, A: scA, B: scB, C: scC, D: scD };
}

function submit() {
    if (timerInterval) clearInterval(timerInterval);
    toggleDisplay('quizInterface', false);
    toggleDisplay('submittingBox', true);

    const results = calculateSubmissionScore();
    const studentName = document.getElementById('studentNameDisplay').innerText;

    // 如果是口试模式，上传类型设为 [加考-口语]
    const typeLabel = currentMode === 'written' ? "[笔试]" : "[口试]";

    const payload = {
        sessionId: getSessionId(),
        studentName: studentName,
        lessonTitle: typeLabel + " " + currentData.title,
        examType: "Grade3-S2-" + currentMode,
        score: results.total,
        listeningScore: results.A,
        readingScore: results.B,
        writingScore: results.C,
        speakingScore: results.D
    };

    console.log("Submitting payload:", payload);

    const query = Object.keys(payload).map(k => k + '=' + encodeURIComponent(payload[k])).join('&');
    fetch(GOOGLE_SCRIPT_URL + '?' + query, { method: 'GET', mode: 'no-cors' })
        .then(() => showFinalUI(results, studentName))
        .catch(err => { console.error(err); showFinalUI(results, studentName, false); });
}

function showFinalUI(results, name, success = true) {
    toggleDisplay('submittingBox', false);
    const box = document.getElementById('resultBox');

    let scoreDisplay = currentMode === 'written' ? (results.A + results.B + results.C) : results.D;
    let maxDisplay = currentMode === 'written' ? 75 : 25;

    let handoverNote = currentMode === 'written' ?
        `<div style="background:#fff3e0; padding:15px; border-radius:15px; border:2px dashed #ff9800; margin:20px 0;">
            <p style="color:#e65100; font-weight:bold; font-size:18px;">🎉 笔试挑战成功！</p>
            <p style="color:#666;">现在，请带着设备去找 <b>沈老师 (Merry)</b><br>进行最后的口语面试哦！</p>
        </div>` :
        `<div style="background:#e8f5e9; padding:15px; border-radius:15px; border:2px dashed #4caf50; margin:20px 0;">
            <p style="color:#2e7d32; font-weight:bold; font-size:18px;">🌟 口语面试结束！</p>
            <p style="color:#666;">你表现得非常棒，继续加油！</p>
        </div>`;

    box.innerHTML = `
        <div class="score-summary">
            <h1 style="color:#2196F3;">${name} 同学</h1>
            <div style="font-size:16px; color:#666;">本次${currentMode === 'written' ? '笔试' : '口试'}得分</div>
            <div style="font-size:60px; color:#f44336; font-weight:bold; margin:10px 0;">
                ${scoreDisplay}<span style="font-size:20px; color:#999;"> / ${maxDisplay}</span>
            </div>
            ${handoverNote}
            <button class="btn-primary" onclick="location.reload()" style="width:100%;">返回首页 🏠</button>
        </div>
    `;
    toggleDisplay('resultBox', true);
}

// 辅助函数
function choose(qid, v) { answers['Q' + qid] = v; renderQuestion(); }
function rate(qid, s) { answers['Q' + qid] = s; renderQuestion(); }
function prevQ() { if (currentQIndex > 0) { currentQIndex--; renderQuestion(); } }
function nextQ() { if (currentQIndex < 50) { currentQIndex++; renderQuestion(); } } // 防超限
function updateFill(qid) { answers['Q' + qid] = event.target.value.trim(); renderQuestion(); }
function moveWord(el, tid, sid, qid) {
    const t = document.getElementById(tid);
    if (el.parentElement.id === sid) t.appendChild(el); else document.getElementById(sid).appendChild(el);
    answers['Q' + qid] = Array.from(t.children).map(s => s.innerText).join(' ');
    renderQuestion();
}
function toggleDisplay(id, show) {
    const el = document.getElementById(id); if (!el) return;
    el.style.display = show ? 'block' : 'none';
    if (show) el.classList.remove('hidden'); else el.classList.add('hidden');
}
function startTimer() {
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) { clearInterval(timerInterval); submit(); return; }
        timeLeft--;
        const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        if (document.getElementById('timerDisplay')) document.getElementById('timerDisplay').innerText = `${m}:${s}`;
    }, 1000);
}
function speak(text) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.8; window.speechSynthesis.speak(u);
}
