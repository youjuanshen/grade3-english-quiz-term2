// ================= 全局配置 (三年级下册 Weekly Quiz V1.0) =================
// 基于上学期 V13.1 引擎，适配第二学期 Weekly Quiz
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyR1D1HVmrmW7PHuIP-iYgSTcNFVHWBfoXpYIotWWQkXrIYVK8tc6YhzQEoGVDnxpI/exec";

// ✅ 口语评分按钮描述 (升级为5分制)
const SPEAKING_RUBRIC = [
    "[1分] 需较多提示，仅能说出零散单词",
    "[2分] 能在提示下大致作答，但不完整",
    "[3分] 能基本作答，有少量语法或读音错误",
    "[4分] 表达自然，信息较完整，发音较好",
    "[5分] 表达地道流利、信息完整、读音准确"
];

let currentData = null;
let currentMode = '';
let currentQIndex = 0;
let answers = {};
let timerInterval;
let timeLeft = 0;

function getSessionId() {
    const key = 'grade3_s2_quiz_session_id';
    let sid = localStorage.getItem(key);
    if (!sid) {
        // 增加更显眼的下学期标志
        sid = `TERM2-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        localStorage.setItem(key, sid);
    }
    return sid;
}

function initEngine(mode) {
    currentMode = mode;
    console.log("Engine Loaded: Grade 3 Second Term (下学期) Weekly Quiz V1.1");
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
    let folder = currentMode === 'speaking' ? 'data/speaking/' : 'data/written/';
    if (path.indexOf('/') === -1) { script.src = folder + path; } else { script.src = path; }
    script.src += "?t=" + new Date().getTime();
    script.onerror = () => { alert("❌ 文件未找到: " + script.src); location.reload(); };
    document.body.appendChild(script);
}

function startExam() {
    const student = document.getElementById('studentSelector').value;
    if (!student) { alert("请先选择名字！"); return; }
    toggleDisplay('setupBox', false);
    toggleDisplay('quizInterface', true);
    document.getElementById('studentNameDisplay').innerText = student;
    currentQIndex = 0;
    answers = {};
    renderQuestion();
    startTimer();
}

// ================= ⭐ 核心渲染逻辑 ⭐ =================
function renderQuestion() {
    const q = currentData.questions[currentQIndex];
    const total = currentData.questions.length;
    const currentQid = q.qNum;

    // 1. 更新进度条
    document.getElementById('progressText').innerText = `第 ${currentQIndex + 1} 题 / 共 ${total} 题`;
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
    const hasAnswered = answers['Q' + currentQid] !== undefined && answers['Q' + currentQid].toString().trim() !== '';
    const targetBtn = (currentQIndex === total - 1) ? btnSubmit : btnNext;
    targetBtn.disabled = !hasAnswered;

    // 4. 生成题目
    let html = '';
    if (q.part) html += `<div style="font-size:12px; color:#999; font-weight:bold; text-transform:uppercase; margin-bottom:5px;">Part ${q.part}</div>`;
    html += `<h3 class="q-text">${q.qNum}. ${q.text}</h3>`;

    if (q.audioText) {
        const safeText = q.audioText.replace(/'/g, "\\'");
        html += `<button class="audio-btn" onclick="speak('${safeText}')">🔊 播放录音 (Listen)</button>`;
    }

    // 修复图片路径：如果 imageUri 已包含 img/ 则不再拼接
    if (q.imageUri) {
        let imgSrc = q.imageUri;
        if (!imgSrc.startsWith('http') && !imgSrc.startsWith('img/') && !imgSrc.startsWith('./img/')) {
            imgSrc = 'img/' + imgSrc;
        }
        html += `<img src="${imgSrc}" style="max-width:100%; border-radius:15px; margin-bottom:15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">`;
    } else if (q.imageKey && currentData.images) {
        html += `<img src="${currentData.images[q.imageKey]}" style="max-width:100%; border-radius:15px; margin-bottom:15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">`;
    }

    // 5. 生成选项/评分区域
    if (currentMode === 'written') {
        if (q.type === 'select' || !q.type) {
            html += `<div class="options-list">`;
            q.options.forEach(opt => {
                let displayContent = opt;
                let val = opt;
                if (opt.startsWith('image:')) {
                    let imgKey = opt.split(':')[1].trim();
                    let imgSrc = `img/${imgKey}.png`;
                    displayContent = `<img src="${imgSrc}" class="opt-img" style="height:60px; vertical-align:middle">`;
                }
                const isSelected = answers['Q' + q.qNum] === val ? 'selected' : '';
                const safeVal = encodeURIComponent(val);
                html += `<div class="option-item ${isSelected}" data-qid="${q.qNum}" data-value="${safeVal}" onclick="chooseValue(this)">${displayContent}</div>`;
            });
            html += `</div>`;
        } else if (q.type === 'drag-sort') {
            html += `<div style="margin:10px 0; color:#666; font-size:14px;">(点击单词，把它们移到上方横线处)</div>`;
            html += `<div class="drag-area" id="target-container" id="target-${q.qNum}"></div>`;
            html += `<div class="drag-area" id="source-${q.qNum}">`;

            let currentSentence = answers['Q' + q.qNum] || "";
            let chosenWords = currentSentence ? currentSentence.split(' ') : [];
            let remainingWords = [...q.words];
            chosenWords.forEach(word => {
                let idx = remainingWords.indexOf(word);
                if (idx > -1) remainingWords.splice(idx, 1);
            });

            q.words.forEach(w => {
                html += `<span class="word-chip" onclick="moveWord(this, 'target-${q.qNum}', 'source-${q.qNum}', '${q.qNum}')">${w}</span>`;
            });
            html += `</div>`;
        } else if (q.type === 'fill') {
            let currentAns = answers['Q' + q.qNum] || '';
            html += `<input type="text" id="fill-in-${q.qNum}" value="${currentAns}" oninput="updateFillAnswer('${q.qNum}')" class="fill-input" placeholder="请在此输入答案" style="width:90%;padding:12px;border-radius:15px;border:3px solid #b2ebf2;font-size:18px;">`;
        }
    } else {
        // 口语评分 (支持动态分数，默认5分)
        html += `<div class="score-row">`;
        const maxSpeakScore = q.score || 5;
        for (let score = maxSpeakScore; score >= 1; score -= 1) {
            const active = answers['Q' + q.qNum] === score ? 'active' : '';
            // 如果分值超过默认描述范围，则不显示详细描述
            const description = (score <= SPEAKING_RUBRIC.length) ? SPEAKING_RUBRIC[score - 1] : "";

            html += `
                 <div class="score-item" onclick="rate('${q.qNum}', ${score})">
                      <button class="score-btn ${active}">
                          ${score} 分
                      </button>
                      <span class="score-desc">${description}</span>
                  </div>
              `;
        }
        html += `</div>`;
    }
    document.getElementById('qContent').innerHTML = html;
}

// 🔥 辅助函数 🔥
function enableNavButtons(enable) {
    const total = currentData.questions.length;
    const targetBtn = (currentQIndex === total - 1) ? document.getElementById('btnSubmit') : document.getElementById('btnNext');
    if (targetBtn) targetBtn.disabled = !enable;
}

function chooseValue(el) {
    const qid = el.dataset.qid;
    const val = decodeURIComponent(el.dataset.value || '');
    choose(qid, val);
}

function choose(qid, val) {
    answers['Q' + qid] = val;
    renderQuestion();
    enableNavButtons(true);
}

function updateFillAnswer(qid) {
    const input = document.getElementById(`fill-in-${qid}`);
    answers['Q' + qid] = input.value.trim();
    enableNavButtons(input.value.trim().length > 0);
}

function moveWord(el, targetId, sourceId, qid) {
    const target = document.querySelector(`#qContent .drag-area[id^="target-"]`);
    const source = document.getElementById(sourceId);
    if (el.parentElement === source) target.appendChild(el); else source.appendChild(el);
    const sentence = Array.from(target.children).map(span => span.innerText).join(' ');
    answers['Q' + qid] = sentence;
    enableNavButtons(sentence.length > 0);
}

function rate(qid, score) {
    answers['Q' + qid] = score;

    const qContent = document.getElementById('qContent');
    if (currentMode === 'speaking' && qContent) {
        Array.from(qContent.querySelectorAll('.score-btn')).forEach((btn) => {
            const btnScoreText = btn.innerText.replace(/[^\d]/g, '');
            const btnScore = parseInt(btnScoreText);

            if (btnScore === score) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    enableNavButtons(true);
}

function prevQ() { if (currentQIndex > 0) { currentQIndex--; renderQuestion(); } }
function nextQ() { if (currentQIndex < currentData.questions.length - 1) { currentQIndex++; renderQuestion(); } }

function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US'; u.rate = 0.85;
        window.speechSynthesis.speak(u);
    }
}

function toggleDisplay(id, show) {
    const el = document.getElementById(id);
    if (el) {
        if (show) el.classList.remove('hidden'); else el.classList.add('hidden');
        el.style.display = show ? (id.startsWith('btn') ? 'inline-block' : 'block') : 'none';
    }
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) { clearInterval(timerInterval); submit(); return; }
        timeLeft--;
        const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        const display = document.getElementById('timerDisplay');
        if (display) display.innerText = `${m}:${s}`;
    }, 1000);
}

