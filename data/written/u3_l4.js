/**
 * ✍️ Unit 3 Lesson 4: Unit 3 Review
 * 闽教版三年级下册 2025春季版
 * 复习：时间 + 日常活动
 */
window.LOAD_QUIZ({
    title: "Unit 3 Lesson 4: Unit Review",
    timeLimit: 600,

    questions: [
        // Part A: Listening
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出对应的活动。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'It is twelve o\'clock. Time for lunch.',
            options: ['A. breakfast', 'B. lunch', 'C. dinner', 'D. bed'],
            correct: 'B. lunch'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的时间。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'It is eight o\'clock. Time for school.',
            options: ['A. 7:00', 'B. 8:00', 'C. 9:00', 'D. 10:00'],
            correct: 'B. 8:00'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音选词填空：It is ten o\'clock. Time for ______.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'It is ten o\'clock. Time for bed.',
            options: ['A. breakfast', 'B. lunch', 'C. school', 'D. bed'],
            correct: 'D. bed'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音，选出正确的句子。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'What time is it? It is six o\'clock.',
            options: ['A. 几点了？六点了。', 'B. 几点了？七点了。', 'C. 你几岁了？六岁。', 'D. 他几点了？'],
            correct: 'A. 几点了？六点了。'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听对话，选出正确的回答。问："What time is it?"<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'What time is it? It is three o\'clock.',
            options: ['A. It is 2:00.', 'B. It is 3:00.', 'C. It is 4:00.', 'D. It is 5:00.'],
            correct: 'B. It is 3:00.'
        },

        // Part B: Reading
        {
            qNum: 6, part: 'B', type: 'select',
            text: '几点钟？It\'s seven o\'clock.',
            options: ['A. 6:00', 'B. 7:00', 'C. 8:00', 'D. 9:00'],
            correct: 'B. 7:00'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"school" 的中文是什么？',
            options: ['A. 家', 'B. 学校', 'C. 公园', 'D. 商店'],
            correct: 'B. 学校'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '哪个不属于一日三餐？',
            options: ['A. breakfast', 'B. lunch', 'C. dinner', 'D. clock'],
            correct: 'D. clock'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '"Time for school!" 的翻译是：',
            options: ['A. 该上学了！', 'B. 该吃饭了！', 'C. 该睡觉了！', 'D. 该起床了！'],
            correct: 'A. 该上学了！'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"What time is it?" 的意思是：',
            options: ['A. 你叫什么名字？', 'B. 几点了？', 'C. 你好吗？', 'D. 在哪里？'],
            correct: 'B. 几点了？'
        },

        // Part C: Writing
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：sch _ _ l (学校)',
            options: ['A. oo', 'B. ee', 'C. oa', 'D. ou'],
            correct: 'A. oo'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['What', 'time', 'is', 'it', '?'],
            correct: 'What time is it?'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：cl _ ck (钟)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'D. o'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['Time', 'for', 'school', '!'],
            correct: 'Time for school !'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出正确的拼写"午餐"。',
            options: ['A. lanch', 'B. lunch', 'C. luntch', 'D. lunck'],
            correct: 'B. lunch'
        },

        // Part D: Speaking
        { qNum: 16, part: 'D', text: '用英语说出1到12的数字。', score: 5 },
        { qNum: 17, part: 'D', text: '读出句子：What time is it? It is ten o\'clock.', score: 5 },
        { qNum: 18, part: 'D', text: '回答：What time do you get up?', score: 5 },
        { qNum: 19, part: 'D', text: '读出句子：Time for breakfast! Get up!', score: 5 },
        { qNum: 20, part: 'D', text: '用英文描述你的作息时间（至少2句话）。', score: 5 }
    ]
});
