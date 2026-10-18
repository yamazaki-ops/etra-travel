/* Etraトラベル 旅程データ。ここだけ差し替えれば更新できます
   出典：2026-10-17〜19 受信の予約メール17件＋JR九州 予約完了画面＋えきねっと 申込内容詳細2画面
   checkout.time が null のものは、予約メールに時刻の記載がないもの */
window.SAMPLE = false;
window.TRIPS = [
  { id:"tokyo-niigata-nagoya2610", title:"東京・新潟・名古屋出張",
    warnings:[
    ],
    items:[
    { type:"flight", date:"2026-10-20", dep:{time:"10:40", place:"大分空港"}, arr:{time:"12:20", place:"成田空港 第3ターミナル"},
      name:"ジェットスター GK602便", facts:{ "座席":"4D", "予約番号":"DWDU2G", "手荷物":"機内7kg・預け15kg" },
      note:"搭乗手続きは出発35分前まで。自動チェックイン機に予約番号を入力" },
    { type:"hotel", date:"2026-10-20", checkin:"16:00", checkout:{date:"2026-10-21", time:null},
      name:"西新宿グリーンホテル", address:"東京都渋谷区幡ヶ谷2-18-1", tel:"03-3378-2468",
      facts:{ "予約受付番号":"RYa0njfe6x", "部屋":"シングル（セミダブル）・喫煙", "支払い":"一括精算（現地払いなし）" },
      note:"受付は16:00〜翌2:00。2:00〜6:00は玄関施錠" },
    { type:"train", date:"2026-10-21", dep:{time:"10:15", place:"東京駅"}, arr:{time:"12:17", place:"新潟駅"},
      name:"とき315号（上越新幹線）", facts:{ "号車・座席":"6号車 18番D", "きっぷ":"eチケット（Mysuica）" } },
    { type:"hotel", date:"2026-10-21", checkin:"21:30", checkout:{date:"2026-10-22", time:null},
      name:"アートホテル新潟駅前", address:"新潟県新潟市中央区笹口1-1", tel:"025-240-2111",
      facts:{ "予約受付番号":"RYa0njfgr1", "部屋":"スーペリアシングル・禁煙", "食事":"10/22 朝食", "支払い":"一括精算（現地払いなし）" } },
    { type:"train", date:"2026-10-22", dep:{time:"08:33", place:"新潟駅"}, arr:{time:"10:29", place:"東京駅"},
      name:"とき310号（上越新幹線）", facts:{ "号車・座席":"9号車 2番E", "予約番号":"E69722", "きっぷ":"eチケット（Mysuica）" } },
    { type:"train", date:"2026-10-22", dep:{time:"11:00", place:"東京駅"}, arr:{time:"12:39", place:"名古屋駅"},
      name:"のぞみ255号", facts:{ "号車・座席":"5号車 7番A", "お預かり番号":"2001", "きっぷ":"スマートEX（IC乗車）" } },
    { type:"hotel", date:"2026-10-22", checkin:"15:00", checkout:{date:"2026-10-24", time:null},
      name:"ジャストインプレミアム名古屋駅", address:"愛知県名古屋市中区丸の内1-13-9", tel:"052-232-0003",
      facts:{ "予約受付番号":"RYa0njfp12", "部屋":"プレミアムシングル・禁煙", "食事":"10/23 朝夕・10/24 朝", "支払い":"一括精算（現地払いなし）" } },
    { type:"train", date:"2026-10-24", dep:{time:"10:24", place:"名古屋駅"}, arr:{time:"13:28", place:"小倉駅"},
      name:"のぞみ131号", facts:{ "号車・座席":"15号車 1番A", "お預かり番号":"2003", "きっぷ":"スマートEX（IC指定済み）" } },
    { type:"train", date:"2026-10-24", dep:{time:"13:42", place:"小倉駅"}, arr:{time:"15:02", place:"大分駅"},
      name:"特急ソニック25号", facts:{ "号車・座席":"4号車 2番D", "予約番号":"65251", "きっぷ":"QRチケット" },
      ticketUrl:"https://train-ticket.jrkyushu.co.jp/tkl/ui/ticket?key=d8d85ed7-c304-42f8-87a0-2ea2ff43f6b3",
      note:"小倉での乗換は14分。QRチケットは通信できる状態で表示（スクショ不可）" }
  ]},
  { id:"tokyo2610b", title:"東京出張",
    warnings:[
    ],
    items:[
    { type:"flight", date:"2026-10-28", dep:{time:"07:50", place:"大分空港"}, arr:{time:"09:20", place:"羽田空港"},
      name:"JAL 662便", facts:{ "座席":"33C（普通席）", "予約番号":"DS3VXD", "支払い":"購入済み" } },
    { type:"hotel", date:"2026-10-28", checkin:"15:00", checkout:{date:"2026-10-29", time:"10:00"},
      name:"ホテルリブマックス 新宿歌舞伎町明治通", address:"東京都新宿区歌舞伎町2-23", tel:"03-3209-7800",
      facts:{ "予約ID":"1787106689", "部屋":"シングル（トイレ付）・禁煙", "支払い":"支払い済み（返金不可）" },
      note:"宿泊税は別途、チェックイン時に支払い" },
    { type:"hotel", date:"2026-10-29", checkin:"15:00", checkout:{date:"2026-10-30", time:"10:00"},
      name:"スーパーホテル さいたま・和光市駅前", address:"埼玉県和光市本町1-13", tel:"048-452-9000",
      facts:{ "予約番号":"4005-2970-9527", "部屋":"お任せ・禁煙", "食事":"10/30 朝食", "支払い":"カード決済済み" },
      note:"到着予定 20:00で予約" },
    { type:"flight", date:"2026-10-30", dep:{time:"09:45", place:"羽田空港"}, arr:{time:"11:30", place:"大分空港"},
      name:"JAL 663便", facts:{ "座席":"32H（普通席）", "予約番号":"DS3VXD", "支払い":"購入済み" } }
  ]},
  { id:"yaizu2611", title:"焼津出張",
    warnings:[ "往復の交通は予約がありません" ],
    items:[
    { type:"hotel", date:"2026-11-04", checkin:"15:00", checkout:{date:"2026-11-06", time:null},
      name:"ホテル シーラックパル焼津", address:"静岡県焼津市栄町2-6-17", tel:"054-620-5586",
      facts:{ "予約受付番号":"RYa0njg4d3", "部屋":"シングル・喫煙", "食事":"11/5 朝夕・11/6 朝", "支払い":"一括精算（現地払いなし）" } }
  ]},
  { id:"kawasaki2611", title:"川崎出張",
    warnings:[ "往復の交通は予約がありません" ],
    items:[
    { type:"hotel", date:"2026-11-09", checkin:"15:00", checkout:{date:"2026-11-10", time:null},
      name:"川崎第一ホテル溝ノ口", address:"神奈川県川崎市高津区溝口2-3-12", tel:"044-877-3333",
      facts:{ "予約受付番号":"RYa0njg5f4", "部屋":"シングル・喫煙", "食事":"11/10 朝食", "支払い":"一括精算（現地払いなし）" } }
  ]}
];
