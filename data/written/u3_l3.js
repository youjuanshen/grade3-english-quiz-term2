/**
 * ✍️ Unit 3 Lesson 3: My Day
 * 闽教版三年级下册 2025春季版
 * 话题：时间 + 日常活动 Time for breakfast/lunch/dinner/bed/school
 */
window.LOAD_QUIZ({
    title: "Unit 3 Lesson 3: My Day",
    timeLimit: 600,

    questions: [
        // Part A: Listening
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出正确的时间。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'It is nine o\'clock. Time for bed.',
            options: ['A. 8:00', 'B. 9:00', 'C. 10:00', 'D. 7:00'],
            correct: 'B. 9:00'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的活动。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'It is seven o\'clock. Time for breakfast.',
            options: ['A. lunch', 'B. dinner', 'C. breakfast', 'D. school'],
            correct: 'C. breakfast'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音选词填空：Time for ______.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'It is twelve o\'clock. Time for lunch.',
            options: ['A. breakfast', 'B. lunch', 'C. dinner', 'D. school'],
            correct: 'B. lunch'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音，选出正确的翻译。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Get up! It is six o\'clock.',
            options: ['A. 起床！六点了。', 'B. 睡觉！六点了。', 'C. 吃饭！六点了。', 'D. 上学！六点了。'],
            correct: 'A. 起床！六点了。'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听录音，判断对错。录音说 "Time for dinner." 图片显示吃早餐。<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'Time for dinner.',
            options: ['A. ✓ 对的', 'B. ✗ 错的'],
            correct: 'B. ✗ 错的'
        },

        // Part B: Reading
        {
            qNum: 6, part: 'B', type: 'select',
            text: '"bed" 在 "Time for bed" 中是什么意思？',
            options: ['A. 床', 'B. 睡觉', 'C. 房间', 'D. 起床'],
            correct: 'B. 睡觉'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"breakfast" 的中文是什么？',
            options: ['A. 午餐', 'B. 晚餐', 'C. 早餐', 'D. 点心'],
            correct: 'C. 早餐'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. breakfast', 'B. lunch', 'C. dinner', 'D. jacket'],
            correct: 'D. jacket'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '"Get up!" 的翻译是：',
            options: ['A. 坐下！', 'B. 起床！', 'C. 站起来！', 'D. 快跑！'],
            correct: 'B. 起床！'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '中午12点应该是 "Time for ______."',
            options: ['A. breakfast', 'B. lunch', 'C. dinner', 'D. bed'],
            correct: 'B. lunch'
        },

        // Part C: Writing
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：l _ n c h (午餐)',
            options: ['A. a', 'B. e', 'C. i', 'D. u'],
            correct: 'D. u'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['It\'s', 'time', 'for', 'bed', '.'],
            correct: 'It\'s time for bed.'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：d _ n n e r (晚餐)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'C. i'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['Get', 'up', '!'],
            correct: 'Get up !'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出拼写正确的"早餐"。',
            options: ['A. brekfast', 'B. breakfast', 'C. breakfest', 'D. brekfist'],
            correct: 'B. breakfast'
        },

        // Part D: Speaking
        { qNum: 16, part: 'D', text: '读出单词：Breakfast, Lunch, Dinner.', score: 5 },
        { qNum: 17, part: 'D', text: '说出现在几点：It\'s ... o\'clock.', score: 5 },
        { qNum: 18, part: 'D', text: '读出句子：Get up! Time for school.', score: 5 },
        { qNum: 19, part: 'D', text: '回答：What time do you have lunch?', score: 5 },
        { qNum: 20, part: 'D', text: '描述你的一天作息（用英文说2-3句话）。', score: 5 }
    ]
});
