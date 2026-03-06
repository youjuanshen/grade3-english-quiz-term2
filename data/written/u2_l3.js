/**
 * ✍️ Unit 2 Lesson 3: Dress Up
 * 闽教版三年级下册 2025春季版
 * 话题：衣服 T-shirt, dress, cap, jacket, skirt, shorts
 */
window.LOAD_QUIZ({
    title: "Unit 2 Lesson 3: Dress Up",
    timeLimit: 600,

    questions: [
        // Part A: Listening
        {
            qNum: 1, part: 'A', type: 'select',
            text: '听录音，选出你听到的衣服。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Look at my new skirt.',
            options: ['A. dress', 'B. skirt', 'C. jacket', 'D. cap'],
            correct: 'B. skirt'
        },
        {
            qNum: 2, part: 'A', type: 'select',
            text: '听录音，选出正确的翻译。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'Put on your shorts.',
            options: ['A. 穿上你的裙子。', 'B. 穿上你的短裤。', 'C. 脱下你的帽子。', 'D. 穿上你的外套。'],
            correct: 'B. 穿上你的短裤。'
        },
        {
            qNum: 3, part: 'A', type: 'select',
            text: '听录音，选出正确的衣服。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'This is my new dress. It is beautiful.',
            options: ['A. jacket', 'B. cap', 'C. dress', 'D. shorts'],
            correct: 'C. dress'
        },
        {
            qNum: 4, part: 'A', type: 'select',
            text: '听录音选词填空：Take off your ______.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'Take off your cap.',
            options: ['A. cap', 'B. dress', 'C. skirt', 'D. jacket'],
            correct: 'A. cap'
        },
        {
            qNum: 5, part: 'A', type: 'select',
            text: '听对话，判断对错。录音说 "This is my jacket." 但图片是一条裙子。<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'This is my jacket.',
            options: ['A. ✓ 对的', 'B. ✗ 错的'],
            correct: 'B. ✗ 错的'
        },

        // Part B: Reading
        {
            qNum: 6, part: 'B', type: 'select',
            text: '"skirt" 的中文是什么？',
            options: ['A. 衬衫', 'B. 短裙', 'C. 外套', 'D. 鞋子'],
            correct: 'B. 短裙'
        },
        {
            qNum: 7, part: 'B', type: 'select',
            text: '"Put on your jacket." 的翻译是：',
            options: ['A. 脱下你的外套。', 'B. 穿上你的外套。', 'C. 这是你的外套。', 'D. 你的外套呢？'],
            correct: 'B. 穿上你的外套。'
        },
        {
            qNum: 8, part: 'B', type: 'select',
            text: '找出不同类的一项。',
            options: ['A. dress', 'B. skirt', 'C. jacket', 'D. panda'],
            correct: 'D. panda'
        },
        {
            qNum: 9, part: 'B', type: 'select',
            text: '"shorts" 的中文是什么？',
            options: ['A. 袜子', 'B. 裤子', 'C. 短裤', 'D. 裙子'],
            correct: 'C. 短裤'
        },
        {
            qNum: 10, part: 'B', type: 'select',
            text: '"Take off" 和 "Put on" 是什么关系？',
            options: ['A. 同义词', 'B. 反义词', 'C. 没有关系', 'D. 都表示穿上'],
            correct: 'B. 反义词'
        },

        // Part C: Writing
        {
            qNum: 11, part: 'C', type: 'select',
            text: '补全单词：sk _ rt',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'C. i'
        },
        {
            qNum: 12, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['This', 'is', 'my', 'skirt', '.'],
            correct: 'This is my skirt.'
        },
        {
            qNum: 13, part: 'C', type: 'select',
            text: '补全单词：j _ c k e t',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'A. a'
        },
        {
            qNum: 14, part: 'C', type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>',
            words: ['Put', 'on', 'your', 'cap', '.'],
            correct: 'Put on your cap.'
        },
        {
            qNum: 15, part: 'C', type: 'select',
            text: '选出拼写正确的"连衣裙"。',
            options: ['A. dres', 'B. drass', 'C. dress', 'D. drees'],
            correct: 'C. dress'
        },

        // Part D: Speaking
        { qNum: 16, part: 'D', text: '读出单词：Skirt, Dress, Shorts, Jacket.', score: 5 },
        { qNum: 17, part: 'D', text: '看图说话：This is my new dress.', score: 5 },
        { qNum: 18, part: 'D', text: '回答：What are you wearing?', score: 5 },
        { qNum: 19, part: 'D', text: '读出句子：Put on your jacket. It is cold.', score: 5 },
        { qNum: 20, part: 'D', text: '说出3件你知道的衣服英文名。', score: 5 }
    ]
});
