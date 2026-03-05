/**
 * ✍️ Unit 4 Lesson 1: I like milk
 * 闽教版三年级下册 2025春季版
 */
window.LOAD_QUIZ({
    title: "Unit 4 Lesson 1: I like milk",
    timeLimit: 600,

    questions: [
        // ===========================
        // Part A: Listening
        // ===========================
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出你听到的食物。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'I like milk.',
            options: ['A. milk', 'B. egg', 'C. bread', 'D. cake'],
            correct: 'A. milk',
            imageUri: 'img/milk.png'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的翻译。<br><span style="font-size:14px;color:#666">(Listen and choose the meaning)</span>',
            audioText: 'I like bread and eggs.',
            options: ['A. 我喜欢牛奶和蛋。', 'B. 我喜欢面包和蛋。', 'C. 我不喜欢面包。', 'D. 这是我的早饭。'],
            correct: 'B. 我喜欢面包和蛋。',
            imageUri: 'img/bread.png'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音选词填空：I have some ______.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'I have some water.',
            options: ['A. milk', 'B. water', 'C. juice', 'D. rice'],
            correct: 'B. water'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音，选出正确的图片信息。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Look at the cake. It is yummy.',
            options: ['A. cake', 'B. cookie', 'C. bread', 'D. apple'],
            correct: 'A. cake'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听对话，判断对错。录音说 "I don\'t like milk." 图片显示他在开心地喝牛奶。<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'I don\'t like milk.',
            options: ['A. ✓ 对的', 'B. ✗ 错的'],
            correct: 'B. ✗ 错的',
            imageUri: 'img/milk.png'
        },

        // ===========================
        // Part B: Reading
        // ===========================
        {
            qNum: 6, part: 'B', type: 'select',
            text: '"milk" 的中文意思是：',
            options: ['A. 豆浆', 'B. 牛奶', 'C. 果汁', 'D. 水'],
            correct: 'B. 牛奶'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"egg" 的中文意思是：',
            options: ['A. 鸡蛋', 'B. 面包', 'C. 蛋糕', 'D. 饼干'],
            correct: 'A. 鸡蛋'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. bread', 'B. milk', 'C. egg', 'D. clock'],
            correct: 'D. clock'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '"I like bread." 的翻译是：',
            options: ['A. 我喜欢面条。', 'B. 我喜欢面包。', 'C. 我有面包。', 'D. 这是面包。'],
            correct: 'B. 我喜欢面包。',
            imageUri: 'img/bread.png'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"yummy" 的含义是：',
            options: ['A. 不好吃的', 'B. 好吃的/美味的', 'C. 甜的', 'D. 咸的'],
            correct: 'B. 好吃的/美味的'
        },

        // ===========================
        // Part C: Writing
        // ===========================
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：m _ l k',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'C. i'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['I', 'like', 'milk', '.'],
            correct: 'I like milk.'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：e g _',
            options: ['A. a', 'B. g', 'C. e', 'D. o'],
            correct: 'B. g'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['I', 'like', 'bread', '.'],
            correct: 'I like bread.'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出拼写正确的“水”。',
            options: ['A. water', 'B. waater', 'C. wather', 'D. waterr'],
            correct: 'A. water'
        },

        // ===========================
        // Part D: Speaking
        // ===========================
        {
            qNum: 16, part: 'D',
            text: '读出单词：Milk, Bread, Egg.',
            imageUri: 'img/milk.png',
            score: 5
        },
        {
            qNum: 17, part: 'D',
            text: '看图说话：I like bread and eggs.',
            imageUri: 'img/bread.png',
            score: 5
        },
        {
            qNum: 18, part: 'D',
            text: '读出句子：The cake is yummy.',
            score: 5
        },
        {
            qNum: 19, part: 'D',
            text: '说出你喜欢的早餐食物（英文）。',
            score: 5
        },
        {
            qNum: 20, part: 'D',
            text: '看图认读：Water.',
            score: 5
        }
    ]
});
