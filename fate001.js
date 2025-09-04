const fateEvents001 = [
    {
        question: "律師袍被鳥屎砸到，洗還是不洗？",
        options: ["洗", "不洗"],
        correct: 0,
        reward: 150,
        penalty: 100,
        correctMsg: "衛生習慣良好，值得嘉許",
        wrongMsg: "鳥屎不值得留戀，不洗會很臭唷！"
    },
    {
        question: "法官開庭前發現忘記帶法槌，怎麼辦？",
        options: ["用筆敲桌", "徒手敲桌"],
        correct: 0,
        reward: 200,
        penalty: 50,
        correctMsg: "機智變通，展現專業風範",
        wrongMsg: "手會痛，而且不夠威嚴"
    },
    // --- 以下為新增的20個問題 ---
    {
        question: "開庭開到中午，法官問「中午要吃什麼」，該怎麼回答？",
        options: ["報告庭上，我想吃排骨飯", "一切尊重庭上決定"],
        correct: 1,
        reward: 150,
        penalty: 100,
        correctMsg: "深諳訴訟禮儀，前途無量",
        wrongMsg: "太過誠實，可能會影響法官心證喔！"
    },
    {
        question: "收到對方律師寫了五十頁的書狀，你會？",
        options: ["先拜讀三遍，找出破綻", "直接翻到最後一頁看結論"],
        correct: 1,
        reward: 180,
        penalty: 120,
        correctMsg: "時間就是金錢，效率至上！",
        wrongMsg: "精神可嘉，但小心看到睡著。"
    },
    {
        question: "六法全書太重，帶去法院該用？",
        options: ["手機裡的電子小六法", "練好二頭肌，徒手搬運"],
        correct: 0,
        reward: 150,
        penalty: 50,
        correctMsg: "善用科技，聰明法律人！",
        wrongMsg: "律師袍底下可能有驚人的肌肉！"
    },
    {
        question: "半夜三點接到當事人電話，第一句話該說？",
        options: ["喂？請問有什麼事嗎？", "您好，現在開始按時計費。"],
        correct: 1,
        reward: 250,
        penalty: 150,
        correctMsg: "專業！每一秒都要體現價值！",
        wrongMsg: "你的善良，可能會讓肝指數超標。"
    },
    {
        question: "開庭時，對面的檢察官是你大學同學，要？",
        options: ["用眼神瘋狂暗示", "公事公辦，假裝不認識"],
        correct: 1,
        reward: 180,
        penalty: 80,
        correctMsg: "專業的表現，讓同學也對你刮目相看！",
        wrongMsg: "眉目傳情可能會被法官誤會喔！"
    },
    {
        question: "書記官打字太快，你完全跟不上，怎麼辦？",
        options: ["打斷並請他講慢一點", "假裝點頭，事後再看筆錄"],
        correct: 0,
        reward: 150,
        penalty: 100,
        correctMsg: "勇敢發聲，確保筆錄正確性！",
        wrongMsg: "事後看到錯誤的筆錄會欲哭無淚。"
    },
    {
        question: "在法院的停車場，只剩一個車位，但對方律師也想停？",
        options: ["禮讓他，自己再去繞繞", "用最快的速度倒車入庫"],
        correct: 1,
        reward: 200,
        penalty: 50,
        correctMsg: "訴訟從停車場就開始了，氣勢不能輸！",
        wrongMsg: "開庭可能遲到，但風度不能少？"
    },
    {
        question: "法官的假牙在開庭時突然掉了出來，你該？",
        options: ["憋笑到內傷，保持肅靜", "大聲喊出：「庭上，您的牙齒！"],
        correct: 0,
        reward: 150,
        penalty: 200,
        correctMsg: "優秀的訴訟代理人，情緒管理滿分！",
        wrongMsg: "你可能會因藐視法庭被拘提……"
    },
    {
        question: "寫書狀時，「應」跟「得」用錯了，要不要重印？",
        options: ["當然要，這是法律人的尊嚴", "沒關係，法官應該看得懂"],
        correct: 0,
        reward: 220,
        penalty: 120,
        correctMsg: "細節決定成敗，嚴謹的態度值得讚賞！",
        wrongMsg: "魔鬼藏在細節裡，小心被法官釘在牆上。"
    },
    {
        question: "你的當事人是個鄉土劇迷，堅持要在法庭上「下跪求情」，你該？",
        options: ["讓他跪，或許能博取同情", "立刻拉住他，維持法庭秩序"],
        correct: 1,
        reward: 200,
        penalty: 150,
        correctMsg: "成功阻止一場法庭鬧劇！",
        wrongMsg: "法官可能會覺得你在演戲，扣分！"
    },
    {
        question: "檢察官的領帶歪了，身為律師的你是否要提醒他？",
        options: ["提醒他，展現友好", "不要提醒，讓他分心"],
        correct: 0,
        reward: 100,
        penalty: 100,
        correctMsg: "庭外的風度，也是一種專業。",
        wrongMsg: "這種小伎倆，對專業檢察官是沒用的！"
    },
    {
        question: "開庭前發現，律師袍上個月忘記送洗，有濃濃的「卷宗味」，怎麼辦？",
        options: ["噴滿香水，欲蓋彌彰", "抬頭挺胸，這是專業的味道"],
        correct: 1,
        reward: 180,
        penalty: 80,
        correctMsg: "自信，就是你最好的氣場！",
        wrongMsg: "混合的味道可能會讓法官和對造律師都退避三舍。"
    },
    {
        question: "在法庭上，你想引用一個法條，卻想不起來是第幾條？",
        options: ["就說「相關規定」帶過", "誠實地說「容我確認一下」"],
        correct: 1,
        reward: 200,
        penalty: 100,
        correctMsg: "誠實是上策，專業來自嚴謹。",
        wrongMsg: "法官可能會接著問：「是哪條相關規定？」"
    },
    {
        question: "助理泡的咖啡太苦，喝還是不喝？",
        options: ["含淚喝完，稱讚好喝", "溫柔地教他正確的泡法"],
        correct: 1,
        reward: 120,
        penalty: 60,
        correctMsg: "好的領導，從改善辦公室咖啡開始。",
        wrongMsg: "你的胃可能正在無聲地抗議。"
    },
    {
        question: "開完一個超長的庭，你最想做的事是？",
        options: ["立刻回事務所寫下一場的書狀", "去吃一頓大餐犒賞自己"],
        correct: 1,
        reward: 160,
        penalty: 90,
        correctMsg: "休息是為了走更長遠的路！",
        wrongMsg: "你是法律界的鐵人嗎？"
    },
    {
        question: "當事人送來一箱水果表示感謝，但案件還在進行中，你該？",
        options: ["委婉拒絕，並說明規定", "收下，然後分給全事務所同事"],
        correct: 0,
        reward: 250,
        penalty: 180,
        correctMsg: "嚴守律師倫理，專業的典範！",
        wrongMsg: "小心！這可能會引發不必要的爭議。"
    },
    {
        question: "法庭的冷氣開太強，你會？",
        options: ["默默穿上律師袍保暖", "舉手請求法官調整溫度"],
        correct: 0,
        reward: 130,
        penalty: 70,
        correctMsg: "原來律師袍還有這個功能！一袍多用！",
        wrongMsg: "你可能會因為打斷訴訟程序而被法官白眼。"
    },
    {
        question: "言詞辯論時，對方律師突然開始唱歌，你會？",
        options: ["跟著他一起唱", "向法官表示反對，請求制止"],
        correct: 1,
        reward: 220,
        penalty: 150,
        correctMsg: "維持法庭的莊嚴，你是專業的！",
        wrongMsg: "雖然很有趣，但這不是KTV啊！"
    },
    {
        question: "贏了一場小額訴訟，標的金額只有一千元，你的心情是？",
        options: ["超級開心，正義得以伸張！", "內心空虛，律師費都不夠"],
        correct: 0,
        reward: 180,
        penalty: 100,
        correctMsg: "不因善小而不為，每件案子都代表一份正義！",
        wrongMsg: "錢不是萬能的，但沒錢萬萬不能啊！"
    },
    {
        question: "法官的電腦突然當機，螢幕上出現了踩地雷的畫面，你該？",
        options: ["假裝沒看到，低頭看卷", "提供IT支援，幫法官破關"],
        correct: 0,
        reward: 150,
        penalty: 150,
        correctMsg: "非禮勿視，保護庭上，人人有責。",
        wrongMsg: "你可能會被法官稱讚，但也可能被他永遠記住……"
    }
];