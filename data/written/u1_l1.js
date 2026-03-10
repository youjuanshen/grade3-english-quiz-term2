/**
 * ✍️ Unit 1 Lesson 1: This is a bear.
 * 闽教版三年级下册 2025春季版
 * Key words: animal, bear, horse, bird, panda
 * Key patterns: This is a bear. It's big. That is a panda. It's cute.
 * 听力(5题) + 阅读(5题) + 写作(5题) = 15题
 */
window.LOAD_QUIZ({
    title: "Unit 1 Lesson 1: This is a bear.",
    timeLimit: 540,

    questions: [
        // ===========================
        // Part A: Listening (听力 5题)
        // ===========================
        {
            qNum: 1,
            part: 'A',
            type: 'select',
            text: '听录音，选出你听到的动物。<br><span style="font-size:14px;color:#666">(Listen and choose the animal)</span>',
            audioText: 'This is a bear. It is big.',
            options: ['A. horse', 'B. bear', 'C. bird', 'D. panda'],
            correct: 'B. bear'
        },
        {
            qNum: 2,
            part: 'A',
            type: 'select',
            text: '听录音，选出正确的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose the meaning)</span>',
            audioText: 'That is a panda. It is cute.',
            options: ['A. 那是一只熊。', 'B. 这是一只鸟。', 'C. 那是一只熊猫。它很可爱。', 'D. 这是一匹马。'],
            correct: 'C. 那是一只熊猫。它很可爱。'
        },
        {
            qNum: 3,
            part: 'A',
            type: 'select',
            text: '听录音，选出你听到的动物。<br><span style="font-size:14px;color:#666">(Listen and choose the animal)</span>',
            audioText: 'That is a horse. It can run fast.',
            options: ['A. bear', 'B. bird', 'C. horse', 'D. panda'],
            correct: 'C. horse'
        },
        {
            qNum: 4,
            part: 'A',
            type: 'select',
            text: '听录音选词填空：They are ______. They are beautiful.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'They are birds. They are beautiful.',
            options: ['A. bears', 'B. horses', 'C. pandas', 'D. birds'],
            correct: 'D. birds'
        },
        {
            qNum: 5,
            part: 'A',
            type: 'select',
            text: '听录音，判断对不对。录音说："This is a bear." 但图片是一只熊猫。<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'This is a bear.',
            options: ['A. ✓ 对的', 'B. ✗ 错的'],
            correct: 'B. ✗ 错的'
        },

        // ===========================
        // Part B: Reading (阅读 5题)
        // ===========================
        {
            qNum: 6,
            part: 'B',
            type: 'select',
            text: '"This is a bear." 是什么意思？',
            options: ['A. 这是一只鸟。', 'B. 这是一只熊。', 'C. 那是一匹马。', 'D. 这是一只熊猫。'],
            correct: 'B. 这是一只熊。'
        },
        {
            qNum: 7,
            part: 'B',
            type: 'select',
            text: '"panda" 的中文是什么？',
            options: ['A. 马', 'B. 鸟', 'C. 熊猫', 'D. 熊'],
            correct: 'C. 熊猫'
        },
        {
            qNum: 8,
            part: 'B',
            type: 'select',
            text: '找出不同类的一项。',
            options: ['A. bear', 'B. horse', 'C. bird', 'D. big'],
            correct: 'D. big'
        },
        {
            qNum: 9,
            part: 'B',
            type: 'select',
            text: '"It\'s cute." 的中文意思是：',
            options: ['A. 它很大。', 'B. 它很可爱。', 'C. 它很漂亮。', 'D. 它能跑。'],
            correct: 'B. 它很可爱。'
        },
        {
            qNum: 10,
            part: 'B',
            type: 'select',
            text: '"horse" 的中文是什么？',
            options: ['A. 熊', 'B. 鸟', 'C. 马', 'D. 熊猫'],
            correct: 'C. 马'
        },

        // ===========================
        // Part C: Writing (写作 5题)
        // ===========================
        {
            qNum: 11,
            part: 'C',
            type: 'select',
            text: '补全单词：b _ a r (熊)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'B. e'
        },
        {
            qNum: 12,
            part: 'C',
            type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the sentence)</span>',
            words: ['This', 'is', 'a', 'bear', '.'],
            correct: 'This is a bear.'
        },
        {
            qNum: 13,
            part: 'C',
            type: 'select',
            text: '补全单词：h _ r s e (马)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'D. o'
        },
        {
            qNum: 14,
            part: 'C',
            type: 'select',
            text: '选出正确的拼写（熊猫）。',
            options: ['A. panda', 'B. penda', 'C. pnada', 'D. panba'],
            correct: 'A. panda'
        },
        {
            qNum: 15,
            part: 'C',
            type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the sentence)</span>',
            words: ['That', 'is', 'a', 'panda', '.'],
            correct: 'That is a panda.'
        },

        // ===========================
        // Part D: Speaking (口语 5题)
        // ===========================
        {
            qNum: 16,
            part: 'D',
            text: '请读出单词：Bear, Horse, Bird, Panda.',
            score: 5
        },
        {
            qNum: 17,
            part: 'D',
            text: '看图说话：This is a bear. It\'s big.',
            score: 5
        },
        {
            qNum: 18,
            part: 'D',
            text: '读出句子：That is a panda. It\'s cute.',
            score: 5
        },
        {
            qNum: 19,
            part: 'D',
            text: '看图说话：That is a horse. It can run fast.',
            score: 5
        },
        {
            qNum: 20,
            part: 'D',
            text: '读出句子：They are birds. They are beautiful.',
            score: 5
        }
    ]
});
