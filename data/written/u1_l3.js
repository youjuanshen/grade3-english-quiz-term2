/**
 * ✍️ Unit 1 Lesson 3: Review & Fun Animals
 * 闽教版三年级下册 2025春季版
 */
window.LOAD_QUIZ({
    title: "Unit 1 Lesson 3: Fun Animals",
    timeLimit: 540,

    questions: [
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
            text: '听录音，选出正确的回答。<br><span style="font-size:14px;color:#666">(Listen and choose the answer)</span>',
            audioText: 'I like cats. What about you?',
            options: ['A. I like dogs.', 'B. Thank you.', 'C. Hello.', 'D. Goodbye.'],
            correct: 'A. I like dogs.',
            imageUri: 'img/dog.png'
        },
        {
            qNum: 3, part: 'B', type: 'select',
            text: '看图，选出对应的单词。',
            options: ['A. bird', 'B. rabbit', 'C. cat', 'D. dog'],
            correct: 'B. rabbit',
            imageUri: 'img/rabbit.png'
        },
        {
            qNum: 4, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. blue', 'B. red', 'C. animal', 'D. green'],
            correct: 'C. animal'
        },
        {
            qNum: 5, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the sentence)</span>',
            words: ['I', 'like', 'pandas', '.'],
            correct: 'I like pandas.'
        }
    ]
});
