/**
 * ✍️ Unit 2 Lesson 2: Whose shirt is this?
 * 闽教版三年级下册 2025春季版
 * Key words: whose, shirt, her, birthday
 * Key patterns: Whose shirt is this? It's Yang Ming's shirt.
 */
window.LOAD_QUIZ({
    title: "Unit 2 Lesson 2: Whose shirt is this?",
    timeLimit: 540,

    questions: [
        // Part A: Listening
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出正确的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Whose shirt is this?',
            options: ['A. 这是谁的衬衫？', 'B. 你穿多大号？', 'C. 这是我的T恤。', 'D. 穿上你的外套。'],
            correct: 'A. 这是谁的衬衫？'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的回答。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Whose shirt is this? It\'s Yang Ming\'s shirt.',
            options: ['A. 是王涛的。', 'B. 是杨明的衬衫。', 'C. 是李丽的裙子。', 'D. 是老师的外套。'],
            correct: 'B. 是杨明的衬衫。'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音，选出你听到的衣服。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Is this your jacket? No, it isn\'t. It\'s Wang Tao\'s jacket.',
            options: ['A. shirt', 'B. T-shirt', 'C. jacket', 'D. skirt'],
            correct: 'C. jacket'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音选词填空：This is my ______.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'This is my shirt.',
            options: ['A. jacket', 'B. shirt', 'C. T-shirt', 'D. skirt'],
            correct: 'B. shirt'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听录音，判断对不对。录音说 "It\'s Yang Ming\'s shirt." 问这件衬衫是王涛的吗？<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'It\'s Yang Ming\'s shirt.',
            options: ['A. ✓ 对的（是王涛的）', 'B. ✗ 错的（不是王涛的，是杨明的）'],
            correct: 'B. ✗ 错的（不是王涛的，是杨明的）'
        },

        // Part B: Reading
        {
            qNum: 6, part: 'B', type: 'select',
            text: '"whose" 的中文是什么？',
            options: ['A. 什么', 'B. 哪里', 'C. 谁的', 'D. 多大'],
            correct: 'C. 谁的'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"shirt" 的中文是什么？',
            options: ['A. T恤', 'B. 衬衫', 'C. 外套', 'D. 裙子'],
            correct: 'B. 衬衫'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '回答 "Whose jacket is this?" 应该说：',
            options: ['A. Yes, I do.', 'B. It\'s Wang Tao\'s jacket.', 'C. I like jackets.', 'D. Size M.'],
            correct: 'B. It\'s Wang Tao\'s jacket.'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. shirt', 'B. jacket', 'C. T-shirt', 'D. tiger'],
            correct: 'D. tiger'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"You\'re welcome." 的翻译是：',
            options: ['A. 谢谢你。', 'B. 不客气。', 'C. 你好。', 'D. 再见。'],
            correct: 'B. 不客气。'
        },

        // Part C: Writing
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：sh _ r t (衬衫)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'C. i'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['Whose', 'shirt', 'is', 'this', '?'],
            correct: 'Whose shirt is this?'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：j _ c k e t (外套)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'A. a'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['It\'s', 'Yang', 'Ming\'s', 'shirt', '.'],
            correct: 'It\'s Yang Ming\'s shirt.'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出正确的拼写（谁的）。',
            options: ['A. whose', 'B. whos', 'C. whoes', 'D. whse'],
            correct: 'A. whose'
        },

        // Part D: Speaking
        { qNum: 16, part: 'D', text: '读出单词：Whose, Shirt, Jacket.', score: 5 },
        { qNum: 17, part: 'D', text: '读出句子：Whose shirt is this?', score: 5 },
        { qNum: 18, part: 'D', text: '回答：Whose jacket is this? (It\'s ... \'s jacket.)', score: 5 },
        { qNum: 19, part: 'D', text: '读出对话：Is this your jacket? No, it isn\'t.', score: 5 },
        { qNum: 20, part: 'D', text: '读出句子：Thank you. You\'re welcome.', score: 5 }
    ]
});
