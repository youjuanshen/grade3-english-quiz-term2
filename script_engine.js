// ==================================================================
// 🐾 script_engine.js V2.3 - 三年级下册专用 (增强稳定性版)
// ==================================================================
// ===== Lark 多维表格配置 =====
const LARK_APP_ID = "cli_a93bc13364f88060";
const LARK_APP_SECRET = "om7RQokYqVlyQJOlIfdatcuFVQw85OIj";
const LARK_APP_TOKEN = "Oy1dbiDS7aLIS8sqI1ZumqJSt8b";
const LARK_TABLE_ID = "tblKpStf6IgveRvP";

// 本地 Token 代码已经移除，转移至云端 Worker 处理

// ==================================================================
// 终极兼容方案：完全抛弃 fetch，使用原始 XMLHttpRequest (XHR)
// XHR 自 2006 年起内置于所有浏览器，iPhone 7 的 iOS 10+ 完美支持
// ==================================================================
function xhrPost(url, data, timeoutMs) {
    return new Promise(function(resolve, reject) {
        // 把密钥混入body中，避免自定义header触发CORS预检
        data._key = 'merry-quiz-2026-secret';
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.timeout = timeoutMs || 20000;

        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    resolve(JSON.parse(xhr.responseText));
                } catch(e) {
                    reject(new Error('JSON_PARSE_ERROR'));
                }
            } else {
                reject(new Error('SERVER_' + xhr.status));
            }
        };

        xhr.onerror = function() {
            reject(new Error('NETWORK_ERROR'));
        };

        xhr.ontimeout = function() {
            reject(new Error('TIMEOUT_ERROR'));
        };

        xhr.send(JSON.stringify(data));
    });
}

// 发送测试成绩到 Lark（XHR 版本：手机只发一次请求，最多重试 3 次）
function sendScoreToLark(scoreData) {
    var url = 'https://1316992450-7lwf0xnb7d.ap-guangzhou.tencentscf.com/';
    var attempt = 0;
    var maxAttempts = 3;

    function tryOnce() {
        attempt++;
        console.log('[XHR] 尝试第 ' + attempt + ' 次发送成绩...');
        return xhrPost(url, scoreData, 20000).catch(function(err) {
            console.warn('[XHR] 第 ' + attempt + ' 次失败: ' + err.message);
            if (attempt < maxAttempts) {
                return new Promise(function(resolve) {
                    setTimeout(resolve, 1000);
                }).then(tryOnce);
            }
            throw err;
        });
    }

    return tryOnce();
}
const SPEAKING_RUBRIC = [
    "[1分] 需较多提示，仅能说出零散单词",
    "[2分] 能在提示下大致作答，但不完整",
    "[3分] 能基本作答，有少量语法或读音错误",
    "[4分] 表达自然，信息较完整，发音较好",
    "[5分] 表达地道流利、信息完整、读音准确"
];

let currentData = null;
let currentMode = 'combined'; // 'written', 'speaking', 或 'combined'
let combinedPhase = 'written'; // 用来记录 combined 模式进行到了哪一步 ('written' -> 'speaking')
let currentQIndex = 0;

window.startCombinedSpeaking = function() {
    toggleDisplay('waitTeacherBox', false);
    toggleDisplay('quizInterface', true);
    combinedPhase = 'speaking';
    currentQIndex = 0;
    renderQuestion();
};

// 工具方法：统一获取当前模式应该显示的题目
function getRelevantQs() {
    if (!currentData) return [];
    return currentData.questions.filter(q => {
        if (currentMode === 'written') return q.part !== 'D';
        if (currentMode === 'speaking') return q.part === 'D';
        if (currentMode === 'combined') {
            return combinedPhase === 'written' ? q.part !== 'D' : q.part === 'D';
        }
        return false;
    });
}
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
    const relevantQs = getRelevantQs();

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

