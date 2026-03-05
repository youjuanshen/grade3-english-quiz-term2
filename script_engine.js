// ==================================================================
// 🐾 script_engine.js V2.3 - 三年级下册专用 (增强稳定性版)
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
    console.log("🚀 Engine V2.3 Initialized in [" + mode + "] mode");

    const urlParams = new URLSearchParams(window.location.search);
    const autoLesson = urlParams.get('lesson');
    if (autoLesson) { loadPaper(autoLesson); }
}

window.LOAD_QUIZ = function (data) {
    console.log("📦 Quiz Data Loaded:", data.title);
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
    script.onerror = () => { alert("❌ 文件加载失败: " + path); location.reload(); };
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

// --- 增强型规范化比较 ---
function cleanString(str) {
    if (!str) return "";
    return str.toString()
        .toLowerCase()
        .replace(/[.,?!:：，。！？]/g, '') // 彻底移除标点
        .replace(/\s+/g, '')             // 移除所有空格
        .trim();
}

function renderQuestion() {
    const allQs = currentData.questions;
    const relevantQs = allQs.filter(q => {
        if (currentMode === 'written') return q.part === 'A' || q.part === 'B' || q.part === 'C';
        return q.part === 'D';
    });

    if (relevantQs.length === 0) {
        document.getElementById('qContent').innerHTML = "<p style='padding:20px;'>本课暂无该部分的题目。</p>";
        return;
    }

    if (currentQIndex >= relevantQs.length) currentQIndex = relevantQs.length - 1;
    const q = relevantQs[currentQIndex];

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
        html += `<div class="score-row">`;
        for (let s = 5; s >= 1; s--) {
            const active = answers['Q' + q.qNum] === s ? 'active' : '';
            html += `<div class="score-item" onclick="rate('${q.qNum}', ${s})"><button class="score-btn ${active}">${s}分</button><span class="score-desc">${SPEAKING_RUBRIC[s - 1]}</span></div>`;
        }
        html += `</div>`;
    }
    document.getElementById('qContent').innerHTML = html;
}

function calculateSubmissionScore() {
    let parts = { 'A': { c: 0, t: 0 }, 'B': { c: 0, t: 0 }, 'C': { c: 0, t: 0 }, 'D': { s: 0, m: 0, t: 0 } };

    currentData.questions.forEach(q => {
        if (q.part === 'D') {
            parts['D'].t++;
            parts['D'].s += parseInt(answers['Q' + q.qNum]) || 0;
            parts['D'].m += 5;
        } else {
            parts[q.part].t++;
            let user = cleanString(answers['Q' + q.qNum] || "");
            let correct = cleanString(q.correct || "");
            if (user === correct) {
                parts[q.part].c++;
            } else {
                console.warn(`Mismatch Q${q.qNum}: [${user}] vs [${correct}]`);
            }
        }
    });

    const getPScore = (p) => {
        if (p === 'D') return parts['D'].m > 0 ? (parts['D'].s / parts['D'].m) * 25 : 0;
        // 如果题目总数为0，该部分得满分
        if (parts[p].t === 0) return 25;
        return (parts[p].c / parts[p].t) * 25;
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

    console.log("📤 Submitting Score:", payload);

    const query = Object.keys(payload).map(k => k + '=' + encodeURIComponent(payload[k])).join('&');
    fetch(GOOGLE_SCRIPT_URL + '?' + query, { method: 'GET', mode: 'no-cors' })
        .then(() => {
            console.log("✅ Server Accepted Request");
            showFinalUI(results, studentName);
        })
        .catch(err => {
            console.error("❌ Submission Failed:", err);
            showFinalUI(results, studentName, false);
        });
}

function showFinalUI(results, name, success = true) {
    toggleDisplay('submittingBox', false);
    const box = document.getElementById('resultBox');

    // 显示分数的差异
    let scoreVal = currentMode === 'written' ? (results.A + results.B + results.C) : results.D;
    let maxVal = currentMode === 'written' ? 75 : 25;

    let handover = currentMode === 'written' ?
        `<div style="margin:20px 0; background:#fff3e0; padding:15px; border-radius:12px; border:2px dashed #ff9800;">
            <p style="color:#e65100; font-weight:bold;">🎉 笔试已完成！</p>
            <p>现在请找 <b>沈老师</b> 进行口语面试。</p>
        </div>` :
        `<div style="margin:20px 0; background:#e8f5e9; padding:15px; border-radius:12px; border:2px dashed #4caf50;">
            <p style="color:#2e7d32; font-weight:bold;">🌟 面试结束！</p>
            <p>你得表现棒极了！</p>
        </div>`;

    box.innerHTML = `
        <h1 style="color:#2196F3;">${name}</h1>
        <div style="font-size:14px; color:#666;">本次${currentMode === 'written' ? '笔试' : '口试'}得分</div>
        <div style="font-size:62px; color:#f44336; font-weight:bold; margin:15px 0;">${scoreVal}<span style="font-size:18px; color:#999;">/${maxVal}</span></div>
        ${handover}
        <button class="btn-primary" onclick="location.reload()" style="width:100%;">回到首页</button>
    `;
    toggleDisplay('resultBox', true);
}

function choose(qid, v) { answers['Q' + qid] = v; renderQuestion(); }
function rate(qid, s) { answers['Q' + qid] = s; renderQuestion(); }
function prevQ() { if (currentQIndex > 0) { currentQIndex--; renderQuestion(); } }
function nextQ() { if (currentQIndex < relevantQs_length()) { currentQIndex++; renderQuestion(); } }

function relevantQs_length() {
    return currentData.questions.filter(q => {
        if (currentMode === 'written') return q.part === 'A' || q.part === 'B' || q.part === 'C';
        return q.part === 'D';
    }).length;
}

function updateFill(qid) {
    answers['Q' + qid] = event.target.value;
    const relevantQs = currentData.questions.filter(q => {
        if (currentMode === 'written') return q.part === 'A' || q.part === 'B' || q.part === 'C';
        return q.part === 'D';
    });
    // 更新按钮状态
    const btnNext = document.getElementById('btnNext');
    const btnSubmit = document.getElementById('btnSubmit');
    const hasAnswered = event.target.value.trim() !== "";
    if (currentQIndex === relevantQs.length - 1) btnSubmit.disabled = !hasAnswered; else btnNext.disabled = !hasAnswered;
}

function moveWord(el, tid, sid, qid) {
    const t = document.getElementById(tid);
    if (el.parentElement.id === sid) { el.classList.add('active'); t.appendChild(el); }
    else { el.classList.remove('active'); document.getElementById(sid).appendChild(el); }
    answers['Q' + qid] = Array.from(t.children).map(s => s.innerText).join(' ');
    renderQuestion();
}

function toggleDisplay(id, show) {
    const el = document.getElementById(id); if (!el) return;
    el.style.display = show ? 'block' : 'none';
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
