/**
 * ✍️ Unit 1 Lesson 3: I have an animal friend.
 * 闽教版三年级下册 2025春季版
 * Key words: jump, mouth, meat, tiger, no
 * Key patterns: I have an animal friend. Is it a rabbit? Yes, it is. No, it isn't.
 */
window.LOAD_QUIZ({
    title: "Unit 1 Lesson 3: I have an animal friend.",
    timeLimit: 540,

    questions: [
        // ===========================
        // Part A: Listening (听力 5题)
        // ===========================
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出正确的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose the meaning)</span>',
            audioText: 'I have an animal friend.',
            options: ['A. 我有一个动物朋友。', 'B. 这是一只熊猫。', 'C. 那些是马。', 'D. 它很可爱。'],
            correct: 'A. 我有一个动物朋友。'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的回答。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Is it a rabbit? Yes, it is.',
            options: ['A. 不，不是兔子。', 'B. 是的，是兔子。', 'C. 是的，是老虎。', 'D. 不，是熊。'],
            correct: 'B. 是的，是兔子。'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音，选出你听到的动物。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'I am black and yellow. I can run fast. My mouth is big. I like meat. What am I? I am a tiger.',
            options: ['A. rabbit', 'B. bear', 'C. tiger', 'D. panda'],
            correct: 'C. tiger'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音选词填空：Is it a cat? No, it ______.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'Is it a cat? No, it isn\'t. It\'s a tiger.',
            options: ['A. is', 'B. isn\'t', 'C. are', 'D. can'],
            correct: 'B. isn\'t'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听录音，判断对不对。录音说 "I can jump." 描述的是兔子。<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'I am white. I can jump. My mouth is small. I have two long ears. I like carrots.',
            options: ['A. ✓ 对的（是兔子）', 'B. ✗ 错的（不是兔子）'],
            correct: 'A. ✓ 对的（是兔子）'
        },

        // ===========================
        // Part B: Reading (阅读 5题)
        // ===========================
        {
            qNum: 6, part: 'B', type: 'select',
            text: '"tiger" 的中文是什么？',
            options: ['A. 兔子', 'B. 老虎', 'C. 熊', 'D. 马'],
            correct: 'B. 老虎'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"mouth" 的中文是什么？',
            options: ['A. 眼睛', 'B. 耳朵', 'C. 嘴巴', 'D. 腿'],
            correct: 'C. 嘴巴'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '问 "Is it a rabbit?" 如果不是，应该回答：',
            options: ['A. Yes, it is.', 'B. No, it isn\'t.', 'C. It is big.', 'D. Thank you.'],
            correct: 'B. No, it isn\'t.'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '"I can jump." 的中文意思是：',
            options: ['A. 我会跑。', 'B. 我会飞。', 'C. 我会跳。', 'D. 我会游泳。'],
            correct: 'C. 我会跳。'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"meat" 的中文是什么？',
            options: ['A. 草', 'B. 胡萝卜', 'C. 水果', 'D. 肉'],
            correct: 'D. 肉'
        },

        // ===========================
        // Part C: Writing (写作 5题)
        // ===========================
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：t _ g e r (老虎)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'C. i'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the sentence)</span>',
            words: ['Is', 'it', 'a', 'rabbit', '?'],
            correct: 'Is it a rabbit?'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：m _ u t h (嘴巴)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'D. o'
        },
        {
            qNum: 14, part: 'C', type: 'select',
            text: '选出正确的拼写（跳）。',
            options: ['A. jamp', 'B. jump', 'C. jupm', 'D. jmup'],
            correct: 'B. jump'
        },
        {
            qNum: 15, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the sentence)</span>',
            words: ['No', ',', 'it', 'isn\'t', '.'],
            correct: 'No , it isn\'t.'
        },

        // ===========================
        // Part D: Speaking (口语 5题)
        // ===========================
        { qNum: 16, part: 'D', text: '请读出单词：Tiger, Mouth, Jump, Meat.', score: 5 },
        { qNum: 17, part: 'D', text: '读出句子：I have an animal friend. Please guess!', score: 5 },
        { qNum: 18, part: 'D', text: '读出对话：Is it a rabbit? Yes, it is.', score: 5 },
        { qNum: 19, part: 'D', text: '描述一个动物朋友：I am white. I can jump. I have two long ears.', score: 5 },
        { qNum: 20, part: 'D', text: '回答问题：Is it a tiger? (Yes, it is. / No, it isn\'t.)', score: 5 }
    ]
});
