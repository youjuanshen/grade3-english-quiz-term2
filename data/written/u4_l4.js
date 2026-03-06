/**
 * ✍️ Unit 4 Lesson 4: Unit 4 Review
 * 闽教版三年级下册 2025春季版
 * 复习：食物话题 + Do you like ...? Yes, I do. / No, I don't.
 */
window.LOAD_QUIZ({
    title: "Unit 4 Lesson 4: Unit Review",
    timeLimit: 600,

    questions: [
        // Part A: Listening
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出你听到的食物。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'I like fruit and vegetables.',
            options: ['A. fruit', 'B. candy', 'C. cake', 'D. bread'],
            correct: 'A. fruit'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的翻译。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Do you like rice? No, I don\'t. I like noodles.',
            options: ['A. 他喜欢米饭。', 'B. 他不喜欢米饭，他喜欢面条。', 'C. 他喜欢面条和米饭。', 'D. 他不喜欢面条。'],
            correct: 'B. 他不喜欢米饭，他喜欢面条。'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音选词填空：I have ______ for breakfast.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'I have eggs for breakfast.',
            options: ['A. fish', 'B. eggs', 'C. cake', 'D. noodles'],
            correct: 'B. eggs'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音，选出正确内容。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'I like water. I don\'t like milk.',
            options: ['A. 他喜欢牛奶。', 'B. 他喜欢水，不喜欢牛奶。', 'C. 他喜欢水和牛奶。', 'D. 他不喜欢水。'],
            correct: 'B. 他喜欢水，不喜欢牛奶。'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听录音，判断对错。录音说"I like cake." 图片是蛋糕。<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'I like cake.',
            options: ['A. ✓ 对的', 'B. ✗ 错的'],
            correct: 'A. ✓ 对的'
        },

        // Part B: Reading
        {
            qNum: 6, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. rice', 'B. fish', 'C. dress', 'D. noodles'],
            correct: 'C. dress'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"fruit" 的中文是什么？',
            options: ['A. 蔬菜', 'B. 水果', 'C. 食物', 'D. 甜品'],
            correct: 'B. 水果'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '"Do you like eggs?" 回答 "喜欢" 应该说：',
            options: ['A. Yes, I do.', 'B. No, I don\'t.', 'C. I like eggs.', 'D. Thank you.'],
            correct: 'A. Yes, I do.'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '"cake" 的中文是什么？',
            options: ['A. 饼干', 'B. 面包', 'C. 蛋糕', 'D. 糖果'],
            correct: 'C. 蛋糕'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"I don\'t like fish." 的翻译是：',
            options: ['A. 我喜欢鱼。', 'B. 我不喜欢鱼。', 'C. 我有鱼。', 'D. 鱼很好吃。'],
            correct: 'B. 我不喜欢鱼。'
        },

        // Part C: Writing
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：n _ _ d l e s (面条)',
            options: ['A. oo', 'B. ee', 'C. oa', 'D. ou'],
            correct: 'A. oo'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['Do', 'you', 'like', 'rice', '?'],
            correct: 'Do you like rice?'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：c _ ke (蛋糕)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'A. a'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['I', 'like', 'fruit', 'and', 'vegetables', '.'],
            correct: 'I like fruit and vegetables.'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出拼写正确的"面包"。',
            options: ['A. bread', 'B. breed', 'C. braed', 'D. breab'],
            correct: 'A. bread'
        },

        // Part D: Speaking
        { qNum: 16, part: 'D', text: '读出单词：Milk, Bread, Egg, Fish, Rice, Noodles, Cake, Fruit.', score: 5 },
        { qNum: 17, part: 'D', text: '看图说话：I like fruit and vegetables.', score: 5 },
        { qNum: 18, part: 'D', text: '回答：Do you like rice or noodles?', score: 5 },
        { qNum: 19, part: 'D', text: '读出句子：I don\'t like fish. I like eggs.', score: 5 },
        { qNum: 20, part: 'D', text: '用英文描述你的三餐吃什么（至少2句话）。', score: 5 }
    ]
});
