/**
 * ✍️ Unit 4 Lesson 3: What's your favorite drink?
 * 闽教版三年级下册 2025春季版
 * Key words: favorite, fruit
 * Key patterns: What's your favorite drink? My favorite drink is milk.
 */
window.LOAD_QUIZ({
    title: "Unit 4 Lesson 3: What's your favorite drink?",
    timeLimit: 540,

    questions: [
        // Part A: Listening
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出正确的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'What\'s your favorite drink?',
            options: ['A. 你最喜欢的饮品是什么？', 'B. 你想喝什么？', 'C. 你喜欢牛奶吗？', 'D. 你饿了吗？'],
            correct: 'A. 你最喜欢的饮品是什么？'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的回答。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'My favorite drink is milk.',
            options: ['A. 我最喜欢果汁。', 'B. 我最喜欢牛奶。', 'C. 我最喜欢水。', 'D. 我最喜欢茶。'],
            correct: 'B. 我最喜欢牛奶。'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音，选出你听到的食物类别。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'I like fruit. Apples are my favorite fruit.',
            options: ['A. vegetables', 'B. fruit', 'C. drinks', 'D. meat'],
            correct: 'B. fruit'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音选词填空：My ______ fruit is apple.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'My favorite fruit is apple.',
            options: ['A. big', 'B. good', 'C. favorite', 'D. new'],
            correct: 'C. favorite'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听录音，判断对不对。录音说 "My favorite drink is juice." 图片显示牛奶。<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'My favorite drink is juice.',
            imageUri: 'milk.png',
            options: ['A. ✓ 对的', 'B. ✗ 错的'],
            correct: 'B. ✗ 错的'
        },

        // Part B: Reading
        {
            qNum: 6, part: 'B', type: 'select',
            text: '"favorite" 的中文是什么？',
            options: ['A. 喜欢的', 'B. 最喜欢的', 'C. 好吃的', 'D. 新的'],
            correct: 'B. 最喜欢的'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"fruit" 的中文是什么？',
            options: ['A. 蔬菜', 'B. 水果', 'C. 食物', 'D. 饮品'],
            correct: 'B. 水果'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '回答 "What\'s your favorite drink?" 应该说：',
            options: ['A. I like eggs.', 'B. My favorite drink is milk.', 'C. I\'m hungry.', 'D. Yes, I do.'],
            correct: 'B. My favorite drink is milk.'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. milk', 'B. juice', 'C. water', 'D. egg'],
            correct: 'D. egg'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"My favorite fruit is apple." 的翻译是：',
            options: ['A. 我最喜欢的水果是苹果。', 'B. 我喜欢吃苹果。', 'C. 我想要苹果。', 'D. 这是苹果。'],
            correct: 'A. 我最喜欢的水果是苹果。'
        },

        // Part C: Writing
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：fr _ i t (水果)',
            options: ['A. a', 'B. e', 'C. o', 'D. u'],
            correct: 'D. u'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['What\'s', 'your', 'favorite', 'drink', '?'],
            correct: 'What\'s your favorite drink?'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '"favorite" 的正确拼写是哪个？',
            options: ['A. favorit', 'B. favorite', 'C. favrite', 'D. favourte'],
            correct: 'B. favorite'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['My', 'favorite', 'drink', 'is', 'milk', '.'],
            correct: 'My favorite drink is milk.'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出正确的拼写（水果）。',
            options: ['A. fruit', 'B. froot', 'C. frut', 'D. friut'],
            correct: 'A. fruit'
        },

        // Part D: Speaking
        { qNum: 16, part: 'D', text: '读出单词：Favorite, Fruit, Drink.', score: 5 },
        { qNum: 17, part: 'D', text: '读出句子：What\'s your favorite drink?', score: 5 },
        { qNum: 18, part: 'D', text: '回答：What\'s your favorite drink? (My favorite drink is ...)', score: 5 },
        { qNum: 19, part: 'D', text: '回答：What\'s your favorite fruit? (My favorite fruit is ...)', score: 5 },
        { qNum: 20, part: 'D', text: '说出你最喜欢的食物和饮品（英文）。', score: 5 }
    ]
});
