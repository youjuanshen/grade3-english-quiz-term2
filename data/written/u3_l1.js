/**
 * ✍️ Unit 3 Lesson 1: It's eleven o'clock in Beijing.
 * 闽教版三年级下册 2025春季版
 * Key words: time, eleven, twelve, clock, o'clock
 * Key patterns: It's eleven o'clock in Beijing.
 */
window.LOAD_QUIZ({
    title: "Unit 3 Lesson 1: It's eleven o'clock in Beijing.",
    timeLimit: 540,

    questions: [
        // Part A: Listening
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出你听到的时间。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'It\'s eleven o\'clock in Beijing.',
            options: ['A. 10:00', 'B. 11:00', 'C. 12:00', 'D. 9:00'],
            correct: 'B. 11:00'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的翻译。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'So many clocks! What\'s the time, Mom?',
            options: ['A. 好多钟！妈妈，几点了？', 'B. 这是一个钟。', 'C. 时间到了。', 'D. 你好妈妈。'],
            correct: 'A. 好多钟！妈妈，几点了？'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音，选出正确的回答。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Is it twelve o\'clock in London? No, it isn\'t. It\'s three o\'clock.',
            options: ['A. 伦敦12点。', 'B. 伦敦不是12点，是3点。', 'C. 北京11点。', 'D. 东京9点。'],
            correct: 'B. 伦敦不是12点，是3点。'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音选词填空：It\'s ______ o\'clock.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'It\'s twelve o\'clock.',
            options: ['A. ten', 'B. eleven', 'C. twelve', 'D. nine'],
            correct: 'C. twelve'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听录音，判断对不对。录音说 "It\'s eleven o\'clock." 但图片显示 12:00。<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'It\'s eleven o\'clock.',
            imageUri: 'clock.png',
            options: ['A. ✓ 对的', 'B. ✗ 错的'],
            correct: 'B. ✗ 错的'
        },

        // Part B: Reading
        {
            qNum: 6, part: 'B', type: 'select',
            text: '"clock" 的中文是什么？',
            options: ['A. 时间', 'B. 钟', 'C. 手表', 'D. 闹钟'],
            correct: 'B. 钟'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"eleven" 是数字几？',
            options: ['A. 10', 'B. 11', 'C. 12', 'D. 13'],
            correct: 'B. 11'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. eleven', 'B. twelve', 'C. clock', 'D. ten'],
            correct: 'C. clock'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '"o\'clock" 的含义是：',
            options: ['A. 分钟', 'B. 点钟', 'C. 小时', 'D. 半'],
            correct: 'B. 点钟'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"time" 的中文意思是：',
            options: ['A. 时间', 'B. 钟', 'C. 数字', 'D. 学校'],
            correct: 'A. 时间'
        },

        // Part C: Writing
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：cl _ ck (钟)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'D. o'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['It\'s', 'eleven', 'o\'clock', '.'],
            correct: 'It\'s eleven o\'clock.'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：t _ m e (时间)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'C. i'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['What\'s', 'the', 'time', '?'],
            correct: 'What\'s the time?'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出正确的拼写（十二）。',
            options: ['A. twelve', 'B. twleve', 'C. twelv', 'D. twealve'],
            correct: 'A. twelve'
        },

        // Part D: Speaking
        { qNum: 16, part: 'D', text: '读出单词：Time, Clock, Eleven, Twelve.', score: 5 },
        { qNum: 17, part: 'D', text: '读出句子：It\'s eleven o\'clock in Beijing.', score: 5 },
        { qNum: 18, part: 'D', text: '回答问题：What\'s the time? (It\'s ... o\'clock.)', score: 5 },
        { qNum: 19, part: 'D', text: '读出对话：What\'s the time, Mr. Wolf? It\'s twelve o\'clock.', score: 5 },
        { qNum: 20, part: 'D', text: '唱出歌曲的一句：Hello! Hello! What\'s the time?', score: 5 }
    ]
});
