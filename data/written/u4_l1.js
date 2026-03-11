/**
 * ✍️ Unit 4 Lesson 1: What do you like for breakfast?
 * 闽教版三年级下册 2025春季版
 * Key words: breakfast, milk, bread, today, hungry, about
 * Key patterns: What do you like for breakfast? I like eggs and noodles.
 */
window.LOAD_QUIZ({
    title: "Unit 4 Lesson 1: What do you like for breakfast?",
    timeLimit: 540,

    questions: [
        // Part A: Listening
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出正确的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'What do you like for breakfast?',
            options: ['A. 你早餐喜欢吃什么？', 'B. 你午餐喜欢吃什么？', 'C. 你今天吃什么？', 'D. 你饿了吗？'],
            correct: 'A. 你早餐喜欢吃什么？'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的回答。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'I like eggs and noodles.',
            options: ['A. 我喜欢面包和牛奶。', 'B. 我喜欢鸡蛋和面条。', 'C. 我喜欢米饭和鱼。', 'D. 我喜欢水果。'],
            correct: 'B. 我喜欢鸡蛋和面条。'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音，选出你听到的食物。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'I like milk and bread for breakfast.',
            options: ['A. eggs', 'B. noodles', 'C. milk', 'D. rice'],
            correct: 'C. milk'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音选词填空：I\'m ______. Let\'s have breakfast.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'I\'m hungry. Let\'s have breakfast.',
            options: ['A. happy', 'B. hungry', 'C. sleepy', 'D. thirsty'],
            correct: 'B. hungry'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听录音，判断对不对。录音说 "I like bread for breakfast." 图片显示米饭。<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'I like bread for breakfast.',
            imageUri: 'rice.png',
            options: ['A. ✓ 对的', 'B. ✗ 错的'],
            correct: 'B. ✗ 错的'
        },

        // Part B: Reading
        {
            qNum: 6, part: 'B', type: 'select',
            text: '"breakfast" 的中文是什么？',
            options: ['A. 午餐', 'B. 晚餐', 'C. 早餐', 'D. 点心'],
            correct: 'C. 早餐'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"hungry" 的中文意思是：',
            options: ['A. 渴的', 'B. 饿的', 'C. 困的', 'D. 高兴的'],
            correct: 'B. 饿的'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. milk', 'B. bread', 'C. egg', 'D. clock'],
            correct: 'D. clock'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '"What about you?" 的翻译是：',
            options: ['A. 你呢？', 'B. 你好吗？', 'C. 谢谢你。', 'D. 再见。'],
            correct: 'A. 你呢？'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"bread" 的中文是什么？',
            options: ['A. 面条', 'B. 面包', 'C. 米饭', 'D. 蛋糕'],
            correct: 'B. 面包'
        },

        // Part C: Writing
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：m _ l k (牛奶)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'C. i'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['I', 'like', 'eggs', 'and', 'noodles', '.'],
            correct: 'I like eggs and noodles.'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：br _ a d (面包)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'B. e'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['I\'m', 'hungry', '.'],
            correct: 'I\'m hungry.'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出正确的拼写（早餐）。',
            options: ['A. brekfast', 'B. breakfast', 'C. breakfest', 'D. brekfist'],
            correct: 'B. breakfast'
        },

        // Part D: Speaking
        { qNum: 16, part: 'D', text: '读出单词：Breakfast, Milk, Bread, Hungry.', score: 5 },
        { qNum: 17, part: 'D', text: '读出句子：What do you like for breakfast?', score: 5 },
        { qNum: 18, part: 'D', text: '回答：What do you like for breakfast? (I like ... and ...)', score: 5 },
        { qNum: 19, part: 'D', text: '读出句子：I\'m hungry. Let\'s have breakfast.', score: 5 },
        { qNum: 20, part: 'D', text: '说出你早餐喜欢吃什么（英文）。', score: 5 }
    ]
});
