/**
 * ✍️ Unit 2 Lesson 4: Unit 2 Review
 * 闽教版三年级下册 2025春季版
 * 复习：衣服 T-shirt, dress, cap, jacket, skirt, shorts + Whose ... is this?
 */
window.LOAD_QUIZ({
    title: "Unit 2 Lesson 4: Unit Review",
    timeLimit: 600,

    questions: [
        // Part A: Listening
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出你听到的衣服。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Put on your jacket.',
            options: ['A. jacket', 'B. T-shirt', 'C. dress', 'D. cap'],
            correct: 'A. jacket'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的翻译。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Whose T-shirt is this?',
            options: ['A. 这是谁的帽子？', 'B. 这是谁的T恤？', 'C. 这是我的T恤。', 'D. 你喜欢T恤吗？'],
            correct: 'B. 这是谁的T恤？'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音选词填空：This is my ______.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'This is my dress.',
            options: ['A. skirt', 'B. cap', 'C. dress', 'D. jacket'],
            correct: 'C. dress'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音，选出你听到的内容。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Take off your shorts.',
            options: ['A. Put on your shorts.', 'B. Take off your shorts.', 'C. This is my shorts.', 'D. Whose shorts?'],
            correct: 'B. Take off your shorts.'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听对话，判断对错。问：Whose cap is this? 答：It is my cap.<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'Whose cap is this? It is my cap.',
            options: ['A. ✓ 对的（帽子是他的）', 'B. ✗ 错的（帽子不是他的）'],
            correct: 'A. ✓ 对的（帽子是他的）'
        },

        // Part B: Reading
        {
            qNum: 6, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. cat', 'B. jacket', 'C. dress', 'D. skirt'],
            correct: 'A. cat'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"Whose cap is this?" 的翻译是：',
            options: ['A. 这是谁的帽子？', 'B. 这是一顶帽子。', 'C. 你的帽子在哪？', 'D. 帽子好看吗？'],
            correct: 'A. 这是谁的帽子？'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '"T-shirt" 的中文是什么？',
            options: ['A. 外套', 'B. T恤', 'C. 裙子', 'D. 短裤'],
            correct: 'B. T恤'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '回答 "Whose dress is this?" 应该说：',
            options: ['A. I like dress.', 'B. It is my dress.', 'C. This is dress.', 'D. Thank you.'],
            correct: 'B. It is my dress.'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"jacket" 的中文是什么？',
            options: ['A. 帽子', 'B. 短裤', 'C. 外套', 'D. 裙子'],
            correct: 'C. 外套'
        },

        // Part C: Writing
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：c _ p (帽子)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'A. a'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['Whose', 'cap', 'is', 'this', '?'],
            correct: 'Whose cap is this?'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：dr _ ss (连衣裙)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'B. e'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['It', 'is', 'my', 'jacket', '.'],
            correct: 'It is my jacket.'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出拼写正确的"短裤"。',
            options: ['A. short', 'B. shorts', 'C. shourts', 'D. shortt'],
            correct: 'B. shorts'
        },

        // Part D: Speaking
        { qNum: 16, part: 'D', text: '读出单词：T-shirt, Cap, Dress, Jacket, Skirt, Shorts.', score: 5 },
        { qNum: 17, part: 'D', text: '看图说话：This is my new T-shirt.', score: 5 },
        { qNum: 18, part: 'D', text: '回答：Whose jacket is this?', score: 5 },
        { qNum: 19, part: 'D', text: '读出句子：Put on your dress. It is beautiful.', score: 5 },
        { qNum: 20, part: 'D', text: '说出你今天穿了什么衣服（英文）。', score: 5 }
    ]
});
