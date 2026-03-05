// ================= 全局配置 (三年级下册 Weekly Quiz V2.0 - 综合面试版) =================
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyR1D1HVmrmW7PHuIP-iYgSTcNFVHWBfoXpYIotWWQkXrIYVK8tc6YhzQEoGVDnxpI/exec";

const SPEAKING_RUBRIC = [
    "[1分] 需较多提示，仅能说出零散单词",
    "[2分] 能在提示下大致作答，但不完整",
    "[3分] 能基本作答，有少量语法或读音错误",
    "[4分] 表达自然，信息较完整，发音较好",
    "[5分] 表达地道流利、信息完整、读音准确"
];

let currentData = null;
let currentMode = 'composite'; // 默认为综合模式
let currentQIndex = 0;
let answers = {};
let timerInterval;
let timeLeft = 0;
let isSpeakingPhase = false; // 是否进入了口语面试阶段

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
    console.log("Engine Loaded: Grade 3 Second Term (下学期) Integrated Quiz V2.0");
}

window.LOAD_QUIZ = function (data) {
    currentData = data;
    timeLeft = data.timeLimit || 540;
    const titleEl = document.getElementById('examTitle');
    if (titleEl) titleEl.innerText = data.title;
    toggleDisplay('loadingBox', false);
    toggleDisplay('menuBox', false);
    toggleDisplay('setupBox', true);
};

function loadPaper(path) {
    toggleDisplay('loadingBox', true);
    const script = document.createElement('script');
    // 综合模式下统一读取 written 文件夹的数据，因为 written 数据里通常包含或引申口语
    // 注意：如果您的 speaking 数据和 written 数据是完全不同的文件，建议合成一个
    // 目前我先把所有逻辑统一到 written 数据里处理
    let folder = 'data/written/';
    if (path.indexOf('/') === -1) { script.src = folder + path; } else { script.src = path; }
    script.src += "?t=" + new Date().getTime();
    script.onerror = () => { alert("❌ 文件未找到: " + script.src); location.reload(); };
    document.body.appendChild(script);
}

function startExam() {
    const student = document.getElementById('selectedStudentName').value;
    if (!student) { alert("请先点击选择名字！"); return; }
    toggleDisplay('setupBox', false);
    toggleDisplay('quizInterface', true);
    document.getElementById('studentNameDisplay').innerText = student;
    currentQIndex = 0;
    answers = {};
    isSpeakingPhase = false;
    renderQuestion();
    startTimer();
}

