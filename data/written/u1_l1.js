/**
 * ✍️ Unit 1 Lesson 1: I like cats (Our Animal Friends)
 * 闽教版三年级下册 2025春季版
 * 听力(5题) + 阅读(5题) + 写作(5题) = 15题
 */
window.LOAD_QUIZ({
    title: "Unit 1 Lesson 1: I like cats",
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
            audioText: 'Cat. I like cats.',
            options: ['A. dog', 'B. cat', 'C. bird', 'D. fish'],
            correct: 'B. cat',
            imageUri: 'img/cat.png'
        },
        {
            qNum: 2,
            part: 'A',
            type: 'select',
            text: '听录音，选出正确的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose the meaning)</span>',
            audioText: 'I like cats.',
            options: ['A. 我喜欢狗。', 'B. 我喜欢猫。', 'C. 我有一只猫。', 'D. 这是一只猫。'],
            correct: 'B. 我喜欢猫。',
            imageUri: 'img/cat.png'
        },
        {
            qNum: 3,
            part: 'A',
            type: 'select',
            text: '听录音，选出你听到的单词。<br><span style="font-size:14px;color:#666">(Listen and choose the word you hear)</span>',
            audioText: 'Look! It is a rabbit. I like rabbits.',
            options: ['A. cat', 'B. dog', 'C. rabbit', 'D. duck'],
            correct: 'C. rabbit',
            imageUri: 'img/rabbit.png'
        },
        {
            qNum: 4,
            part: 'A',
            type: 'select',
            text: '听录音选词填空：I like ______.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'I like birds.',
            options: ['A. cats', 'B. dogs', 'C. birds', 'D. fish'],
            correct: 'C. birds',
            imageUri: 'img/bird.png'
        },
        {
            qNum: 5,
            part: 'A',
            type: 'select',
            text: '听录音，判断句子对不对。录音："I like dogs."<br>图片上是一只猫。<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'I like dogs.',
            options: ['A. ✓ 对的', 'B. ✗ 错的'],
            correct: 'B. ✗ 错的',
            imageUri: 'img/cat.png'
        },

        // ===========================
        // Part B: Reading (阅读 5题)
        // ===========================
        {
            qNum: 6,
            part: 'B',
            type: 'select',
            text: '"I like cats." 是什么意思？<br><span style="font-size:14px;color:#666">(What does it mean?)</span>',
            options: ['A. 我喜欢猫。', 'B. 我是猫。', 'C. 这是猫。', 'D. 我有猫。'],
            correct: 'A. 我喜欢猫。'
        },
        {
            qNum: 7,
            part: 'B',
            type: 'select',
            text: '找出不同类的一项。<br><span style="font-size:14px;color:#666">(Find the odd one out)</span>',
            options: ['A. cat', 'B. dog', 'C. bird', 'D. apple'],
            correct: 'D. apple'
        },
        {
            qNum: 8,
            part: 'B',
            type: 'select',
            text: '"rabbit" 的中文是什么？',
            options: ['A. 猫', 'B. 狗', 'C. 兔子', 'D. 鸟'],
            correct: 'C. 兔子'
        },
        {
            qNum: 9,
            part: 'B',
            type: 'select',
            text: '选出正确的句子来回答问题：<br>"What animal do you like?"',
            options: ['A. I am a cat.', 'B. I like dogs.', 'C. It is a dog.', 'D. Hello, dog.'],
            correct: 'B. I like dogs.'
        },
        {
            qNum: 10,
            part: 'B',
            type: 'select',
            text: '"duck" 的中文是什么？',
            options: ['A. 鸡', 'B. 鸭子', 'C. 鱼', 'D. 猪'],
            correct: 'B. 鸭子'
        },

        // ===========================
        // Part C: Writing (写作 5题)
        // ===========================
        {
            qNum: 11,
            part: 'C',
            type: 'select',
            text: '补全单词：c _ t (猫)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'A. a'
        },
        {
            qNum: 12,
            part: 'C',
            type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the sentence)</span>',
            words: ['I', 'like', 'cats', '.'],
            correct: 'I like cats.'
        },
        {
            qNum: 13,
            part: 'C',
            type: 'select',
            text: '补全单词：d _ g (狗)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'D. o'
        },
        {
            qNum: 14,
            part: 'C',
            type: 'select',
            text: '选出正确的拼写（兔子）。',
            options: ['A. rabit', 'B. rabbit', 'C. rabitt', 'D. rabbti'],
            correct: 'B. rabbit'
        },
        {
            qNum: 15,
            part: 'C',
            type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the sentence)</span>',
            words: ['I', 'like', 'birds', '.'],
            correct: 'I like birds.'
        }
    ]
});
