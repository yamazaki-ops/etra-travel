/* Etraトラベル 旅程データ。ここだけ差し替えれば更新できます */
window.SAMPLE = true;
window.TRIPS = [
  { id:"fukuoka2609", title:"福岡出張（サンプル）", items:[
    { type:"train", date:"2026-09-16", dep:{time:"07:58", place:"大分駅"}, arr:{time:"10:13", place:"博多駅"},
      name:"ソニック 12号", facts:{ "号車・座席":"4号車 8C" } },
    { type:"train", date:"2026-09-16", dep:{time:"18:12", place:"博多駅"}, arr:{time:"20:24", place:"大分駅"},
      name:"ソニック 51号", facts:{ "号車・座席":"6号車 2A" } }
  ]},
  { id:"tokyo2610", title:"東京出張（サンプル）", items:[
    { type:"flight", date:"2026-10-27", dep:{time:"08:10", place:"大分空港"}, arr:{time:"09:40", place:"羽田空港 第1ターミナル"},
      name:"JAL 662便", facts:{ "座席":"23A", "予約番号":"ABC123", "搭乗口":"当日確認" }, note:"保安検査は出発20分前まで" },
    { type:"train", date:"2026-10-27", dep:{time:"10:05", place:"羽田空港第1ターミナル駅"}, arr:{time:"10:25", place:"浜松町駅"},
      name:"東京モノレール", facts:{ "運賃":"IC利用" } },
    { type:"hotel", date:"2026-10-27", checkin:"15:00", checkout:{date:"2026-10-29", time:"11:00"},
      name:"サンプルホテル浜松町", address:"東京都港区海岸1-1-1", tel:"03-0000-0000",
      facts:{ "予約番号":"HTL-98765", "部屋":"シングル・禁煙", "支払い":"現地払い" } },
    { type:"train", date:"2026-10-29", dep:{time:"12:30", place:"東京駅"}, arr:{time:"17:24", place:"小倉駅"},
      name:"のぞみ 41号", facts:{ "号車・座席":"7号車 12E", "予約番号":"EX-4567" } },
    { type:"train", date:"2026-10-29", dep:{time:"17:41", place:"小倉駅"}, arr:{time:"18:59", place:"大分駅"},
      name:"ソニック 55号", facts:{ "号車・座席":"5号車 3A" } }
  ]},
  { id:"osaka2611", title:"大阪出張（サンプル）", items:[
    { type:"flight", date:"2026-11-12", dep:{time:"09:15", place:"大分空港"}, arr:{time:"10:20", place:"伊丹空港"},
      name:"ANA 1692便", facts:{ "座席":"14C", "予約番号":"XYZ789" } },
    { type:"bus", date:"2026-11-12", dep:{time:"10:40", place:"大阪空港バス停"}, arr:{time:"11:05", place:"梅田"},
      name:"空港リムジンバス", facts:{ "乗り場":"南ターミナル 5番" } },
    { type:"hotel", date:"2026-11-12", checkin:"15:00", checkout:{date:"2026-11-13", time:"10:00"},
      name:"サンプルイン梅田", address:"大阪府大阪市北区梅田1-1-1", tel:"06-0000-0000",
      facts:{ "予約番号":"OSK-2468", "部屋":"シングル・禁煙" } },
    { type:"train", date:"2026-11-13", dep:{time:"15:20", place:"新大阪駅"}, arr:{time:"17:35", place:"小倉駅"},
      name:"のぞみ 27号", facts:{ "号車・座席":"9号車 4A", "予約番号":"EX-1357" } },
    { type:"train", date:"2026-11-13", dep:{time:"17:52", place:"小倉駅"}, arr:{time:"19:12", place:"大分駅"},
      name:"ソニック 57号", facts:{ "号車・座席":"3号車 6D" } }
  ]}
];
