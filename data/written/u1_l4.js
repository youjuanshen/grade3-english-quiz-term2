/**
 * ✍️ Unit 1 Lesson 4: Unit 1 Review
 * 闽教版三年级下册 2025春季版
 */
window.LOAD_QUIZ({
    title: "Unit 1 Lesson 4: Unit Review",
    timeLimit: 600,

    questions: [
        // Part A: Listening
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出你听到的动物。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'I have a bird. It is blue.',
            options: ['A. cat', 'B. bird', 'C. dog', 'D. rabbit'],
            correct: 'B. bird',
            imageUri: 'img/bird.png'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的翻译。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Do you like dogs?',
            options: ['A. 你喜欢猫吗？', 'B. 你喜欢狗吗？', 'C. 这是狗。', 'D. 我喜欢狗。'],
            correct: 'B. 你喜欢狗吗？'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音选词填空：I like ______.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'I like ducks.',
            options: ['A. cats', 'B. dogs', 'C. ducks', 'D. fish'],
            correct: 'C. ducks'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音，选出你听到的句子。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Look at the panda.',
            options: ['A. Look at the cat.', 'B. Look at the panda.', 'C. I like pandas.', 'D. It is big.'],
            correct: 'B. Look at the panda.'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听对话，判断对错。录音说 "Yes, I do." 问题是 "Do you like cats?"<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'Do you like cats? Yes, I do.',
            options: ['A. ✓ 对的（他喜欢猫）', 'B. ✗ 错的（他不喜欢猫）'],
            correct: 'A. ✓ 对的（他喜欢猫）'
        },

        // Part B: Reading
        {
            qNum: 6, part: 'B', type: 'select',
            text: '回答问题：Do you like rabbits?（两个都可以）',
            options: ['A. Yes, I do.', 'B. No, I don\'t.', 'C. I like cats.', 'D. A or B'],
            correct: 'D. A or B'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"Look at the panda." 的翻译是：',
            options: ['A. 看那只熊猫。', 'B. 我喜欢熊猫。', 'C. 熊猫很大。', 'D. 这是一只熊猫。'],
            correct: 'A. 看那只熊猫。'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. cat', 'B. dog', 'C. bird', 'D. apple'],
            correct: 'D. apple'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '"duck" 的中文是什么？',
            options: ['A. 鸡', 'B. 鸭子', 'C. 鹅', 'D. 鱼'],
            correct: 'B. 鸭子'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"Do you like birds?" 回答 "不喜欢" 应该说：',
            options: ['A. Yes, I do.', 'B. No, I don\'t.', 'C. I like birds.', 'D. Thank you.'],
            correct: 'B. No, I don\'t.'
        },

        // Part C: Writing
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：b _ r d',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'C. i'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['Do', 'you', 'like', 'dogs', '?'],
            correct: 'Do you like dogs?'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：r _ b b i t',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'A. a'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['Look', 'at', 'the', 'panda', '.'],
            correct: 'Look at the panda.'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出正确的拼写（鸭子）。',
            options: ['A. dack', 'B. duck', 'C. duk', 'D. duak'],
            correct: 'B. duck'
        },

        // Part D: Speaking
        { qNum: 16, part: 'D', text: '读出单词：Cat, Dog, Bird, Rabbit, Panda, Duck.', score: 5 },
        { qNum: 17, part: 'D', text: '看图说话：I like ducks.', imageUri: 'img/duck.png', score: 5 },
        { qNum: 18, part: 'D', text: '回答：Do you like cats?', score: 5 },
        { qNum: 19, part: 'D', text: '读出句子：Look at the bird. It can fly.', score: 5 },
        { qNum: 20, part: 'D', text: '说出你最喜欢的动物并造一个句子。', score: 5 }
    ]
});
