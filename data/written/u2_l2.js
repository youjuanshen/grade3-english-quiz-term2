/**
 * ✍️ Unit 2 Lesson 2: Whose dress is this?
 * 闽教版三年级下册 2025春季版
 */
window.LOAD_QUIZ({
    title: "Unit 2 Lesson 2: Whose dress is this?",
    timeLimit: 600,

    questions: [
        // ===========================
        // Part A: Listening
        // ===========================
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出正确的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Whose dress is this?',
            options: ['A. 这是谁的裙子？', 'B. 这是我的裙子。', 'C. 你喜欢裙子吗？', 'D. 裙子在哪里？'],
            correct: 'A. 这是谁的裙子？',
            imageUri: 'img/dress.png'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的回答。<br><span style="font-size:14px;color:#666">(Listen and choose the answer)</span>',
            audioText: 'Whose cap is this?',
            options: ['A. It is red.', 'B. It\'s mine.', 'C. I like caps.', 'D. Thank you.'],
            correct: 'B. It\'s mine.',
            imageUri: 'img/cap.png'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音选词填空：Whose ______ is this?<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'Whose T-shirt is this?',
            options: ['A. dress', 'B. cap', 'C. T-shirt', 'D. skirt'],
            correct: 'C. T-shirt',
            imageUri: 'img/tshirt.png'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音，选出你听到的单词。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'These are my shoes. They are new.',
            options: ['A. socks', 'B. shoes', 'C. pants', 'D. jacket'],
            correct: 'B. shoes'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听对话，选出正确答案。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Whose jacket is this? It\'s Sally\'s jacket.',
            options: ['A. 这是王涛的夹克。', 'B. 这是莎莉的夹克。', 'C. 这是老师的夹克。', 'D. 这是我的夹克。'],
            correct: 'B. 这是莎莉的夹克。',
            imageUri: 'img/jacket.png'
        },

        // ===========================
        // Part B: Reading
        // ===========================
        {
            qNum: 6, part: 'B', type: 'select',
            text: '"Whose" 的中文是什么？',
            options: ['A. 什么', 'B. 谁的', 'C. 哪里', 'D. 怎么'],
            correct: 'B. 谁的'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"It\'s mine." 是什么意思？',
            options: ['A. 它是你的。', 'B. 它是他的。', 'C. 它是我的。', 'D. 它是她的。'],
            correct: 'C. 它是我的。'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '"shoes" 的中文是什么？',
            options: ['A. 帽子', 'B. 袜子', 'C. 鞋子', 'D. 裤子'],
            correct: 'C. 鞋子'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. shoes', 'B. socks', 'C. cap', 'D. monkey'],
            correct: 'D. monkey'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"Whose dress is this?" 正确的回答是：',
            options: ['A. Yes, it is.', 'B. It\'s Sally\'s.', 'C. I like dresses.', 'D. It is red.'],
            correct: 'B. It\'s Sally\'s.'
        },

        // ===========================
        // Part C: Writing
        // ===========================
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：sh _ es',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'D. o'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['Whose', 'dress', 'is', 'this', '?'],
            correct: 'Whose dress is this?'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：s _ c k s',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'D. o'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['It\'s', 'mine', '.'],
            correct: 'It\'s mine.'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出正确的拼写。',
            options: ['A. T-shrit', 'B. T-shirt', 'C. Tshirt', 'D. T-shrt'],
            correct: 'B. T-shirt'
        },

        // ===========================
        // Part D: Speaking
        // ===========================
        {
            qNum: 16, part: 'D',
            text: '读出句子：Whose dress is this?',
            imageUri: 'img/dress.png',
            score: 5
        },
        {
            qNum: 17, part: 'D',
            text: '读出句子：It\'s mine.',
            score: 5
        },
        {
            qNum: 18, part: 'D',
            text: '读出单词：Shoes, Socks, Jacket.',
            imageUri: 'img/shoes.png',
            score: 5
        },
        {
            qNum: 19, part: 'D',
            text: '看图说话：This is my cap. It\'s new.',
            imageUri: 'img/cap.png',
            score: 5
        },
        {
            qNum: 20, part: 'D',
            text: '对话练习：沈老师问 "Whose jacket is this?" 你回答 "It\'s mine." 或 "It\'s (Name)\'s."',
            imageUri: 'img/jacket.png',
            score: 5
        }
    ]
});
