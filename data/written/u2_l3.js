/**
 * ✍️ Unit 2 Lesson 3: Where is my sweater?
 * 闽教版三年级下册 2025春季版
 * Key words: sweater, under, bed, door (room, chair)
 * Key patterns: Where is my sweater? Is it on your bed? No, it isn't.
 */
window.LOAD_QUIZ({
    title: "Unit 2 Lesson 3: Where is my sweater?",
    timeLimit: 540,

    questions: [
        // Part A: Listening
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出正确的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Where is my sweater, Mom?',
            options: ['A. 妈妈，我的毛衣在哪里？', 'B. 这是我的毛衣。', 'C. 穿上你的毛衣。', 'D. 这是谁的毛衣？'],
            correct: 'A. 妈妈，我的毛衣在哪里？'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的位置。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Is it on your bed? No, it isn\'t.',
            options: ['A. 在床上（是的）', 'B. 不在床上', 'C. 在椅子下面', 'D. 在书包里'],
            correct: 'B. 不在床上'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音，选出正确的答案。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Your sweater is in your schoolbag!',
            options: ['A. 毛衣在椅子下面。', 'B. 毛衣在床上。', 'C. 毛衣在书包里。', 'D. 毛衣在门后面。'],
            correct: 'C. 毛衣在书包里。'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音选词填空：Is it ______ your chair?<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'Is it under your chair?',
            options: ['A. on', 'B. in', 'C. under', 'D. at'],
            correct: 'C. under'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听录音，判断对不对。录音说 "Put away your clothes, please."<br><span style="font-size:14px;color:#666">(意思是请收好衣服吗？)</span>',
            audioText: 'Dear, put away your clothes, please.',
            options: ['A. ✓ 对的（请收好你的衣服）', 'B. ✗ 错的'],
            correct: 'A. ✓ 对的（请收好你的衣服）'
        },

        // Part B: Reading
        {
            qNum: 6, part: 'B', type: 'select',
            text: '"sweater" 的中文是什么？',
            options: ['A. 衬衫', 'B. 毛衣', 'C. 外套', 'D. T恤'],
            correct: 'B. 毛衣'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"under" 的中文是什么？',
            options: ['A. 在……上面', 'B. 在……里面', 'C. 在……下面', 'D. 在……旁边'],
            correct: 'C. 在……下面'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '"Where is my shirt?" 应该怎么回答？',
            options: ['A. Yes, it is.', 'B. It\'s on your bed.', 'C. I like shirts.', 'D. Size M.'],
            correct: 'B. It\'s on your bed.'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. on', 'B. in', 'C. under', 'D. sweater'],
            correct: 'D. sweater'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"bed" 的中文是什么？',
            options: ['A. 椅子', 'B. 桌子', 'C. 床', 'D. 门'],
            correct: 'C. 床'
        },

        // Part C: Writing
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：sw _ a t e r (毛衣)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'B. e'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['Where', 'is', 'my', 'sweater', '?'],
            correct: 'Where is my sweater?'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：_ n d e r (在……下面)',
            options: ['A. a', 'B. e', 'C. i', 'D. u'],
            correct: 'D. u'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['It\'s', 'in', 'your', 'schoolbag', '.'],
            correct: 'It\'s in your schoolbag.'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出正确的拼写（床）。',
            options: ['A. bed', 'B. bad', 'C. bid', 'D. bead'],
            correct: 'A. bed'
        },

        // Part D: Speaking
        { qNum: 16, part: 'D', text: '读出单词：Sweater, Under, Bed, Chair.', score: 5 },
        { qNum: 17, part: 'D', text: '读出句子：Where is my sweater?', score: 5 },
        { qNum: 18, part: 'D', text: '回答：Where is my shirt? (It\'s on/in/under ...)', score: 5 },
        { qNum: 19, part: 'D', text: '读出句子：Is it under your chair? No, it isn\'t.', score: 5 },
        { qNum: 20, part: 'D', text: '读出歌谣：Where is my shirt? It\'s in your bag.', score: 5 }
    ]
});
