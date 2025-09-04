const fateEvents003 = [
    {
        question: "法官午餐時間肚子餓，但還有案子要審，怎麼辦？",
        options: ["先吃飯", "繼續審案"],
        correct: 1,
        reward: 200,
        penalty: 100,
        correctMsg: "公務優先，展現責任感",
        wrongMsg: "肚子餓會影響判斷力"
    },
    // --- 以下為新增的20個問題 ---
    {
        question: "當事人堅持用一大袋一元硬幣支付律師費，你該？",
        options: ["請他換成鈔票再來", "微笑收下，請助理慢慢數"],
        correct: 1,
        reward: 250,
        penalty: 80,
        correctMsg: "敬業精神可佩，順便鍛鍊助理的心性！",
        wrongMsg: "客戶就是上帝，即使是愛用硬幣的上帝。"
    },
    {
        question: "律師在職進修課程，講師講得昏昏欲睡，你會？",
        options: ["在筆記本上畫畫", "用意志力對抗睡意，抄筆記"],
        correct: 1,
        reward: 150,
        penalty: 100,
        correctMsg: "求知若渴，即使講師的聲音有催眠效果！",
        wrongMsg: "小心！你的畫作可能會在律師界流傳開來。"
    },
    {
        question: "司法院網站的判決查詢系統又掛了，但你急著找資料，怎麼辦？",
        options: ["不斷按F5重新整理，直到天荒地老", "打電話問有訂閱法學資料庫的同學"],
        correct: 1,
        reward: 180,
        penalty: 70,
        correctMsg: "人脈就是你最強的資料庫！",
        wrongMsg: "你的F5鍵可能比案子先宣告不治。"
    },
    {
        question: "調解委員是你大學時期的死對頭，你該？",
        options: ["公事公辦，展現專業氣度", "趁機在調解時，偷酸他幾句"],
        correct: 0,
        reward: 200,
        penalty: 150,
        correctMsg: "一笑泯恩仇，專業的表現讓對方心服口服！",
        wrongMsg: "小心！這場調解可能會變成同學會的延伸戰場。"
    },
    {
        question: "你的當事人名字叫「史珍香」，開庭時法官念出來，你會？",
        options: ["保持嚴肅，面不改色", "忍不住嘴角上揚"],
        correct: 0,
        reward: 150,
        penalty: 180,
        correctMsg: "專業！任何情況都不能影響你的專注力！",
        wrongMsg: "法官看到你在笑，可能會對你印象扣分喔！"
    },
    {
        question: "陪偵時，員警泡的茶難喝到懷疑人生，你會？",
        options: ["禮貌性地喝一口，然後放著", "直接說「謝謝，我喝水就好」"],
        correct: 0,
        reward: 120,
        penalty: 80,
        correctMsg: "圓融的處事之道，有助於案件順利進行。",
        wrongMsg: "太過直接，可能會讓氣氛有點尷尬。"
    },
    {
        question: "看到對造律師在臉書上發文抱怨他的案子（就是你的案子），你該？",
        options: ["立刻截圖存證，以備不時之需", "在他的貼文底下留言「加油喔！」"],
        correct: 0,
        reward: 220,
        penalty: 160,
        correctMsg: "保全證據是法律人的基本功！",
        wrongMsg: "高風險操作！這可能會引發一場網路筆戰。"
    },
    {
        question: "法院餐廳今天的便當，竟然有加菜——一整隻雞腿！你會？",
        options: ["拍照上傳，跟同道炫耀", "低頭默默吃掉，以免被搶"],
        correct: 1,
        reward: 150,
        penalty: 50,
        correctMsg: "財不露白，腿不示人，深諳生存之道！",
        wrongMsg: "小心！這可能會引發其他律師的嫉妒。"
    },
    {
        question: "老闆要你把一份三百頁的卷宗縮成一頁摘要，你該？",
        options: ["燃燒生命，通宵看完並摘要", "偷偷使用AI摘要工具"],
        correct: 0,
        reward: 200,
        penalty: 120,
        correctMsg: "扎實的基本功，是成為王牌律師的基石！",
        wrongMsg: "AI很方便，但小心它漏掉魔鬼般的細節！"
    },
    {
        question: "當事人用「==」和「...」跟你溝通，你會？",
        options: ["直接打電話問清楚", "用同樣的方式回他「？？？」"],
        correct: 0,
        reward: 180,
        penalty: 100,
        correctMsg: "溝通就是要清晰，避免任何誤解！",
        wrongMsg: "你們的對話可能會變成一場摩斯電碼大戰。"
    },
    {
        question: "證據是一支錄音筆，但裡面是長達五小時的家庭卡拉OK，你會？",
        options: ["戴上耳機，逐字逐句聽完", "直接拉到最後，聽聽有沒有彩蛋"],
        correct: 0,
        reward: 250,
        penalty: 130,
        correctMsg: "細心！關鍵證據可能就藏在某句走音的歌詞裡！",
        wrongMsg: "你的耳朵值得更好的對待。"
    },
    {
        question: "你是法扶律師，開庭時當事人送你一杯超貴的星巴克，你該？",
        options: ["堅持自己付錢", "心懷感激地接受"],
        correct: 0,
        reward: 180,
        penalty: 150,
        correctMsg: "嚴守分際，保持專業距離，值得讚許！",
        wrongMsg: "雖然是小事，但還是要小心瓜田李下。"
    },
    {
        question: "你夢到自己還在考律師高考，而且申論題一字都寫不出來，醒來後？",
        options: ["衝去看牆上的律師證書壓壓驚", "繼續睡，說不定能夢到答案"],
        correct: 0,
        reward: 150,
        penalty: 90,
        correctMsg: "這是每個法律人共同的創傷後壓力症候群。",
        wrongMsg: "夢是相反的，別擔心！"
    },
    {
        question: "法官在庭上引用了周星馳電影的台詞，你該？",
        options: ["立刻接下一句台詞", "保持肅靜，假裝沒聽懂"],
        correct: 0,
        reward: 160,
        penalty: 110,
        correctMsg: "恭喜！你跟法官對上了電波！",
        wrongMsg: "太嚴肅了，有時候氣氛需要一點潤滑。"
    },
    {
        question: "你的秘密證人，是一隻會學人說話的鸚鵡，你會？",
        options: ["研究如何讓牠成為有證據能力的證人", "幫牠錄音錄影，當作傳聞證據"],
        correct: 1,
        reward: 200,
        penalty: 180,
        correctMsg: "務實的做法！在法庭上，穩定性壓倒一切。",
        wrongMsg: "想法很大膽，但牠可能會在庭上突然唱起歌來。"
    },
    {
        question: "在地檢署門口，遇到剛把你當事人起訴的檢察官，他跟你點頭，你會？",
        options: ["禮貌地點頭回意", "用眼神跟他進行一場無聲的交鋒"],
        correct: 0,
        reward: 150,
        penalty: 100,
        correctMsg: "庭上是敵人，庭下是朋友，風度翩翩。",
        wrongMsg: "別這樣，人家可能只是剛好看到你而已。"
    },
    {
        question: "寫書狀時，你發現可以用成語「罄竹難書」完美形容對方行為，你用嗎？",
        options: ["用！就是要讓法官感受到對方的可惡", "換個比較中性的詞彙"],
        correct: 1,
        reward: 180,
        penalty: 120,
        correctMsg: "理性和客觀的文字，比強烈的情緒更有說服力。",
        wrongMsg: "小心！過於情緒性的字眼可能會讓書狀看起來不專業。"
    },
    {
        question: "遠距開庭時，你發現法官的背景是夏威夷海灘，你會？",
        options: ["裝沒看到，專心開庭", "稱讚法官的背景很有品味"],
        correct: 1,
        reward: 100,
        penalty: 100,
        correctMsg: "適時的稱讚，有助於軟化法庭氣氛。",
        wrongMsg: "太嚴肅了，人生需要一些海灘和陽光。"
    },
    {
        question: "下班前五分鐘，老闆拿了一件「很急」的新案子給你，你會？",
        options: ["說「好的，老闆」，然後默默取消今晚的約會", "問老闆「明天再處理，可以嗎？」"],
        correct: 0,
        reward: 200,
        penalty: 150,
        correctMsg: "燃燒自己，照亮事務所！老闆會記住你的付出。",
        wrongMsg: "老闆說的「急」，通常是真的急。"
    },
    {
        question: "言詞辯論時，你突然打了一個超響的嗝，你會？",
        options: ["面不改色繼續講下去", "小聲說句「抱歉」，再繼續"],
        correct: 1,
        reward: 150,
        penalty: 120,
        correctMsg: "勇於承認生理反應，是一種誠實的表現！",
        wrongMsg: "假裝沒事，但所有人都聽到了……更尷尬。"
    }
];