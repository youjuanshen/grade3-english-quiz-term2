/**
 * ✍️ Unit 3 Lesson 4: It's time to do my homework.
 * 闽教版三年级下册 2025春季版
 * Key words: play, picture
 * Key patterns: It's time to do my homework. It's time to draw a picture.
 */
window.LOAD_QUIZ({
    title: "Unit 3 Lesson 4: It's time to do my homework.",
    timeLimit: 540,

    questions: [
        // Part A: Listening
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出正确的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'It\'s time to do my homework.',
            options: ['A. 该做作业了。', 'B. 该画画了。', 'C. 该玩了。', 'D. 该睡觉了。'],
            correct: 'A. 该做作业了。'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的活动。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'It\'s 7:30 p.m. It\'s time to draw a picture.',
            options: ['A. 做作业', 'B. 画画', 'C. 玩耍', 'D. 睡觉'],
            correct: 'B. 画画'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音，选出正确的时间。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'It\'s 9:00 p.m. It\'s time to go to bed.',
            options: ['A. 7:00 p.m.', 'B. 8:00 p.m.', 'C. 9:00 p.m.', 'D. 10:00 p.m.'],
            correct: 'C. 9:00 p.m.'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音选词填空：It\'s time to ______.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'It\'s time to play.',
            options: ['A. play', 'B. read', 'C. cook', 'D. draw'],
            correct: 'A. play'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听录音，判断对不对。录音说 "Oh, no! My homework!" 说明他做完作业了吗？<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'Oh, no! My homework!',
            options: ['A. ✓ 对的（做完了）', 'B. ✗ 错的（没做完/忘了做）'],
            correct: 'B. ✗ 错的（没做完/忘了做）'
        },

        // Part B: Reading
        {
            qNum: 6, part: 'B', type: 'select',
            text: '"play" 的中文是什么？',
            options: ['A. 画', 'B. 读', 'C. 玩', 'D. 做'],
            correct: 'C. 玩'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"picture" 的中文是什么？',
            options: ['A. 图画', 'B. 照片', 'C. 书', 'D. 电视'],
            correct: 'A. 图画'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '"It\'s time to go to bed." 的翻译是：',
            options: ['A. 该上学了。', 'B. 该做作业了。', 'C. 该睡觉了。', 'D. 该吃饭了。'],
            correct: 'C. 该睡觉了。'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. homework', 'B. picture', 'C. play', 'D. sweater'],
            correct: 'D. sweater'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"homework" 的中文意思是：',
            options: ['A. 家', 'B. 工作', 'C. 作业', 'D. 功课表'],
            correct: 'C. 作业'
        },

        // Part C: Writing
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：pl _ y (玩)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'A. a'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['It\'s', 'time', 'to', 'do', 'my', 'homework', '.'],
            correct: 'It\'s time to do my homework.'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：p _ c t u r e (图画)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'C. i'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['It\'s', 'time', 'to', 'play', '.'],
            correct: 'It\'s time to play.'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出正确的拼写（作业）。',
            options: ['A. homework', 'B. homwork', 'C. homewerk', 'D. homewrok'],
            correct: 'A. homework'
        },

        // Part D: Speaking
        { qNum: 16, part: 'D', text: '读出单词：Play, Picture, Homework.', score: 5 },
        { qNum: 17, part: 'D', text: '读出句子：It\'s time to do my homework.', score: 5 },
        { qNum: 18, part: 'D', text: '读出句子：It\'s time to draw a picture.', score: 5 },
        { qNum: 19, part: 'D', text: '读出歌谣：Tick, tock, tick, tock. It\'s time to get up.', score: 5 },
        { qNum: 20, part: 'D', text: '用英文说出你放学后的活动安排（至少2句 It\'s time to...）。', score: 5 }
    ]
});
