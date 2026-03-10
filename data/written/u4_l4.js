/**
 * ✍️ Unit 4 Lesson 4: What's for dinner?
 * 闽教版三年级下册 2025春季版
 * Key words: rice, soup, chicken, fish, vegetable, Chinese
 * Key patterns: What's for dinner? We have some rice, soup, chicken and fish.
 */
window.LOAD_QUIZ({
    title: "Unit 4 Lesson 4: What's for dinner?",
    timeLimit: 540,

    questions: [
        // Part A: Listening
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出正确的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'What\'s for dinner?',
            options: ['A. 晚餐吃什么？', 'B. 早餐吃什么？', 'C. 午餐吃什么？', 'D. 你饿了吗？'],
            correct: 'A. 晚餐吃什么？'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的回答。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'We have some rice, soup, chicken and fish.',
            options: ['A. 我们有面包和牛奶。', 'B. 我们有米饭、汤、鸡肉和鱼。', 'C. 我们有果汁。', 'D. 我们有面条和鸡蛋。'],
            correct: 'B. 我们有米饭、汤、鸡肉和鱼。'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音，选出你听到的食物。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'I like chicken and vegetables.',
            options: ['A. fish', 'B. chicken', 'C. soup', 'D. rice'],
            correct: 'B. chicken'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音选词填空：We have some ______ and fish.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'We have some rice and fish.',
            options: ['A. soup', 'B. rice', 'C. chicken', 'D. bread'],
            correct: 'B. rice'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听录音，判断对不对。录音说 "I like Chinese food." 他喜欢中国菜吗？<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'I like Chinese food.',
            options: ['A. ✓ 对的（喜欢中国菜）', 'B. ✗ 错的'],
            correct: 'A. ✓ 对的（喜欢中国菜）'
        },

        // Part B: Reading
        {
            qNum: 6, part: 'B', type: 'select',
            text: '"chicken" 的中文是什么？',
            options: ['A. 鸡蛋', 'B. 鸡肉', 'C. 鱼', 'D. 鸭肉'],
            correct: 'B. 鸡肉'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"soup" 的中文是什么？',
            options: ['A. 米饭', 'B. 面条', 'C. 汤', 'D. 沙拉'],
            correct: 'C. 汤'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '"vegetable" 的中文是什么？',
            options: ['A. 水果', 'B. 蔬菜', 'C. 肉', 'D. 饮品'],
            correct: 'B. 蔬菜'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. rice', 'B. soup', 'C. chicken', 'D. sweater'],
            correct: 'D. sweater'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"Chinese food" 的翻译是：',
            options: ['A. 西餐', 'B. 中国菜', 'C. 快餐', 'D. 甜品'],
            correct: 'B. 中国菜'
        },

        // Part C: Writing
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：r _ c e (米饭)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'C. i'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['What\'s', 'for', 'dinner', '?'],
            correct: 'What\'s for dinner?'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：s _ u p (汤)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'D. o'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['We', 'have', 'some', 'rice', 'and', 'fish', '.'],
            correct: 'We have some rice and fish.'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出正确的拼写（蔬菜）。',
            options: ['A. vegetable', 'B. vegetabel', 'C. vegtable', 'D. vegatable'],
            correct: 'A. vegetable'
        },

        // Part D: Speaking
        { qNum: 16, part: 'D', text: '读出单词：Rice, Soup, Chicken, Fish, Vegetable.', score: 5 },
        { qNum: 17, part: 'D', text: '读出句子：What\'s for dinner?', score: 5 },
        { qNum: 18, part: 'D', text: '回答：What\'s for dinner? (We have some rice, soup, chicken and fish.)', score: 5 },
        { qNum: 19, part: 'D', text: '读出句子：I like Chinese food.', score: 5 },
        { qNum: 20, part: 'D', text: '用英文描述你今天的晚餐有什么（至少说3种食物）。', score: 5 }
    ]
});
