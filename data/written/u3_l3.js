/**
 * ✍️ Unit 3 Lesson 3: It's five twenty.
 * 闽教版三年级下册 2025春季版
 * Key words: thirteen, fourteen, fifteen, twenty, dinner
 * Key patterns: What are you doing? I'm cooking.
 */
window.LOAD_QUIZ({
    title: "Unit 3 Lesson 3: It's five twenty.",
    timeLimit: 540,

    questions: [
        // Part A: Listening
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出正确的时间。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'It\'s five twenty.',
            options: ['A. 5:00', 'B. 5:20', 'C. 5:30', 'D. 6:00'],
            correct: 'B. 5:20'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的回答。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'What are you doing? I\'m cooking.',
            options: ['A. 我在读书。', 'B. 我在看电视。', 'C. 我在做饭。', 'D. 我在画画。'],
            correct: 'C. 我在做饭。'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音，选出正确的活动。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'I\'m doing my homework. Yang Fan is reading.',
            options: ['A. 杨帆在做作业。', 'B. 杨帆在读书。', 'C. 杨帆在画画。', 'D. 杨帆在做饭。'],
            correct: 'B. 杨帆在读书。'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音，选出正确的数字。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty!',
            options: ['A. 13到20', 'B. 1到10', 'C. 10到15', 'D. 20到30'],
            correct: 'A. 13到20'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听录音，判断对不对。问 "Are you having dinner?" 回答 "No. I\'m drawing."<br><span style="font-size:14px;color:#666">(他在吃晚饭吗？)</span>',
            audioText: 'Are you having dinner, Yang Fan? No. I\'m drawing.',
            options: ['A. ✓ 对的（在吃晚饭）', 'B. ✗ 错的（在画画）'],
            correct: 'B. ✗ 错的（在画画）'
        },

        // Part B: Reading
        {
            qNum: 6, part: 'B', type: 'select',
            text: '"fifteen" 是数字几？',
            options: ['A. 13', 'B. 14', 'C. 15', 'D. 16'],
            correct: 'C. 15'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"dinner" 的中文是什么？',
            options: ['A. 早餐', 'B. 午餐', 'C. 晚餐', 'D. 点心'],
            correct: 'C. 晚餐'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '"What are you doing?" 的翻译是：',
            options: ['A. 你叫什么名字？', 'B. 几点了？', 'C. 你在做什么？', 'D. 你在哪里？'],
            correct: 'C. 你在做什么？'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. thirteen', 'B. fourteen', 'C. twenty', 'D. dinner'],
            correct: 'D. dinner'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"twenty" 是数字几？',
            options: ['A. 12', 'B. 15', 'C. 18', 'D. 20'],
            correct: 'D. 20'
        },

        // Part C: Writing
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：d _ n n e r (晚餐)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'C. i'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['What', 'are', 'you', 'doing', '?'],
            correct: 'What are you doing?'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '"thirteen" 的正确拼写是哪个？',
            options: ['A. threeteen', 'B. thirteen', 'C. therteen', 'D. tirteen'],
            correct: 'B. thirteen'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['I\'m', 'cooking', '.'],
            correct: 'I\'m cooking.'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '"fourteen" 和 "fifteen" 分别是几？',
            options: ['A. 14 和 15', 'B. 13 和 14', 'C. 15 和 16', 'D. 16 和 17'],
            correct: 'A. 14 和 15'
        },

        // Part D: Speaking
        { qNum: 16, part: 'D', text: '读出数字：Thirteen, Fourteen, Fifteen, Twenty.', score: 5 },
        { qNum: 17, part: 'D', text: '读出句子：It\'s five twenty. What are you doing?', score: 5 },
        { qNum: 18, part: 'D', text: '回答：What are you doing? (I\'m reading / drawing / cooking.)', score: 5 },
        { qNum: 19, part: 'D', text: '读出歌谣：Thirteen and seven is twenty. Fourteen and six is twenty.', score: 5 },
        { qNum: 20, part: 'D', text: '用英文说出 13 到 20 的数字。', score: 5 }
    ]
});