// ================= ⭐ 核心渲染逻辑 ⭐ =================
function renderQuestion() {
    // 过滤题目：如果是笔试阶段，只看 Part A/B/C；如果是口语阶段，只看 Part D
    const allQuestions = currentData.questions;

    // 如果没有 Part D 却进入了面试阶段（防错）
    const hasSpeakingQuestions = allQuestions.some(q => q.part === 'D');

    // 自动判断当前题目是否属于当前阶段
    const q = allQuestions[currentQIndex];

    // 如果已经做完笔试，且当前题目是口语题，但还没触发“移交老师”界面
    if (q.part === 'D' && !isSpeakingPhase) {
        showTeacherHandover();
        return;
    }

    const total = allQuestions.length;

    // 1. 更新进度条
    document.getElementById('progressText').innerText = `第 ${currentQIndex + 1} 题 / 共 ${total} 题 (${q.part})`;
    document.getElementById('progressBar').style.width = `${((currentQIndex + 1) / total) * 100}%`;

    // 2. 导航按钮
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const btnSubmit = document.getElementById('btnSubmit');

    btnPrev.disabled = (currentQIndex === 0);

    if (currentQIndex === total - 1) {
        toggleDisplay('btnNext', false);
        toggleDisplay('btnSubmit', true);
    } else {
        toggleDisplay('btnNext', true);
        toggleDisplay('btnSubmit', false);
    }

    // 3. 检查当前题是否已答
    const hasAnswered = answers['Q' + q.qNum] !== undefined && answers['Q' + q.qNum].toString().trim() !== '';
    const targetBtn = (currentQIndex === total - 1) ? btnSubmit : btnNext;
    targetBtn.disabled = !hasAnswered;

    // 4. 生成题目内容
    let html = '';
    const partNames = { 'A': 'Listening (听力)', 'B': 'Reading (阅读)', 'C': 'Writing (写作)', 'D': 'Speaking (口语面试)' };
    html += `<div style="font-size:12px; color:#2196F3; font-weight:bold; text-transform:uppercase; margin-bottom:5px;">${partNames[q.part] || 'Part ' + q.part}</div>`;
    html += `<h3 class="q-text">${q.qNum}. ${q.text}</h3>`;

    if (q.audioText) {
        const safeText = q.audioText.replace(/'/g, "\\'");
        html += `<button class="audio-btn" onclick="speak('${safeText}')">🔊 播放录音 (Listen)</button>`;
    }

    if (q.imageUri) {
        let imgSrc = q.imageUri;
        if (!imgSrc.startsWith('http') && !imgSrc.startsWith('img/') && !imgSrc.startsWith('./img/')) imgSrc = 'img/' + imgSrc;
        html += `<img src="${imgSrc}" style="max-width:100%; border-radius:15px; margin-bottom:15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">`;
    }

    // 5. 生成选项区域
    if (q.part !== 'D') {
        // 笔试题型 (Select / Drag / Fill)
        if (q.type === 'select' || !q.type) {
            html += `<div class="options-list">`;
            q.options.forEach(opt => {
                let displayContent = opt;
                let val = opt;
                if (opt.startsWith('image:')) {
                    let imgKey = opt.split(':')[1].trim();
                    displayContent = `<img src="img/${imgKey}.png" class="opt-img" style="height:60px; vertical-align:middle">`;
                }
                const isSelected = answers['Q' + q.qNum] === val ? 'selected' : '';
                html += `<div class="option-item ${isSelected}" onclick="choose('${q.qNum}', '${val}')">${displayContent}</div>`;
            });
            html += `</div>`;
        } else if (q.type === 'drag-sort') {
            html += `<div style="margin:10px 0; color:#666; font-size:14px;">(点击单词进行排序)</div>`;
            html += `<div class="drag-area" id="target-${q.qNum}"></div><div class="drag-area" id="source-${q.qNum}">`;
            q.words.forEach(w => html += `<span class="word-chip" onclick="moveWord(this, 'target-${q.qNum}', 'source-${q.qNum}', '${q.qNum}')">${w}</span>`);
            html += `</div>`;
        } else if (q.type === 'fill') {
            html += `<input type="text" oninput="updateFillAnswer('${q.qNum}')" class="fill-input" placeholder="输入答案">`;
        }
    } else {
        // 口语题型 (5分制)
        html += `<div class="score-row">`;
        for (let s = 5; s >= 1; s--) {
            const active = answers['Q' + q.qNum] === s ? 'active' : '';
            html += `<div class="score-item" onclick="rate('${q.qNum}', ${s})"><button class="score-btn ${active}">${s}分</button><span class="score-desc">${SPEAKING_RUBRIC[s - 1]}</span></div>`;
        }
        html += `</div>`;
    }
    document.getElementById('qContent').innerHTML = html;
}

function showTeacherHandover() {
    const html = `
        <div style="text-align:center; padding:20px;">
            <div style="font-size:50px; margin-bottom:20px;">👋</div>
            <h2 style="color:#ff5722;">笔试部分已完成！</h2>
            <p style="font-size:18px; color:#666;">请带着设备去找 <b>沈老师 (Merry)</b></p>
            <p>老师点击下方按钮开始面试：</p>
            <button class="btn-primary" style="background:#ff5722; padding:20px 40px; font-size:22px;" onclick="startSpeakingPhase()">老师已就位，开始口试 💬</button>
        </div>
    `;
    document.getElementById('qContent').innerHTML = html;
    toggleDisplay('btnNext', false);
    toggleDisplay('btnSubmit', false);
    toggleDisplay('btnPrev', false);
}

function startSpeakingPhase() {
    isSpeakingPhase = true;
    renderQuestion();
}

// 🔥 核心评分算法：25/25/25/25 权重 🔥
function calculateTotalScore() {
    let parts = { 'A': { correct: 0, total: 0 }, 'B': { correct: 0, total: 0 }, 'C': { correct: 0, total: 0 }, 'D': { score: 0, max: 0 } };

    currentData.questions.forEach(q => {
        if (q.part === 'D') {
            parts['D'].total += 1;
            parts['D'].score += parseInt(answers['Q' + q.qNum]) || 0;
            parts['D'].max += 5;
        } else {
            parts[q.part].total += 1;
            const userAns = (answers['Q' + q.qNum] || "").toLowerCase().trim().replace(/[.,?!]/g, '');
            const correctAns = q.correct.toLowerCase().trim().replace(/[.,?!]/g, '');
            if (userAns === correctAns) parts[q.part].correct += 1;
        }
    });

    const getPartPercent = (p) => parts[p].total > 0 ? (p === 'D' ? (parts[p].score / parts[p].max) : (parts[p].correct / parts[p].total)) : 0;

    const scoreA = Math.round(getPartPercent('A') * 25);
    const scoreB = Math.round(getPartPercent('B') * 25);
    const scoreC = Math.round(getPartPercent('C') * 25);
    const scoreD = Math.round(getPartPercent('D') * 25);

    return { total: scoreA + scoreB + scoreC + scoreD, A: scoreA, B: scoreB, C: scoreC, D: scoreD };
}

function submit() {
    clearInterval(timerInterval);
    toggleDisplay('quizInterface', false);
    toggleDisplay('submittingBox', true);

    const results = calculateTotalScore();
    const studentName = document.getElementById('studentNameDisplay').innerText;

    const payload = {
        sessionId: getSessionId(),
        studentName: studentName,
        lessonTitle: "[下学期] " + currentData.title,
        examType: "Integrated",
        score: results.total,
        listeningScore: results.A,
        readingScore: results.B,
        writingScore: results.C,
        speakingScore: results.D
    };

    const queryParams = Object.keys(payload).map(k => k + '=' + encodeURIComponent(payload[k])).join('&');
    fetch(GOOGLE_SCRIPT_URL + '?' + queryParams, { method: 'GET', mode: 'no-cors' })
        .then(() => showFinalResult(results.total, studentName))
        .catch(() => showFinalResult(results.total, studentName, false));
}

function showFinalResult(score, name, success = true) {
    toggleDisplay('submittingBox', false);
    const resultBox = document.getElementById('resultBox');

    let feedback = score >= 90 ? "👑 太完美了！你是闪耀的英语之星！" : (score >= 80 ? "🌟 真棒！成绩非常出色！" : (score >= 60 ? "👍 很不错！继续加油会更强！" : "🌱 别气馁，多读多听一定能进步！"));

    resultBox.innerHTML = `
        <div class="score-summary">
            <h1>🎉 挑战圆满结束！</h1>
            <div style="font-size:24px; color:#333; margin:20px 0;">
                <span style="color:#2196F3; font-weight:bold;">${name}</span> 同学
            </div>
            <div style="font-size:16px; color:#666;">你的最终总分</div>
            <div class="big-score" style="font-size:80px; color:#4caf50; font-weight:bold; margin:10px 0;">
                ${score}<span style="font-size:20px; color:#999;"> / 100 分</span>
            </div>
            <div class="feedback-box" style="background:#e8f5e9; padding:15px; border-radius:15px; color:#2e7d32; margin-bottom:20px;">
                ${feedback}
            </div>
            ${success ? '<p style="color:green;">✅ 成绩已同步至后台</p>' : '<p style="color:red;">⚠️ 成绩同步失败，请告知老师</p>'}
            <button class="btn-primary" onclick="location.reload()" style="width:100%; font-size:18px;">返回首页 🏠</button>
        </div>
    `;
    toggleDisplay('resultBox', true);
}

// 辅助函数保持原样但微调
function choose(qid, val) { answers['Q' + qid] = val; renderQuestion(); }
function rate(qid, s) { answers['Q' + qid] = s; renderQuestion(); }
function prevQ() { if (currentQIndex > 0) { currentQIndex--; renderQuestion(); } }
function nextQ() { if (currentQIndex < currentData.questions.length - 1) { currentQIndex++; renderQuestion(); } }
function toggleDisplay(id, show) {
    const el = document.getElementById(id);
    if (!el) return;
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
    u.lang = 'en-US'; u.rate = 0.8;
    window.speechSynthesis.speak(u);
}
function moveWord(el, targetId, sourceId, qid) {
    const target = document.getElementById(targetId);
    const source = document.getElementById(sourceId);
    if (el.parentElement === source) target.appendChild(el); else source.appendChild(el);
    const sentence = Array.from(target.children).map(span => span.innerText).join(' ');
    answers['Q' + qid] = sentence;
    const total = currentData.questions.length;
    const targetBtn = (currentQIndex === total - 1) ? document.getElementById('btnSubmit') : document.getElementById('btnNext');
    targetBtn.disabled = (sentence.length === 0);
}
function updateFillAnswer(qid) {
    const val = event.target.value.trim();
    answers['Q' + qid] = val;
    const total = currentData.questions.length;
    const targetBtn = (currentQIndex === total - 1) ? document.getElementById('btnSubmit') : document.getElementById('btnNext');
    targetBtn.disabled = (val.length === 0);
}
