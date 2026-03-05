/**
 * ✍️ Unit 1 Lesson 2: Do you like dogs?
 * 闽教版三年级下册 2025春季版
 */
window.LOAD_QUIZ({
    title: "Unit 1 Lesson 2: Do you like dogs?",
    timeLimit: 540,

    questions: [
        // ===========================
        // Part A: Listening (听力 5题)
        // ===========================
        {
            qNum: 1,
            part: 'A',
            type: 'select',
            text: '听录音，选出正确的回答。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Do you like dogs?',
            options: ['A. Yes, I do.', 'B. I am a dog.', 'C. It is a dog.', 'D. Hello, dog.'],
            correct: 'A. Yes, I do.',
            imageUri: 'img/dog.png'
        },
        {
            qNum: 2,
            part: 'A',
            type: 'select',
            text: '听录音，选出正确的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose the meaning)</span>',
            audioText: 'Do you like cats?',
            options: ['A. 你喜欢狗吗？', 'B. 你喜欢猫吗？', 'C. 我喜欢猫。', 'D. 这是一只猫。'],
            correct: 'B. 你喜欢猫吗？',
            imageUri: 'img/cat.png'
        },
        {
            qNum: 3,
            part: 'A',
            type: 'select',
            text: '听录音，选出你听到的动物。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'I like pandas. Pandas are cute.',
            options: ['A. cat', 'B. dog', 'C. panda', 'D. rabbit'],
            correct: 'C. panda',
            imageUri: 'img/panda.png'
        },
        {
            qNum: 4,
            part: 'A',
            type: 'select',
            text: '听录音选词填空：Do you like ______?<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'Do you like rabbits?',
            options: ['A. cats', 'B. rabbits', 'C. birds', 'D. dogs'],
            correct: 'B. rabbits',
            imageUri: 'img/rabbit.png'
        },
        {
            qNum: 5,
            part: 'A',
            type: 'select',
            text: '听对话，选出正确答案。<br>"Do you like birds?" "No, I don\'t."<br><span style="font-size:14px;color:#666">(Does he/she like birds?)</span>',
            audioText: 'Do you like birds? No, I don\'t.',
            options: ['A. 是和，喜欢。', 'B. 不，不喜欢。'],
            correct: 'B. 不，不喜欢。',
            imageUri: 'img/bird.png'
        },

        // ===========================
        // Part B: Reading (阅读 5题)
        // ===========================
        {
            qNum: 6,
            part: 'B',
            type: 'select',
            text: '"Do you like dogs?" 是什么意思？',
            options: ['A. 你喜欢猫吗？', 'B. 你有狗吗？', 'C. 你喜欢狗吗？', 'D. 这是狗吗？'],
            correct: 'C. 你喜欢狗吗？',
            imageUri: 'img/dog.png'
        },
        {
            qNum: 7,
            part: 'B',
            type: 'select',
            text: '回答 "Do you like cats?" 如果喜欢，应该说：',
            options: ['A. No, I don\'t.', 'B. Yes, I do.', 'C. I am a cat.', 'D. Thank you.'],
            correct: 'B. Yes, I do.'
        },
        {
            qNum: 8,
            part: 'B',
            type: 'select',
            text: '"panda" 的中文是什么？',
            options: ['A. 老虎', 'B. 猴子', 'C. 熊猫', 'D. 大象'],
            correct: 'C. 熊猫',
            imageUri: 'img/panda.png'
        },
        {
            qNum: 9,
            part: 'B',
            type: 'select',
            text: '找出不同类的一项。',
            options: ['A. panda', 'B. rabbit', 'C. bird', 'D. red'],
            correct: 'D. red'
        },
        {
            qNum: 10,
            part: 'B',
            type: 'select',
            text: '"No, I don\'t." 是什么意思？',
            options: ['A. 是的，我喜欢。', 'B. 不，我不喜欢。', 'C. 你好。', 'D. 谢谢。'],
            correct: 'B. 不，我不喜欢。'
        },

        // ===========================
        // Part C: Writing (写作 5题)
        // ===========================
        {
            qNum: 11,
            part: 'C',
            type: 'select',
            text: '补全单词：p _ n d a (熊猫)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'A. a'
        },
        {
            qNum: 12,
            part: 'C',
            type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the sentence)</span>',
            words: ['Do', 'you', 'like', 'dogs', '?'],
            correct: 'Do you like dogs?'
        },
        {
            qNum: 13,
            part: 'C',
            type: 'select',
            text: '补全单词：b _ r d (鸟)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'C. i'
        },
        {
            qNum: 14,
            part: 'C',
            type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the sentence)</span>',
            words: ['Yes', ',', 'I', 'do', '.'],
            correct: 'Yes , I do .'
        },
        {
            qNum: 15,
            part: 'C',
            type: 'select',
            text: '选出正确的拼写（鸭子）。',
            options: ['A. dack', 'B. duck', 'C. duk', 'D. dukc'],
            correct: 'B. duck',
            imageUri: 'img/duck.png'
        },

        // ===========================
        // Part D: Speaking (口语 5题)
        // ===========================
        {
            qNum: 16,
            part: 'D',
            text: '读出句子：Do you like dogs?',
            imageUri: 'img/dog.png',
            score: 5
        },
        {
            qNum: 17,
            part: 'D',
            text: '回答问题：Do you like pandas? (Yes, I do / No, I don\'t)',
            imageUri: 'img/panda.png',
            score: 5
        },
        {
            qNum: 18,
            part: 'D',
            text: '读出单词：Rabbit, Bird, Duck.',
            score: 5
        },
        {
            qNum: 19,
            part: 'D',
            text: '看图说话：I like penguins. (或 I like rabbits)',
            imageUri: 'img/rabbit.png',
            score: 5
        },
        {
            qNum: 20,
            part: 'D',
            text: '对话练习：沈老师问 "Do you like cats?" 你根据自己的真实想法回答。',
            imageUri: 'img/cat.png',
            score: 5
        }
    ]
});
