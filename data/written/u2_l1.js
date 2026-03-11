/**
 * ✍️ Unit 2 Lesson 1: What size do you wear?
 * 闽教版三年级下册 2025春季版
 * Key words: T-shirt, do, wear
 * Key patterns: It's too big. What size do you wear? Size S/M/L.
 */
window.LOAD_QUIZ({
    title: "Unit 2 Lesson 1: What size do you wear?",
    timeLimit: 540,

    questions: [
        // Part A: Listening
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出正确的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Put on your team T-shirts, please.',
            options: ['A. 请穿上你们的队服T恤。', 'B. 请脱下你的外套。', 'C. 这是你的裙子。', 'D. 你穿多大号？'],
            correct: 'A. 请穿上你们的队服T恤。'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的回答。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'What size do you wear? Size L.',
            options: ['A. 穿S号', 'B. 穿M号', 'C. 穿L号', 'D. 穿XL号'],
            correct: 'C. 穿L号'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音，选出正确的描述。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'It\'s too small.',
            options: ['A. 太大了。', 'B. 太小了。', 'C. 刚好合适。', 'D. 太漂亮了。'],
            correct: 'B. 太小了。'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音选词填空：It\'s too ______.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'It\'s too big.',
            options: ['A. small', 'B. big', 'C. long', 'D. cute'],
            correct: 'B. big'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听录音，判断对不对。录音说 "Size S." 但图片显示 L号。<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'Size S.',
            imageUri: 'tshirt.png',
            options: ['A. ✓ 对的', 'B. ✗ 错的'],
            correct: 'B. ✗ 错的'
        },

        // Part B: Reading
        {
            qNum: 6, part: 'B', type: 'select',
            text: '"What size do you wear?" 是什么意思？',
            options: ['A. 你穿什么颜色？', 'B. 你穿多大号？', 'C. 你喜欢什么衣服？', 'D. 这是谁的衣服？'],
            correct: 'B. 你穿多大号？'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"T-shirt" 的中文是什么？',
            options: ['A. 外套', 'B. 衬衫', 'C. T恤', 'D. 裙子'],
            correct: 'C. T恤'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '"It\'s too big." 的翻译是：',
            options: ['A. 它太小了。', 'B. 它太大了。', 'C. 它刚好。', 'D. 它太长了。'],
            correct: 'B. 它太大了。'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. Size S', 'B. Size M', 'C. Size L', 'D. bear'],
            correct: 'D. bear'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"wear" 的中文意思是：',
            options: ['A. 画', 'B. 穿', 'C. 跳', 'D. 看'],
            correct: 'B. 穿'
        },

        // Part C: Writing
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：w _ a r (穿)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'B. e'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['What', 'size', 'do', 'you', 'wear', '?'],
            correct: 'What size do you wear?'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：sh _ rt (T恤/衬衫)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'C. i'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['It\'s', 'too', 'big', '.'],
            correct: 'It\'s too big.'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出正确的拼写（T恤）。',
            options: ['A. T-shirt', 'B. T-shrit', 'C. T-shert', 'D. T-shurt'],
            correct: 'A. T-shirt'
        },

        // Part D: Speaking
        { qNum: 16, part: 'D', text: '读出单词：T-shirt, Wear, Size.', score: 5 },
        { qNum: 17, part: 'D', text: '读出句子：What size do you wear? Size M.', score: 5 },
        { qNum: 18, part: 'D', text: '读出句子：It\'s too big. / It\'s too small.', score: 5 },
        { qNum: 19, part: 'D', text: '回答问题：What size do you wear?', score: 5 },
        { qNum: 20, part: 'D', text: '读出句子：Put on your team T-shirts, please.', score: 5 }
    ]
});