// ============================================================
// 🔥 评分 + 提交 (统一流转入口) 🔥
// ============================================================
function submit() {
    // 【阶段 1】：如果是在综合模式下，刚刚做完笔试，那么暂停提交，并唤出“等待老师”界面
    if (currentMode === 'combined' && combinedPhase === 'written') {
        if (timerInterval) clearInterval(timerInterval);
        toggleDisplay('quizInterface', false);
        
        let waitBox = document.getElementById('waitTeacherBox');
        if (!waitBox) {
            waitBox = document.createElement('div');
            waitBox.id = 'waitTeacherBox';
            waitBox.className = 'card';
            waitBox.style.textAlign = 'center';
            waitBox.style.marginTop = '20px';
            waitBox.innerHTML = `
                <h2 style="color:#FF9800; font-size:28px; margin:20px 0;">🎉 笔试完毕！</h2>
                <div style="font-size:18px; margin-bottom:20px; font-weight:bold; color:#1976d2;">
                    ✋ 笔试部分已安全做完
                </div>
                <div style="background:#e1f5fe; border:3px dashed #03a9f4; border-radius:15px; padding:15px; margin-bottom:20px;">
                    <p style="font-size:18px; font-weight:bold; color:#f44336; margin:0;">请马上举手，或者拿着设备去找沈老师进行<span style="font-size:22px;">口语测试</span>吧！</p>
                    <p style="color:#666; font-size:14px; margin-top:5px;">（⚠️你的成绩还在页面里挂着未上传，千万不要关闭本网页⚠️）</p>
                </div>

                <div style="margin-top:30px; border-top:2px dashed #eee; padding-top:20px;">
                    <p style="color:#ccc; font-size:12px; margin-bottom:10px;">--- 👇 沈老师专属通道 👇 ---</p>
                    <button class="btn-primary" onclick="startCombinedSpeaking()" style="background:#4caf50; font-size:20px; padding:15px; border-radius:30px; box-shadow:0 6px 15px rgba(76,175,80,0.4);">👨‍🏫 老师点击：开始口语</button>
                </div>
            `;
            document.querySelector('.container').appendChild(waitBox);
        }
        toggleDisplay('waitTeacherBox', true);
        return; // 执行到这里暂停，直接退回系统
    }

    // 【阶段 2】：普通模式，或者综合模式的最后阶段（两部分都做完了）
    if (timerInterval) clearInterval(timerInterval);
    toggleDisplay('quizInterface', false);

    // 显示上传中界面
    const submittingBox = document.getElementById('submittingBox');
    submittingBox.innerHTML = `
        <div class="cute-loader">🚀</div>
        <div>正在极速上传所有成绩...</div>
        <div style="font-size:12px; color:#999; margin-top:10px;">(请稍候，不要关闭窗口)</div>
    `;
    toggleDisplay('submittingBox', true);

    let totalScore = 0;
    let scoreL = 0, scoreR = 0, scoreW = 0;
    let maxScore = 0;
    let speakingScore = 0;

    // 通用分数计算方法（综合三部分与口语分数）
    currentData.questions.forEach(q => {
        // 过滤不需要算分的题
        if (currentMode === 'written' && q.part === 'D') return;
        if (currentMode === 'speaking' && q.part !== 'D') return;

        const qMax = q.score || 5; 
        maxScore += qMax;

        if (q.part === 'D') {
            const s = parseInt(answers['Q' + q.qNum]) || 0;
            totalScore += s;
            speakingScore += s;
        } else {
            const userAns = answers['Q' + q.qNum];
            let isCorrect = false;

            if (userAns && cleanString(userAns) === cleanString(q.correct)) isCorrect = true;

            if (isCorrect) {
                totalScore += qMax;
                if (q.part === 'A') scoreL += qMax;
                else if (q.part === 'B') scoreR += qMax;
                else if (q.part === 'C') scoreW += qMax;
            } else {
                console.warn(`❌ Q${q.qNum}: [${userAns}] vs [${q.correct}]`);
            }
        }
    });

    let percentNum = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
    console.log(`📊 得分: ${totalScore}/${maxScore} (${percentNum}%) | L:${scoreL} R:${scoreR} W:${scoreW}`);

    let feedback = "";
    if (percentNum >= 95) feedback = "🌟 哇！你是超级英语小达人！太棒了！";
    else if (percentNum >= 85) feedback = "👏 真不错！成绩非常优秀，继续保持！";
    else if (percentNum >= 70) feedback = "👍 做得好！大部分都掌握啦，继续加油！";
    else if (percentNum >= 60) feedback = "💪 及格啦！再多一点点细心就更完美了！";
    else feedback = "🌱 别灰心！这是成长的机会，多练习一定会进步的！";

    // 构建给 Lark 的数据包
    const studentName = document.getElementById('studentNameDisplay').innerText;

    // 计算实际用时
    const maxTime = currentData.timeLimit || 600;
    let timeUsedSeconds = maxTime - timeLeft;
    if (timeUsedSeconds < 0) timeUsedSeconds = 0;
    const minUsed = Math.floor(timeUsedSeconds / 60);
    const secUsed = timeUsedSeconds % 60;
    const durationStr = minUsed > 0 ? `${minUsed}分${secUsed}秒` : `${secUsed}秒`;

    const scoreData = {
        time: new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }), // 这个字段在你的飞书表里其实是个文本而不是日期类型
        studentName: studentName,
        course: "[下学期] " + currentData.title, // 去掉括号(笔试)/(口试)，才能匹配到同一行
        duration: durationStr, 
        total: totalScore,
        accuracy: percentNum + "%",
        listening: (currentMode === 'written' || currentMode === 'combined') ? scoreL : 0,
        reading: (currentMode === 'written' || currentMode === 'combined') ? scoreR : 0,
        writing: (currentMode === 'written' || currentMode === 'combined') ? scoreW : 0,
        speaking: speakingScore
    };

    console.log("📤 Submitting to Lark Bitable / LocalStorage:", scoreData);

    // 【新增强力备份机制】：不管网络好不好，强制无条件先存到本地！
    try {
        let savedRecords = JSON.parse(localStorage.getItem('merryQuizRecords') || '[]');
        savedRecords.push({
            ...scoreData,
            submitTime: new Date().toLocaleString('zh-CN') // 本地存储依旧存人能看懂的时间
        });
        localStorage.setItem('merryQuizRecords', JSON.stringify(savedRecords));
    } catch (e) {
        console.warn("本地备份失败", e);
    }

    // ==================================================================
    // 纯 XHR 提交策略（腾讯云国内服务器，iPhone 7 XHR 可直连，无需 sendBeacon）
    // sendBeacon 在 iOS 12 上会破坏 JSON body（强制 text/plain），导致服务器崩溃
    // ==================================================================
    var submitUrl = 'https://1316992450-7lwf0xnb7d.ap-guangzhou.tencentscf.com/';
    var xhrDone = false;

    // 把密钥混入scoreData中
    scoreData._key = 'merry-quiz-2026-secret';

    try {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', submitUrl, true);
        xhr.setRequestHeader('Content-Type', 'text/plain'); // 避免 iOS 12 触发 CORS 预检
        xhr.timeout = 20000;

        xhr.onload = function() {
            if (xhrDone) return;
            xhrDone = true;
            try {
                var data = JSON.parse(xhr.responseText);
                if (data && data.code === 0) {
                    console.log('✅ 飞书已收到成绩！', data);
                    showFinalUI_v2(totalScore, maxScore, feedback, studentName, true);
                } else {
                    console.warn('⚠️ 飞书返回异常:', data);
                    showFinalUI_v2(totalScore, maxScore, feedback, studentName, false,
                        '⚠️ 服务器返回异常，请联系沈老师确认成绩');
                }
            } catch(e) {
                showFinalUI_v2(totalScore, maxScore, feedback, studentName, false,
                    '⚠️ 回复数据格式异常，请联系沈老师');
            }
        };

        xhr.onerror = function() {
            if (xhrDone) return;
            xhrDone = true;
            console.warn('XHR 网络错误');
            showFinalUI_v2(totalScore, maxScore, feedback, studentName, false,
                '❌ 网络连接失败，成绩已存本地，请联系沈老师');
        };

        xhr.ontimeout = function() {
            if (xhrDone) return;
            xhrDone = true;
            console.warn('XHR 超时');
            showFinalUI_v2(totalScore, maxScore, feedback, studentName, false,
                '❌ 网络超时，成绩已存本地，请联系沈老师');
        };

        xhr.send(JSON.stringify(scoreData));
    } catch(e) {
        if (!xhrDone) {
            xhrDone = true;
            showFinalUI_v2(totalScore, maxScore, feedback, studentName, false,
                '❌ 浏览器通信异常，成绩已存本地，请联系沈老师');
        }
    }

    // 安全网：25 秒内没有任何响应，强制显示结果
    setTimeout(function() {
        if (!xhrDone) {
            xhrDone = true;
            showFinalUI_v2(totalScore, maxScore, feedback, studentName, false,
                '⚠️ 等待超时，成绩已存本地，请联系沈老师');
        }
    }, 25000);
}

