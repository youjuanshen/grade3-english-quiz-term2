/**
 * ✍️ Unit 3 Lesson 1: What time is it?
 * 闽教版三年级下册 2025春季版
 */
window.LOAD_QUIZ({
    title: "Unit 3 Lesson 1: What time is it?",
    timeLimit: 600,

    questions: [
        // ===========================
        // Part A: Listening (听力 5题)
        // ===========================
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出你听到的时间。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'It\'s seven o\'clock.',
            options: ['A. 6:00', 'B. 7:00', 'C. 8:00', 'D. 9:00'],
            correct: 'B. 7:00',
            imageUri: 'img/clock.png'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的翻译。<br><span style="font-size:14px;color:#666">(Listen and choose the meaning)</span>',
            audioText: 'What time is it?',
            options: ['A. 你好吗？', 'B. 几点了？', 'C. 很高兴见到你。', 'D. 你在做什么？'],
            correct: 'B. 几点了？'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音，选出正确的单词。<br><span style="font-size:14px;color:#666">(Listen and choose the word)</span>',
            audioText: 'Time for school.',
            options: ['A. bed', 'B. school', 'C. home', 'D. class'],
            correct: 'B. school'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音，选出你听到的数字。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'It\'s ten o\'clock.',
            options: ['A. 2:00', 'B. 10:00', 'C. 12:00', 'D. 1:00'],
            correct: 'B. 10:00'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听对话，判断对错。录音说 "It\'s nine o\'clock." 但图片显示 10:00。<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'It\'s nine o\'clock.',
            options: ['A. ✓ 对的', 'B. ✗ 错的'],
            correct: 'B. ✗ 错的'
        },

        // ===========================
        // Part B: Reading (阅读 5题)
        // ===========================
        {
            qNum: 6, part: 'B', type: 'select',
            text: '"o\'clock" 的含义是：',
            options: ['A. 时间', 'B. 点钟', 'C. 学校', 'D. 家'],
            correct: 'B. 点钟'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. seven', 'B. clock', 'C. ten', 'D. eight'],
            correct: 'B. clock'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '"Time for bed." 的意思是：',
            options: ['A. 睡觉时间到了。', 'B. 该去上学了。', 'C. 回家的时间。', 'D. 该吃晚饭了。'],
            correct: 'A. 睡觉时间到了。'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '问：What time is it? 答：______',
            options: ['A. I am fine.', 'B. It\'s six o\'clock.', 'C. Nice to meet you.', 'D. Thank you.'],
            correct: 'B. It\'s six o\'clock.'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '单词 "time" 的中文意思是：',
            options: ['A. 时间', 'B. 时钟', 'C. 计时', 'D. 现在'],
            correct: 'A. 时间'
        },

        // ===========================
        // Part C: Writing (写作 5题)
        // ===========================
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：t _ m e',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'C. i'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['What', 'time', 'is', 'it', '?'],
            correct: 'What time is it?'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：cl _ ck',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'D. o',
            imageUri: 'img/clock.png'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['It\'s', 'eight', 'o\'clock', '.'],
            correct: 'It\'s eight o\'clock.'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出正确的句子。',
            options: ['A. Time to school.', 'B. Time for school.', 'C. To school time.', 'D. For school time.'],
            correct: 'B. Time for school.'
        },

        // ===========================
        // Part D: Speaking (口语 5题)
        // ===========================
        {
            qNum: 16, part: 'D',
            text: '问答：沈老师问 "What time is it?"，请看图回答 "It\'s seven o\'clock."',
            imageUri: 'img/clock.png',
            score: 5
        },
        {
            qNum: 17, part: 'D',
            text: '读出句子：Time for school.',
            score: 5
        },
        {
            qNum: 18, part: 'D',
            text: '读出句子：It\'s nine o\'clock. Time for bed.',
            score: 5
        },
        {
            qNum: 19, part: 'D',
            text: '读出单词：Time, Clock, School.',
            score: 5
        },
        {
            qNum: 20, part: 'D',
            text: '自我表达：今天你几点起床的？(可以用中文或简单的英文数字回答)',
            score: 5
        }
    ]
});
