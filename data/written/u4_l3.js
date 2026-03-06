/**
 * ✍️ Unit 4 Lesson 3: Delicious Food
 * 闽教版三年级下册 2025春季版
 * 话题：食物 milk, bread, egg, fish, rice, noodles, water, cake, fruit, vegetables
 */
window.LOAD_QUIZ({
    title: "Unit 4 Lesson 3: Delicious Food",
    timeLimit: 600,

    questions: [
        // Part A: Listening
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出你听到的食物。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'I like fish and rice.',
            options: ['A. fish', 'B. egg', 'C. bread', 'D. milk'],
            correct: 'A. fish'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的翻译。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Do you like noodles?',
            options: ['A. 你喜欢米饭吗？', 'B. 你喜欢面条吗？', 'C. 你喜欢面包吗？', 'D. 你喜欢鱼吗？'],
            correct: 'B. 你喜欢面条吗？'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音选词填空：I have some ______.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'I have some fruit.',
            options: ['A. vegetables', 'B. fruit', 'C. cake', 'D. rice'],
            correct: 'B. fruit'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音，选出正确的回答。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Do you like fish? Yes, I do.',
            options: ['A. 他不喜欢鱼。', 'B. 他喜欢鱼。', 'C. 他喜欢肉。', 'D. 他没有鱼。'],
            correct: 'B. 他喜欢鱼。'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听录音，判断对错。录音说 "I like vegetables." 图片是蛋糕。<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'I like vegetables.',
            options: ['A. ✓ 对的', 'B. ✗ 错的'],
            correct: 'B. ✗ 错的'
        },

        // Part B: Reading
        {
            qNum: 6, part: 'B', type: 'select',
            text: '"delicious" 是什么意思？',
            options: ['A. 快乐', 'B. 美味', 'C. 很多', 'D. 喜欢'],
            correct: 'B. 美味'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"noodles" 的中文是什么？',
            options: ['A. 米饭', 'B. 面包', 'C. 面条', 'D. 蛋糕'],
            correct: 'C. 面条'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. rice', 'B. fish', 'C. noodles', 'D. clock'],
            correct: 'D. clock'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '"I like rice and fish." 的翻译是：',
            options: ['A. 我喜欢米饭和鱼。', 'B. 我喜欢面包和蛋。', 'C. 我有米饭和鱼。', 'D. 这是米饭和鱼。'],
            correct: 'A. 我喜欢米饭和鱼。'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"vegetables" 的中文是什么？',
            options: ['A. 水果', 'B. 蔬菜', 'C. 食物', 'D. 甜点'],
            correct: 'B. 蔬菜'
        },

        // Part C: Writing
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：f _ sh (鱼)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'C. i'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['Do', 'you', 'like', 'fish', '?'],
            correct: 'Do you like fish?'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：r _ ce (米饭)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'C. i'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['I', 'like', 'noodles', '.'],
            correct: 'I like noodles.'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出拼写正确的"蔬菜"。',
            options: ['A. vegetabels', 'B. vegetables', 'C. vegatables', 'D. vegetablas'],
            correct: 'B. vegetables'
        },

        // Part D: Speaking
        { qNum: 16, part: 'D', text: '读出单词：Fish, Rice, Noodles, Vegetables.', score: 5 },
        { qNum: 17, part: 'D', text: '看图说话：I like fish and rice.', score: 5 },
        { qNum: 18, part: 'D', text: '回答：Do you like noodles?', score: 5 },
        { qNum: 19, part: 'D', text: '读出句子：The cake is delicious.', score: 5 },
        { qNum: 20, part: 'D', text: '说出你最喜欢的3种食物（英文）。', score: 5 }
    ]
});
