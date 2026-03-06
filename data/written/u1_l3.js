/**
 * ✍️ Unit 1 Lesson 3: Fun Animals (Review)
 * 闽教版三年级下册 2025春季版
 */
window.LOAD_QUIZ({
    title: "Unit 1 Lesson 3: Fun Animals",
    timeLimit: 600,

    questions: [
        // Part A: Listening
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出你听到的动物。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Look at the panda. It is so big.',
            options: ['A. rabbit', 'B. cat', 'C. panda', 'D. dog'],
            correct: 'C. panda',
            imageUri: 'img/panda.png'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的回答。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'I like cats. What about you?',
            options: ['A. I like dogs.', 'B. Thank you.', 'C. Hello.', 'D. Goodbye.'],
            correct: 'A. I like dogs.',
            imageUri: 'img/dog.png'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音，选出你听到的动物。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'The duck is yellow. I like ducks.',
            options: ['A. bird', 'B. rabbit', 'C. cat', 'D. duck'],
            correct: 'D. duck',
            imageUri: 'img/duck.png'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音选词填空：Look at the ______.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'Look at the bird. It can fly.',
            options: ['A. dog', 'B. cat', 'C. bird', 'D. fish'],
            correct: 'C. bird'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听对话，判断对错。录音说 "I like rabbits." 但图片是一只猫。<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'I like rabbits.',
            options: ['A. ✓ 对的', 'B. ✗ 错的'],
            correct: 'B. ✗ 错的',
            imageUri: 'img/cat.png'
        },

        // Part B: Reading
        {
            qNum: 6, part: 'B', type: 'select',
            text: '看图，选出对应的单词。',
            options: ['A. bird', 'B. rabbit', 'C. cat', 'D. dog'],
            correct: 'B. rabbit',
            imageUri: 'img/rabbit.png'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. blue', 'B. red', 'C. animal', 'D. green'],
            correct: 'C. animal'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '"panda" 的中文是什么？',
            options: ['A. 猫', 'B. 熊猫', 'C. 兔子', 'D. 狗'],
            correct: 'B. 熊猫'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '"What about you?" 的中文意思是：',
            options: ['A. 你好吗？', 'B. 你呢？', 'C. 再见！', 'D. 谢谢！'],
            correct: 'B. 你呢？'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"I like birds." 的翻译是：',
            options: ['A. 我喜欢鸟。', 'B. 我有一只鸟。', 'C. 这是一只鸟。', 'D. 鸟会飞。'],
            correct: 'A. 我喜欢鸟。'
        },

        // Part C: Writing
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：p _ n d a',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'A. a'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['I', 'like', 'pandas', '.'],
            correct: 'I like pandas.'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：d _ ck (鸭子)',
            options: ['A. a', 'B. e', 'C. i', 'D. u'],
            correct: 'D. u'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['Look', 'at', 'the', 'bird', '.'],
            correct: 'Look at the bird.'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出拼写正确的"兔子"。',
            options: ['A. rabit', 'B. rabbit', 'C. rabitt', 'D. rabbti'],
            correct: 'B. rabbit'
        },

        // Part D: Speaking
        { qNum: 16, part: 'D', text: '读出单词：Panda, Duck, Bird.', score: 5 },
        { qNum: 17, part: 'D', text: '看图说话：I like pandas.', imageUri: 'img/panda.png', score: 5 },
        { qNum: 18, part: 'D', text: '回答：What animal do you like?', score: 5 },
        { qNum: 19, part: 'D', text: '读出句子：Look at the rabbit. It is cute.', imageUri: 'img/rabbit.png', score: 5 },
        { qNum: 20, part: 'D', text: '说出3个你认识的动物英文名。', score: 5 }
    ]
});
