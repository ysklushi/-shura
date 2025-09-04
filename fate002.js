const fateEvents002 = [
    {
        question: "檢察官發現襪子穿反了，要重穿嗎？",
        options: ["重穿", "將錯就錯"],
        correct: 0,
        reward: 100,
        penalty: 100,
        correctMsg: "注重細節，是專業態度的體現",
        wrongMsg: "細節決定成敗，腳感會很奇怪"
    },
    {
        question: "律師在電梯遇到對造律師，要打招呼嗎？",
        options: ["禮貌打招呼", "假裝沒看到"],
        correct: 0,
        reward: 150,
        penalty: 150,
        correctMsg: "專業人士應保持風度",
        wrongMsg: "太尷尬了，職場人際關係很重要"
    },
    // --- 以下為新增的20個問題 ---
    {
        question: "開庭前10分鐘，事務所的印表機卡紙了，你會？",
        options: ["溫柔地跟它溝通", "暴力拍打，逼它就範"],
        correct: 0,
        reward: 150,
        penalty: 120,
        correctMsg: "冷靜是處理危機的第一步！",
        wrongMsg: "印表機可能壞得更徹底，而且手會痛。"
    },
    {
        question: "你的當事人深信看電視學來的法律知識，並指導你如何辦案，你該？",
        options: ["耐心解釋，導正觀念", "稱讚他有慧根，然後照自己步調走"],
        correct: 0,
        reward: 200,
        penalty: 100,
        correctMsg: "展現專業與耐心，贏得當事人信賴！",
        wrongMsg: "小心他下次開庭時突然站起來喊「反對！」"
    },
    {
        question: "資深合夥律師講了一個很冷的笑話，你會？",
        options: ["尷尬又不失禮貌地微笑", "真心誠意地捧腹大笑"],
        correct: 1,
        reward: 180,
        penalty: 80,
        correctMsg: "職場生存智慧點滿，年終獎金有望！",
        wrongMsg: "你的微笑可能會讓他講下一個更冷的。"
    },
    {
        question: "在莊嚴的法庭上，你的手機突然響起，而且是抖音神曲，怎麼辦？",
        options: ["以最快速度關掉，並向庭上致歉", "乾脆跟著跳一小段，化解尷尬"],
        correct: 0,
        reward: 120,
        penalty: 250,
        correctMsg: "知錯能改，善莫大焉。",
        wrongMsg: "你可能會因藐視法庭外加妨礙風化被請出去。"
    },
    {
        question: "證人講話滔滔不絕，離題到外太空，身為法官的你該？",
        options: ["讓他暢所欲言，或許有新發現", "適時打斷，請他回到問題核心"],
        correct: 1,
        reward: 200,
        penalty: 100,
        correctMsg: "成功掌控法庭節奏，有效率！",
        wrongMsg: "筆錄可能會變成一部科幻小說。"
    },
    {
        question: "跟家人吵架時，你忍不住脫口而出「依我國實務見解……」，結果？",
        options: ["成功說服家人，贏得勝利", "被趕出家門，冷靜一下"],
        correct: 1,
        reward: 100,
        penalty: 180,
        correctMsg: "你知道的，家不是講法律的地方。",
        wrongMsg: "恭喜你！但你可能要睡沙發了。"
    },
    {
        question: "法院對面的便當店老闆，認出你是上次幫他打贏官司的律師，堅持不收錢，你該？",
        options: ["堅持付錢，支持在地店家", "欣然接受，並多要一塊排骨"],
        correct: 0,
        reward: 150,
        penalty: 90,
        correctMsg: "公私分明，樹立良好形象！",
        wrongMsg: "貪小便宜，有失專業人士風範喔！"
    },
    {
        question: "法官寫判決書時，靈感枯竭，應該？",
        options: ["參考一下文學名著的優美詞句", "複製貼上以前的類似判決"],
        correct: 0,
        reward: 180,
        penalty: 150,
        correctMsg: "好的文采能讓判決書更具說服力！",
        wrongMsg: "小心！案情不同，張冠李戴會出大事的！"
    },
    {
        question: "法院的自動販賣機，吞了你的錢卻沒掉出飲料，你會？",
        options: ["算了，當作日行一善", "立刻拍照存證，研究如何提告"],
        correct: 1,
        reward: 220,
        penalty: 50,
        correctMsg: "法律人的精神，就是維護自身權益！",
        wrongMsg: "你的權利睡著了！"
    },
    {
        question: "開庭時，發現對造律師的簡報上，把你的名字打錯了，要不要糾正他？",
        options: ["當場舉手糾正，維護尊嚴", "算了，反正發音聽起來差不多"],
        correct: 0,
        reward: 130,
        penalty: 70,
        correctMsg: "名字是人格的體現，不容出錯！",
        wrongMsg: "他可能不是故意的，但感覺不太好。"
    },
    {
        question: "當事人送來一尊「逢凶化吉」的關公像，要你放在辦公室，你該？",
        options: ["心懷感激地收下並擺出來", "委婉拒絕，心意領了就好"],
        correct: 1,
        reward: 160,
        penalty: 110,
        correctMsg: "保持辦公室的專業形象很重要！",
        wrongMsg: "久了之後，你的辦公室可能會變成一座廟……"
    },
    {
        question: "法警在一個沉悶的下午開庭時，發現自己快睡著了，他應該？",
        options: ["捏自己大腿，保持清醒", "想像法官的法袍底下是超級英雄裝"],
        correct: 0,
        reward: 100,
        penalty: 100,
        correctMsg: "克盡職守，是法警的榮譽！",
        wrongMsg: "想像力很豐富，但小心笑出來！"
    },
    {
        question: "書記官在打逐字稿時，聽到一個很專業的英文術語，但聽不清楚，她該？",
        options: ["憑感覺拼一個最像的字", "打斷程序，請發言者重複一次"],
        correct: 1,
        reward: 200,
        penalty: 120,
        correctMsg: "筆錄的精確性是無價的！",
        wrongMsg: "一個字的差別，可能導致案情天差地遠！"
    },
    {
        question: "你發現一份關鍵證據，是寫在一百年前的日治時期戶籍謄本上，字跡潦草，你該？",
        options: ["請教歷史系教授或專家", "靠著漢字基礎，大膽猜測"],
        correct: 0,
        reward: 250,
        penalty: 150,
        correctMsg: "專業問題，交給專業人士！訴訟策略正確！",
        wrongMsg: "猜錯一個字，可能整個論點都站不住腳。"
    },
    {
        question: "加班到深夜，事務所只剩你一人，你會聽什麼音樂？",
        options: ["重金屬搖滾，提神醒腦", "心經，祈求案子順利"],
        correct: 1,
        reward: 140,
        penalty: 80,
        correctMsg: "心誠則靈，佛祖保佑！",
        wrongMsg: "小心不要寫出充滿殺氣的書狀。"
    },
    {
        question: "檢察官好不容易起訴了一個案子，結果被告在法庭上被法官「問倒」了，檢察官的心情是？",
        options: ["暗自竊喜，覺得法官是自己人", "替被告捏把冷汗"],
        correct: 0,
        reward: 180,
        penalty: 100,
        correctMsg: "檢察一體，法官也是正義的夥伴！",
        wrongMsg: "身為國家公義的代表，應客觀中立。"
    },
    {
        question: "律師生涯第一次踏入最高法院，你會？",
        options: ["在門口自拍一張，發文紀念", "深呼吸，專注在即將到來的辯論"],
        correct: 1,
        reward: 200,
        penalty: 50,
        correctMsg: "專注於本業，展現大律師風範！",
        wrongMsg: "打卡是小事，開庭是大事啊！"
    },
    {
        question: "當事人用LINE傳來一張長輩圖，上面寫著「認真，你就輸了」，你該回？",
        options: ["「收到，但我這行不認真不行」", "已讀不回，假裝沒看到"],
        correct: 0,
        reward: 150,
        penalty: 130,
        correctMsg: "順便機會教育，提升當事人對司法的信心！",
        wrongMsg: "當事人可能會覺得你不夠關心他。"
    },
    {
        question: "法官的午餐便當，雞腿被助理偷吃了一口，法官下午開庭時應該？",
        options: ["保持風度，當作沒發生", "對該助理的律師，態度特別嚴厲"],
        correct: 0,
        reward: 160,
        penalty: 200,
        correctMsg: "法官的胸襟，跟宇宙一樣寬廣。",
        wrongMsg: "冤有頭、債有主，不能遷怒無辜的律師啊！"
    }
];