// ------------------------------------------------------------------
// 🔥 SUBMIT 函数 (包含超时和结果反馈) 🔥
// ------------------------------------------------------------------
function submit() {
    clearInterval(timerInterval);
    toggleDisplay('quizInterface', false);

    const submittingBox = document.getElementById('submittingBox');
    submittingBox.innerHTML = `
        <div class="cute-loader">🚀</div>
        <div class="loading-text">正在飞速上传成绩...</div>
        <div style="font-size:12px; color:#999; margin-top:10px;">(请稍候片刻，不要关闭窗口哦)</div>
    `;
    toggleDisplay('submittingBox', true);

    let totalScore = 0;
    let scoreL = 0, scoreR = 0, scoreW = 0;

    let maxScore = 0;
    if (currentMode === 'speaking') {
        currentData.questions.forEach(q => {
            const qMax = q.score || 5; // 下学期默认为5分
            maxScore += qMax;
            totalScore += parseInt(answers['Q' + q.qNum]) || 0;
        });
    } else {
        currentData.questions.forEach(q => {
            const qMax = q.score || 1;
            maxScore += qMax;

            const userAns = answers['Q' + q.qNum];
            let isCorrect = false;
            if (q.type === 'drag-sort') {
                if (userAns && userAns.replace(/[.,?!]/g, '').trim() === q.correct.replace(/[.,?!]/g, '').trim()) isCorrect = true;
            } else {
                if (userAns && userAns.toLowerCase().trim() === q.correct.toLowerCase().trim()) isCorrect = true;
            }

            if (isCorrect) {
                totalScore += qMax;
                if (q.part === 'A') scoreL += qMax;
                else if (q.part === 'B') scoreR += qMax;
                else if (q.part === 'C') scoreW += qMax;
            }
        });
    }
    let percentNum = Math.round((totalScore / maxScore) * 100);

    let feedback = "";
    if (percentNum >= 95) feedback = "🌟 哇！你是超级英语小达人！太棒了！";
    else if (percentNum >= 85) feedback = "👏 真不错！成绩非常优秀，继续保持！";
    else if (percentNum >= 70) feedback = "👍 做得好！大部分都掌握啦，继续加油！";
    else if (percentNum >= 60) feedback = "💪 及格啦！再多一点点细心就更完美了！";
    else feedback = "🌱 别灰心！这是成长的机会，多练习一定会进步的！";

    const payload = {
        sessionId: getSessionId(),
        studentName: document.getElementById('studentNameDisplay').innerText,
        // 在标题前显式加上“下学期”四个字，方便表格查看
        lessonTitle: "[下学期] " + currentData.title,
        examType: currentMode,
        score: totalScore,
        listeningScore: currentMode === 'written' ? scoreL : "",
        readingScore: currentMode === 'written' ? scoreR : "",
        writingScore: currentMode === 'written' ? scoreW : ""
    };

    console.log("Submitting:", payload);

    const TIMEOUT_MS = 40000;

    const queryParams = Object.keys(payload).map(k => k + '=' + encodeURIComponent(payload[k])).join('&');
    const fullUrl = GOOGLE_SCRIPT_URL + '?' + queryParams;

    const submissionPromise = fetch(fullUrl, {
        method: 'GET',
        mode: 'no-cors'
    });

    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('TIMEOUT_ERROR')), TIMEOUT_MS)
    );

    Promise.race([submissionPromise, timeoutPromise])
        .then(response => {
            if (response.status !== 200 && response.status !== 0) {
                throw new Error('SERVER_BUSY_OR_ERROR');
            }
            showFinalResult(totalScore, maxScore, feedback, true);
        })
        .catch(error => {
            let message = "❌ 成绩提交失败：请检查网络后重试。";
            if (error.message === 'TIMEOUT_ERROR') {
                message = "❌ 提交超时 (40秒)。服务器繁忙或网络断开，请排队稍后重试。";
            } else if (error.message === 'SERVER_BUSY_OR_ERROR') {
                message = "❌ 服务器繁忙，请稍等一分钟，然后点击'再来一次'重新提交。";
            } else if (error.message.includes("failed to fetch")) {
                message = "❌ 网络连接中断，请检查 Wi-Fi。";
            }
            showFinalResult(totalScore, maxScore, feedback, false, message);
        });
}

