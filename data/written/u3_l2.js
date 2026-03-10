/**
 * ✍️ Unit 3 Lesson 2: What's the time in New York?
 * 闽教版三年级下册 2025春季版
 * Key words: kid, read, watch, TV
 * Key patterns: What's the time in New York? It's 7:30 p.m.
 */
window.LOAD_QUIZ({
    title: "Unit 3 Lesson 2: What's the time in New York?",
    timeLimit: 540,

    questions: [
        // Part A: Listening
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出正确的时间。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'It\'s 8:30 a.m. in Fuzhou. What\'s the time in New York? It\'s 7:30 p.m.',
            options: ['A. 纽约 6:30 p.m.', 'B. 纽约 7:30 p.m.', 'C. 纽约 8:30 a.m.', 'D. 纽约 9:30 p.m.'],
            correct: 'B. 纽约 7:30 p.m.'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的活动。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'I\'m reading.',
            options: ['A. 在看电视', 'B. 在读书', 'C. 在玩玩具', 'D. 在睡觉'],
            correct: 'B. 在读书'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音，选出正确的描述。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Ben and Kate are playing with toys.',
            options: ['A. Ben和Kate在读书。', 'B. Ben和Kate在看电视。', 'C. Ben和Kate在玩玩具。', 'D. Ben和Kate在睡觉。'],
            correct: 'C. Ben和Kate在玩玩具。'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音选词填空：I\'m watching ______.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'I\'m watching TV.',
            options: ['A. TV', 'B. books', 'C. toys', 'D. clocks'],
            correct: 'A. TV'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听录音，判断对不对。问 "Is Grandma watching TV, too?" 回答 "No, she isn\'t. She is reading."<br><span style="font-size:14px;color:#666">(奶奶在看电视吗？)</span>',
            audioText: 'Is Grandma watching TV, too? No, she isn\'t. She is reading.',
            options: ['A. ✓ 对的（奶奶在看电视）', 'B. ✗ 错的（奶奶在读书）'],
            correct: 'B. ✗ 错的（奶奶在读书）'
        },

        // Part B: Reading
        {
            qNum: 6, part: 'B', type: 'select',
            text: '"read" 的中文是什么？',
            options: ['A. 写', 'B. 读', 'C. 画', 'D. 看'],
            correct: 'B. 读'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"watch TV" 的中文是什么？',
            options: ['A. 看书', 'B. 看电视', 'C. 看钟', 'D. 看电影'],
            correct: 'B. 看电视'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '"kid" 的中文意思是：',
            options: ['A. 大人', 'B. 老人', 'C. 小孩', 'D. 老师'],
            correct: 'C. 小孩'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. read', 'B. watch', 'C. play', 'D. clock'],
            correct: 'D. clock'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"What\'s the time in New York?" 的翻译是：',
            options: ['A. 北京几点了？', 'B. 纽约几点了？', 'C. 伦敦几点了？', 'D. 东京几点了？'],
            correct: 'B. 纽约几点了？'
        },

        // Part C: Writing
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：r _ a d (读)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'B. e'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['I\'m', 'watching', 'TV', '.'],
            correct: 'I\'m watching TV.'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：w _ t c h (看/手表)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'A. a'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['I\'m', 'reading', '.'],
            correct: 'I\'m reading.'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出正确的拼写（电视）。',
            options: ['A. TV', 'B. TW', 'C. VT', 'D. DV'],
            correct: 'A. TV'
        },

        // Part D: Speaking
        { qNum: 16, part: 'D', text: '读出单词：Read, Watch, TV, Kid.', score: 5 },
        { qNum: 17, part: 'D', text: '读出句子：What\'s the time in New York?', score: 5 },
        { qNum: 18, part: 'D', text: '回答：What are you doing? (I\'m reading. / I\'m watching TV.)', score: 5 },
        { qNum: 19, part: 'D', text: '读出句子：It\'s 7:30 p.m. I\'m reading.', score: 5 },
        { qNum: 20, part: 'D', text: '唱歌：Are you sleeping? Are you sleeping? Brother John?', score: 5 }
    ]
});
