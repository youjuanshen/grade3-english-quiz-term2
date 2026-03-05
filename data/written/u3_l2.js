/**
 * ✍️ Unit 3 Lesson 2: It's time for class
 * 闽教版三年级下册 2025春季版
 */
window.LOAD_QUIZ({
    title: "Unit 3 Lesson 2: It's time for class",
    timeLimit: 600,

    questions: [
        // ===========================
        // Part A: Listening
        // ===========================
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出你听到的活动词组。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Time for class.',
            options: ['A. time for class', 'B. time for bed', 'C. time for lunch', 'D. time for school'],
            correct: 'A. time for class'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的时间。<br><span style="font-size:14px;color:#666">(Listen and choose the time)</span>',
            audioText: 'Stand up. It\'s eight o\'clock.',
            options: ['A. 7:00', 'B. 8:00', 'C. 9:00', 'D. 10:00'],
            correct: 'B. 8:00',
            imageUri: 'img/clock.png'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音选词填空：Let\'s go to ______.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'Let\'s go to sleep.',
            options: ['A. school', 'B. sleep', 'C. home', 'D. park'],
            correct: 'B. sleep'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听对话，判断对错。录音说 "It\'s time for class." 但图片在吃饭。<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'It\'s time for class.',
            options: ['A. ✓ 对的', 'B. ✗ 错的'],
            correct: 'B. ✗ 错的'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听录音，选出你听到的单词。<br><span style="font-size:14px;color:#666">(Listen and choose the word)</span>',
            audioText: 'Breakfast is ready.',
            options: ['A. lunch', 'B. dinner', 'C. breakfast', 'D. bread'],
            correct: 'C. breakfast'
        },

        // ===========================
        // Part B: Reading
        // ===========================
        {
            qNum: 6, part: 'B', type: 'select',
            text: '"Time for class." 的中文意思是：',
            options: ['A. 放学了。', 'B. 该上课了。', 'C. 班级的时间。', 'D. 下课了。'],
            correct: 'B. 该上课了。'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"breakfast" 的中文意思是：',
            options: ['A. 午饭', 'B. 晚饭', 'C. 早饭', 'D. 面包'],
            correct: 'C. 早饭'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '当我们想叫大家“起立”时，应该说：',
            options: ['A. Sit down.', 'B. Stand up.', 'C. Hello.', 'D. Goodbye.'],
            correct: 'B. Stand up.'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. breakfast', 'B. lunch', 'C. dinner', 'D. book'],
            correct: 'D. book'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"Let\'s go to sleep." 的意思是：',
            options: ['A. 让我们去学校吧。', 'B. 让我们去睡觉吧。', 'C. 让我们回家吧。', 'D. 让我们玩吧。'],
            correct: 'B. 让我们去睡觉吧。'
        },

        // ===========================
        // Part C: Writing
        // ===========================
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：sl _ _ p (睡觉)',
            options: ['A. e e', 'B. e a', 'C. i e', 'D. o o'],
            correct: 'A. e e'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['It\'s', 'time', 'for', 'class', '.'],
            correct: 'It\'s time for class.'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：cl _ ss (班级/课)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'A. a'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['Let\'s', 'go', 'to', 'school', '.'],
            correct: 'Let\'s go to school.'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出拼写正确的单词。',
            options: ['A. brekfast', 'B. breakfast', 'C. brakfast', 'D. breckfast'],
            correct: 'B. breakfast'
        },

        // ===========================
        // Part D: Speaking
        // ===========================
        {
            qNum: 16, part: 'D',
            text: '读出句子：It\'s eight o\'clock. Time for class.',
            imageUri: 'img/clock.png',
            score: 5
        },
        {
            qNum: 17, part: 'D',
            text: '读出句子：Stand up, please.',
            score: 5
        },
        {
            qNum: 18, part: 'D',
            text: '读出词组：Breakfast, Lunch, Dinner.',
            score: 5
        },
        {
            qNum: 19, part: 'D',
            text: '看图说话：It\'s time for bed. Let\'s go to sleep.',
            score: 5
        },
        {
            qNum: 20, part: 'D',
            text: '口语问答：沈老师问 "What time is it?"，你随意说一个整点。',
            score: 5
        }
    ]
});