function showFinalResult(totalScore, maxScore, feedback, success, errorMessage = "") {
    toggleDisplay('submittingBox', false);

    const resultBox = document.getElementById('resultBox');
    let titleHTML = success ? `<h1>🎉 挑战圆满结束！</h1>` : `<h1>⚠️ 提交失败！</h1>`;
    let mainContent;

    if (success) {
        mainContent = `
            <div class="score-summary">
                <div style="font-size:16px; color:#666; margin-bottom:10px;">你的最终得分</div>
                <div class="big-score">
                    ${totalScore} <span class="total-score">/ ${maxScore} 分</span>
                </div>
                <div class="feedback-box">
                    ${feedback}
                </div>
                <p style="color:green; font-weight:bold;">✅ 成绩已成功上传。</p>
            </div>
        `;
    } else {
        mainContent = `
            <div class="score-summary">
                <div style="font-size:16px; color:#D9534F; font-weight:bold; margin-bottom:15px;">${errorMessage}</div>
                本次笔试得分为：${totalScore} / ${maxScore} 分
                <p>请尝试重新提交或联系老师手动记录。</p>
            </div>
        `;
    }

    resultBox.innerHTML = `
        ${titleHTML}
        ${mainContent}
        <button class="btn-primary" onclick="location.reload()" style="font-size:20px;">返回菜单 🚀</button>
    `;
    toggleDisplay('resultBox', true);
}
