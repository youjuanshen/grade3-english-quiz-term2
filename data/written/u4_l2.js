/**
 * ✍️ Unit 4 Lesson 2: Do you want some apple juice?
 * 闽教版三年级下册 2025春季版
 * Key words: some, drink, juice, lunch
 * Key patterns: What do you want to eat? I want a hamburger and a salad.
 */
window.LOAD_QUIZ({
    title: "Unit 4 Lesson 2: Do you want some apple juice?",
    timeLimit: 540,

    questions: [
        // Part A: Listening
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出正确的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Do you want some apple juice?',
            options: ['A. 你想要一些苹果汁吗？', 'B. 你喜欢苹果吗？', 'C. 这是苹果汁。', 'D. 你午餐吃什么？'],
            correct: 'A. 你想要一些苹果汁吗？'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的回答。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'What do you want to eat? I want a hamburger and a salad.',
            options: ['A. 我想要面包。', 'B. 我想要汉堡和沙拉。', 'C. 我想喝牛奶。', 'D. 我想要米饭。'],
            correct: 'B. 我想要汉堡和沙拉。'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音，选出你听到的饮品。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'I want some juice, please.',
            options: ['A. milk', 'B. water', 'C. juice', 'D. tea'],
            correct: 'C. juice'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音选词填空：What do you want to ______?<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'What do you want to drink?',
            options: ['A. eat', 'B. drink', 'C. play', 'D. read'],
            correct: 'B. drink'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听录音，判断对不对。录音说 "I want some apple juice." 图片显示牛奶。<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'I want some apple juice.',
            options: ['A. ✓ 对的', 'B. ✗ 错的'],
            correct: 'B. ✗ 错的'
        },

        // Part B: Reading
        {
            qNum: 6, part: 'B', type: 'select',
            text: '"juice" 的中文是什么？',
            options: ['A. 牛奶', 'B. 果汁', 'C. 水', 'D. 茶'],
            correct: 'B. 果汁'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"lunch" 的中文是什么？',
            options: ['A. 早餐', 'B. 午餐', 'C. 晚餐', 'D. 点心'],
            correct: 'B. 午餐'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '"drink" 的中文意思是：',
            options: ['A. 吃', 'B. 喝', 'C. 玩', 'D. 画'],
            correct: 'B. 喝'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. juice', 'B. milk', 'C. water', 'D. bread'],
            correct: 'D. bread'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"some" 的中文意思是：',
            options: ['A. 很多', 'B. 一些', 'C. 没有', 'D. 全部'],
            correct: 'B. 一些'
        },

        // Part C: Writing
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：j _ i c e (果汁)',
            options: ['A. a', 'B. e', 'C. o', 'D. u'],
            correct: 'D. u'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['Do', 'you', 'want', 'some', 'juice', '?'],
            correct: 'Do you want some juice?'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：l _ n c h (午餐)',
            options: ['A. a', 'B. e', 'C. i', 'D. u'],
            correct: 'D. u'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['I', 'want', 'a', 'hamburger', '.'],
            correct: 'I want a hamburger.'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出正确的拼写（喝）。',
            options: ['A. drink', 'B. dring', 'C. drnik', 'D. drnk'],
            correct: 'A. drink'
        },

        // Part D: Speaking
        { qNum: 16, part: 'D', text: '读出单词：Juice, Drink, Lunch, Some.', score: 5 },
        { qNum: 17, part: 'D', text: '读出句子：Do you want some apple juice?', score: 5 },
        { qNum: 18, part: 'D', text: '回答：What do you want to eat? (I want ...)', score: 5 },
        { qNum: 19, part: 'D', text: '回答：What do you want to drink? (I want some ...)', score: 5 },
        { qNum: 20, part: 'D', text: '说出你午餐想吃什么和喝什么（英文）。', score: 5 }
    ]
});