function showFinalUI_v2(totalScore, maxScore, feedback, name, success, errorMessage = "") {
    toggleDisplay('submittingBox', false);
    const box = document.getElementById('resultBox');

    let statusHTML = success ?
        `<p style="color:green; font-weight:bold;">✅ 成绩已成功上传！</p>` :
        `<p style="color:red; font-weight:bold;">${errorMessage}</p>`;

    let handover = currentMode === 'written' ?
        `<div style="margin:15px 0; background:#fff3e0; padding:15px; border-radius:12px; border:2px dashed #ff9800;">
            <p style="color:#e65100; font-weight:bold;">🎉 笔试完成！请找沈老师进行口语面试。</p>
        </div>` : '';

    box.innerHTML = `
        <h1>🎉 挑战结束！</h1>
        <div style="font-size:18px; color:#2196F3; font-weight:bold; margin:5px 0;">${name} 同学</div>
        <div style="font-size:14px; color:#666;">你的总得分</div>
        <div style="font-size:60px; color:#f44336; font-weight:bold; margin:10px 0;">
            ${totalScore}<span style="font-size:20px; color:#999;"> / ${maxScore} 分</span>
        </div>
        <div style="font-size:16px; margin:10px;">${feedback}</div>
        ${statusHTML}
        ${handover}
        <button class="btn-primary" onclick="location.reload()" style="width:100%; font-size:18px;">返回菜单 🏠</button>
    `;
    toggleDisplay('resultBox', true);
}



function choose(qid, v) { answers['Q' + qid] = v; renderQuestion(); }
function rate(qid, s) { answers['Q' + qid] = s; renderQuestion(); }
function prevQ() { if (currentQIndex > 0) { currentQIndex--; renderQuestion(); } }
function nextQ() {
    const len = relevantQs_length();
    if (currentQIndex < len - 1) {
        currentQIndex++;
        renderQuestion();
    }
}


function relevantQs_length() {
    return getRelevantQs().length;
}

function updateFill(qid) {
    answers['Q' + qid] = event.target.value;
    const relevantQs = getRelevantQs();
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
