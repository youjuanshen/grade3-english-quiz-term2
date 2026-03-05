/**
 * ✍️ Unit 2 Lesson 1: This is my T-shirt (My Clothes)
 * 闽教版三年级下册 2025春季版
 */
window.LOAD_QUIZ({
    title: "Unit 2 Lesson 1: This is my T-shirt",
    timeLimit: 540,

    questions: [
        // ===========================
        // Part A: Listening (听力 5题)
        // ===========================
        {
            qNum: 1,
            part: 'A',
            type: 'select',
            text: '听录音，选出你听到的衣服。<br><span style="font-size:14px;color:#666">(Listen and choose)</span>',
            audioText: 'This is my T-shirt.',
            options: ['A. T-shirt', 'B. dress', 'C. cap', 'D. jacket'],
            correct: 'A. T-shirt',
            imageUri: 'img/tshirt.png'
        },
        {
            qNum: 2,
            part: 'A',
            type: 'select',
            text: '听录音，选出正确的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose the meaning)</span>',
            audioText: 'This is my cap.',
            options: ['A. 这是我的裙子。', 'B. 这是我的帽子。', 'C. 这是我的T恤。', 'D. 这是我的裤子。'],
            correct: 'B. 这是我的帽子。',
            imageUri: 'img/cap.png'
        },
        {
            qNum: 3,
            part: 'A',
            type: 'select',
            text: '听录音选词填空：This is my ______.<br><span style="font-size:14px;color:#666">(Listen and complete)</span>',
            audioText: 'This is my dress.',
            options: ['A. T-shirt', 'B. cap', 'C. dress', 'D. jacket'],
            correct: 'C. dress',
            imageUri: 'img/dress.png'
        },
        {
            qNum: 4,
            part: 'A',
            type: 'select',
            text: '听录音，选出你听到的单词。<br><span style="font-size:14px;color:#666">(Listen and choose the word)</span>',
            audioText: 'I have a new jacket. It is blue.',
            options: ['A. shirt', 'B. jacket', 'C. skirt', 'D. hat'],
            correct: 'B. jacket',
            imageUri: 'img/jacket.png'
        },
        {
            qNum: 5,
            part: 'A',
            type: 'select',
            text: '听录音，判断对错。录音说："This is my skirt." 但题目说的是 "This is my dress."<br><span style="font-size:14px;color:#666">(True or False?)</span>',
            audioText: 'This is my skirt.',
            options: ['A. ✓ 对的', 'B. ✗ 错的'],
            correct: 'B. ✗ 错的',
            imageUri: 'img/dress.png'
        },

        // ===========================
        // Part B: Reading (阅读 5题)
        // ===========================
        {
            qNum: 6,
            part: 'B',
            type: 'select',
            text: '"T-shirt" 的中文是什么？',
            options: ['A. 裤子', 'B. 裙子', 'C. T恤', 'D. 帽子'],
            correct: 'C. T恤',
            imageUri: 'img/tshirt.png'
        },
        {
            qNum: 7,
            part: 'B',
            type: 'select',
            text: '"dress" 的中文是什么？',
            options: ['A. 连衣裙', 'B. 裤子', 'C. 外套', 'D. 围巾'],
            correct: 'A. 连衣裙',
            imageUri: 'img/dress.png'
        },
        {
            qNum: 8,
            part: 'B',
            type: 'select',
            text: '找出不同类的一项。',
            options: ['A. T-shirt', 'B. dress', 'C. cap', 'D. cat'],
            correct: 'D. cat'
        },
        {
            qNum: 9,
            part: 'B',
            type: 'select',
            text: '"This is my cap." 是什么意思？',
            options: ['A. 这是我的帽子。', 'B. 这是我的裙子。', 'C. 这是你的帽子。', 'D. 我喜欢帽子。'],
            correct: 'A. 这是我的帽子。',
            imageUri: 'img/cap.png'
        },
        {
            qNum: 10,
            part: 'B',
            type: 'select',
            text: '"skirt" 的中文是什么？',
            options: ['A. 短裙', 'B. 衬衫', 'C. 围巾', 'D. 袜子'],
            correct: 'A. 短裙'
        },

        // ===========================
        // Part C: Writing (写作 5题)
        // ===========================
        {
            qNum: 11,
            part: 'C',
            type: 'select',
            text: '补全单词：d r _ s s (连衣裙)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'B. e'
        },
        {
            qNum: 12,
            part: 'C',
            type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the sentence)</span>',
            words: ['This', 'is', 'my', 'T-shirt', '.'],
            correct: 'This is my T-shirt.'
        },
        {
            qNum: 13,
            part: 'C',
            type: 'select',
            text: '补全单词：c _ p (帽子)',
            options: ['A. a', 'B. e', 'C. i', 'D. o'],
            correct: 'A. a'
        },
        {
            qNum: 14,
            part: 'C',
            type: 'select',
            text: '选出正确的拼写（夹克衫）。',
            options: ['A. jaket', 'B. jackt', 'C. jacket', 'D. jakect'],
            correct: 'C. jacket'
        },
        {
            qNum: 15,
            part: 'C',
            type: 'drag-sort',
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the sentence)</span>',
            words: ['This', 'is', 'my', 'dress', '.'],
            correct: 'This is my dress.'
        },

        // ===========================
        // Part D: Speaking (口语 5题)
        // ===========================
        {
            qNum: 16,
            part: 'D',
            text: '读出单词：T-shirt, Dress, Cap.',
            score: 5
        },
        {
            qNum: 17,
            part: 'D',
            text: '看图说话：This is my jacket.',
            imageUri: 'img/jacket.png',
            score: 5
        },
        {
            qNum: 18,
            part: 'D',
            text: '回答问题：Whose T-shirt is this? (It is my T-shirt)',
            imageUri: 'img/tshirt.png',
            score: 5
        },
        {
            qNum: 19,
            part: 'D',
            text: '看图读句：I like my new dress.',
            imageUri: 'img/dress.png',
            score: 5
        },
        {
            qNum: 20,
            part: 'D',
            text: '自我表达：介绍你今天穿的衣服颜色。',
            score: 5
        }
    ]
});
