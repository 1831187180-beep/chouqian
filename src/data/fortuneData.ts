import { DialogueLine, FortuneResult } from '../types';

export const RANKS = [
  { rank: '大吉', weight: 18 },
  { rank: '中吉', weight: 22 },
  { rank: '小吉', weight: 24 },
  { rank: '末吉', weight: 16 },
  { rank: '小凶', weight: 10 },
  { rank: '中凶', weight: 5 },
  { rank: '大凶', weight: 2 },
  { rank: '特别签', weight: 2 },
  { rank: '无解', weight: 1 },
];

export const SIGN_NAMES = [
  '第一签·初霁', '第二签·微风', '第三签·同路', '第四签·缓步',
  '第五签·问云', '第六签·浅水', '第七签·待时', '第八签·向暖',
  '第九签·知白', '第十签·听风', '第十一签·落叶', '第十二签·寻常',
  '第十三签·清溪', '第十四签·行舟', '第十五签·观澜', '第十六签·向晚',
  '第十七签·静默', '第十八签·偶得', '第十九签·回甘', '第二十签·自适',
  '第二十一签·随缘', '第二十二签·幽竹', '第二十三签·春水', '第二十四签·素心',
  '第二十五签·微明', '第二十六签·闲云', '第二十七签·归途', '第二十八签·不争',
  '第二十九签·晨雾', '第三十签·留白', '第三十一签·迟暮', '第三十二签·浅语'
];

export const POEMS_BY_RANK: Record<string, string[]> = {
  大吉: [
    '今日风和，适宜向前一步。',
    '晨光破晓，所见皆有回响。',
    '水流自顺，诸事恰逢其时。',
    '云散天青，心之所向皆可行。',
    '万事俱备，只管信步向前。',
    '意料之外，却在情理之中。',
    '天地开阔，正好放手一试。',
    '微风拂面，所遇皆为良善。'
  ],
  中吉: [
    '恰好同路，不必多想。',
    '日头温软，做一半也是做。',
    '风波已过，静待水面平息。',
    '平淡无奇，正是最好的消息。',
    '行至半途，自会有柳暗花明。',
    '顺其自然，便能省去许多力气。',
    '有些事不必立刻弄明白，往前走就好。',
    '心宽一寸，路宽一丈。'
  ],
  小吉: [
    '事情没有你想象中那么难。',
    '只要迈出一步，剩下的路会自己出现。',
    '虽有微凉，添件衣裳便无妨。',
    '偶有小阻，绕过去也就是了。',
    '今天适合做一件细微的小事。',
    '答案藏在一杯温水里。',
    '稍微试一下，并不会失去什么。',
    '静水流深，慢慢来就好。'
  ],
  末吉: [
    '慢一点，也没有关系。',
    '今天不适合争辩，适合发呆。',
    '脚步放缓，风景才能看清。',
    '不要急于给出承诺。',
    '把手头的事做完，剩下的交给明天。',
    '不争先，便少去几分疲惫。',
    '有些等待是必须经过的缝隙。',
    '放低一点期待，反而有意外收获。'
  ],
  小凶: [
    '今日容易多想。',
    '情绪如潮水，等它退去再做决定。',
    '屋檐滴水，出门记得带伞。',
    '言多易失，不如多听少说。',
    '心中微乱，先把房间收拾干净。',
    '不要在疲惫的时候下定决心。',
    '有些话听过就算，不必深究。',
    '今日适宜早点休息。'
  ],
  中凶: [
    '云有微雨，事情可能反复。',
    '雾气渐浓，暂时看不清前路。',
    '不宜强求，强扭的瓜总是不甜。',
    '今日容易遇到固执的人。',
    '若是走不通，不妨退回原点。',
    '暂时收拢羽翼，不要硬碰硬。',
    '事情卡住时，放一放也是智慧。',
    '不要在这个时候做大变动。'
  ],
  大凶: [
    '今日诸事不宜。',
    '闭门静坐，胜过四处奔波。',
    '风雨未歇，且在亭下避一避。',
    '把手机放下，今天先放空自己。',
    '不争、不辩、不急、不躁。',
    '难得一天的彻底停顿，也是一种运气。',
    '今天只负责吃饭和睡觉就好。'
  ],
  '特别签': [
    '命运今天心情不错。',
    '宇宙偶尔也会网开一面。',
    '今天的所有巧合，都是特意安排。',
    '今天你拥有随时离开和开始的特权。'
  ],
  '无解': [
    '系统也不知道。',
    '有些问题本就没有标准答案。',
    '卦象空白，说明由你说了算。',
    '天机不显，今天纯凭直觉。'
  ],
  '？？？': [
    '这张签本来不存在。',
    '他们今天意见一致。'
  ]
};

export const ACTIONS: string[] = [
  '可以去做',
  '可以去试试',
  '可以，但慢一点',
  '可以去做，不用想太多',
  '先做一点',
  '可以，不过别急',
  '今天先算了',
  '暂时不要',
  '等等再决定',
  '先喝杯温水',
  '先放一放',
  '试一下也无妨',
  '不必急着答复',
  '可以信步走走',
  '先做手头的事',
  '自己决定',
  '当然可以',
  '你还是抽到了'
];

export const DIALOGUES: DialogueLine[][] = [
  // 1-30 Prompt provided originals
  [
    { speaker: 'Gavin Newsom', text: '你怎么又来了？' },
    { speaker: 'Elon Musk', text: '路过。' },
    { speaker: 'Gavin Newsom', text: '你上次也是这么说的。' },
    { speaker: 'Elon Musk', text: '那说明我经常路过。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '我们今天不要讨论火箭。' },
    { speaker: 'Elon Musk', text: '好。' },
    { speaker: 'Gavin Newsom', text: '你答应得太快了。' },
    { speaker: 'Elon Musk', text: '因为我今天想讨论火星。' },
    { speaker: 'Gavin Newsom', text: '……这有什么区别？' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你是不是又改计划了？' },
    { speaker: 'Elon Musk', text: '没有。' },
    { speaker: 'Gavin Newsom', text: '那为什么文件是新的？' },
    { speaker: 'Elon Musk', text: '旧文件看起来不够有未来感。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你今天怎么这么安静？' },
    { speaker: 'Elon Musk', text: '我在思考。' },
    { speaker: 'Gavin Newsom', text: '这是好事吗？' },
    { speaker: 'Elon Musk', text: '通常不是。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你知道我们只是来喝咖啡的吗？' },
    { speaker: 'Elon Musk', text: '知道。' },
    { speaker: 'Gavin Newsom', text: '那你为什么带了一张地图？' },
    { speaker: 'Elon Musk', text: '习惯。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '今天可以正常聊天吗？' },
    { speaker: 'Elon Musk', text: '可以。' },
    { speaker: 'Gavin Newsom', text: '保证？' },
    { speaker: 'Elon Musk', text: '尽量。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你刚刚是不是笑了？' },
    { speaker: 'Elon Musk', text: '没有。' },
    { speaker: 'Gavin Newsom', text: '我看到了。' },
    { speaker: 'Elon Musk', text: '那就是你的错觉。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '我们保持一点距离。' },
    { speaker: 'Elon Musk', text: '多少？' },
    { speaker: 'Gavin Newsom', text: '正常的距离。' },
    { speaker: 'Elon Musk', text: '什么叫正常？' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你为什么记得这个？' },
    { speaker: 'Elon Musk', text: '因为你说过。' },
    { speaker: 'Gavin Newsom', text: '我以为你没听见。' },
    { speaker: 'Elon Musk', text: '我听见了。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '今天不要惹麻烦。' },
    { speaker: 'Elon Musk', text: '我从来不主动惹麻烦。' },
    { speaker: 'Gavin Newsom', text: '……' },
    { speaker: 'Elon Musk', text: '麻烦自己来的。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你又在看什么？' },
    { speaker: 'Elon Musk', text: '天气。' },
    { speaker: 'Gavin Newsom', text: '天气有什么好看的？' },
    { speaker: 'Elon Musk', text: '你说今天会下雨。' },
    { speaker: 'Gavin Newsom', text: '所以？' },
    { speaker: 'Elon Musk', text: '我在确认你是不是对的。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '我们意见不一样。' },
    { speaker: 'Elon Musk', text: '我知道。' },
    { speaker: 'Gavin Newsom', text: '你不生气？' },
    { speaker: 'Elon Musk', text: '为什么？' },
    { speaker: 'Gavin Newsom', text: '没什么。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你是不是故意的？' },
    { speaker: 'Elon Musk', text: '什么？' },
    { speaker: 'Gavin Newsom', text: '算了。' },
    { speaker: 'Elon Musk', text: '好的。' },
    { speaker: 'Gavin Newsom', text: '你甚至都不问。' },
    { speaker: 'Elon Musk', text: '你会自己说的。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '今天到这里。' },
    { speaker: 'Elon Musk', text: '好。' },
    { speaker: 'Gavin Newsom', text: '你怎么还没走？' },
    { speaker: 'Elon Musk', text: '你也没走。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你带这个干什么？' },
    { speaker: 'Elon Musk', text: '以防万一。' },
    { speaker: 'Gavin Newsom', text: '什么万一？' },
    { speaker: 'Elon Musk', text: '我不知道。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你觉得这个主意怎么样？' },
    { speaker: 'Elon Musk', text: '很好。' },
    { speaker: 'Gavin Newsom', text: '你都没听完。' },
    { speaker: 'Elon Musk', text: '那就更好了。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '别把这件事发到网上。' },
    { speaker: 'Elon Musk', text: '为什么？' },
    { speaker: 'Gavin Newsom', text: '因为不用什么都发。' },
    { speaker: 'Elon Musk', text: '有道理。' },
    { speaker: 'Gavin Newsom', text: '你记住了？' },
    { speaker: 'Elon Musk', text: '我考虑一下。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你今天看起来很忙。' },
    { speaker: 'Elon Musk', text: '还好。' },
    { speaker: 'Gavin Newsom', text: '那你为什么还在这里？' },
    { speaker: 'Elon Musk', text: '这个问题比较复杂。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '我说的是加州。' },
    { speaker: 'Elon Musk', text: '我知道。' },
    { speaker: 'Gavin Newsom', text: '那你为什么想到太空？' },
    { speaker: 'Elon Musk', text: '因为你说得太远了。' },
    { speaker: 'Gavin Newsom', text: '……' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你是不是又在计划什么？' },
    { speaker: 'Elon Musk', text: '没有。' },
    { speaker: 'Gavin Newsom', text: '真的吗？' },
    { speaker: 'Elon Musk', text: '目前没有。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '今天很安静。' },
    { speaker: 'Elon Musk', text: '挺好的。' },
    { speaker: 'Gavin Newsom', text: '难得。' },
    { speaker: 'Elon Musk', text: '我也这么觉得。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你记得回去。' },
    { speaker: 'Elon Musk', text: '你呢？' },
    { speaker: 'Gavin Newsom', text: '我当然记得。' },
    { speaker: 'Elon Musk', text: '那就好。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '我们什么时候变得这么有默契了？' },
    { speaker: 'Elon Musk', text: '什么时候？' },
    { speaker: 'Gavin Newsom', text: '……' },
    { speaker: 'Elon Musk', text: '我不知道。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '这件事很简单。' },
    { speaker: 'Elon Musk', text: '听起来不像。' },
    { speaker: 'Gavin Newsom', text: '为什么？' },
    { speaker: 'Elon Musk', text: '因为你说得太认真了。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: 'Newsom 🫶 Musk。' },
    { speaker: 'Elon Musk', text: '这是什么？' },
    { speaker: 'Gavin Newsom', text: '什么都不是。' },
    { speaker: 'Elon Musk', text: '哦。' },
    { speaker: 'Gavin Newsom', text: '你别截图。' },
    { speaker: 'Elon Musk', text: '已经截图了。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你是不是在等我？' },
    { speaker: 'Elon Musk', text: '没有。' },
    { speaker: 'Gavin Newsom', text: '那你在等谁？' },
    { speaker: 'Elon Musk', text: '这个问题很难回答。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '今天不要说‘未来’。' },
    { speaker: 'Elon Musk', text: '为什么？' },
    { speaker: 'Gavin Newsom', text: '因为每次你说这个词，事情都会变复杂。' },
    { speaker: 'Elon Musk', text: '未来本来就很复杂。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你刚刚说什么？' },
    { speaker: 'Elon Musk', text: '没什么。' },
    { speaker: 'Gavin Newsom', text: '再说一遍。' },
    { speaker: 'Elon Musk', text: '你听见了。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '我觉得今天会很顺利。' },
    { speaker: 'Elon Musk', text: '我也觉得。' },
    { speaker: 'Gavin Newsom', text: '你居然没有反驳。' },
    { speaker: 'Elon Musk', text: '今天不反驳。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你从哪里来的？' },
    { speaker: 'Elon Musk', text: '很远的地方。' },
    { speaker: 'Gavin Newsom', text: '多远？' },
    { speaker: 'Elon Musk', text: '你猜。' }
  ],

  // 31-105: Extended Original Dialogues matching the exact proportion & tone

  // [日常吐槽 (40%)]
  [
    { speaker: 'Gavin Newsom', text: '这杯茶冷了。' },
    { speaker: 'Elon Musk', text: '它遵循热力学第二定律。' },
    { speaker: 'Gavin Newsom', text: '你就不能直接帮我加点热水吗？' },
    { speaker: 'Elon Musk', text: '物理学比加水有趣。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你在本子上画了什么？' },
    { speaker: 'Elon Musk', text: '一个四维超立方体。' },
    { speaker: 'Gavin Newsom', text: '看起来像个压扁的纸箱。' },
    { speaker: 'Elon Musk', text: '你的审美停留在三维空间。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '今天风很大。' },
    { speaker: 'Elon Musk', text: '风阻系数大约 0.28。' },
    { speaker: 'Gavin Newsom', text: '我的头发都被吹乱了。' },
    { speaker: 'Elon Musk', text: '现在是 0.32 了。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你出门从来不看备忘录吗？' },
    { speaker: 'Elon Musk', text: '我记在脑子里。' },
    { speaker: 'Gavin Newsom', text: '那钥匙呢？' },
    { speaker: 'Elon Musk', text: '……在门上。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你为什么一定要坐在靠窗的位置？' },
    { speaker: 'Elon Musk', text: '视野好。' },
    { speaker: 'Gavin Newsom', text: '外面只有一堵墙。' },
    { speaker: 'Elon Musk', text: '墙很有结构美感。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你刚刚是不是叹气了？' },
    { speaker: 'Elon Musk', text: '那是二氧化碳的正常释放。' },
    { speaker: 'Gavin Newsom', text: '你明明就是嫌会议太长。' },
    { speaker: 'Elon Musk', text: '两件事并不冲突。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '别盯着时钟看。' },
    { speaker: 'Elon Musk', text: '我没看时钟。' },
    { speaker: 'Gavin Newsom', text: '那你在看什么？' },
    { speaker: 'Elon Musk', text: '秒针移动的角速度。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你把车停在哪了？' },
    { speaker: 'Elon Musk', text: '一个合法且合理的空间。' },
    { speaker: 'Gavin Newsom', text: '所以是找不到的意思？' },
    { speaker: 'Elon Musk', text: '它会呼唤我的。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '今天的议程只有两项。' },
    { speaker: 'Elon Musk', text: '太多了。' },
    { speaker: 'Gavin Newsom', text: '只用十分钟。' },
    { speaker: 'Elon Musk', text: '那还可以接受。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你手里的咖啡是无糖的吗？' },
    { speaker: 'Elon Musk', text: '不知道，别人给我的。' },
    { speaker: 'Gavin Newsom', text: '那是我的。' },
    { speaker: 'Elon Musk', text: '难怪味道很讲究。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你今天没戴表？' },
    { speaker: 'Elon Musk', text: '时间是相对概念。' },
    { speaker: 'Gavin Newsom', text: '所以你迟到了整整二十分钟。' },
    { speaker: 'Elon Musk', text: '相对来说不算太久。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你为什么老是穿同一件黑色上衣？' },
    { speaker: 'Elon Musk', text: '减少大脑决策熵增。' },
    { speaker: 'Gavin Newsom', text: '衣柜里其实有三十件一样的吧。' },
    { speaker: 'Elon Musk', text: '三十五件。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '我们要不要走这条路？' },
    { speaker: 'Elon Musk', text: '这是条死胡同。' },
    { speaker: 'Gavin Newsom', text: '你怎么知道？' },
    { speaker: 'Elon Musk', text: '我昨天走过一次。' },
    { speaker: 'Gavin Newsom', text: '你昨天来这里干什么？' },
    { speaker: 'Elon Musk', text: '探索死胡同。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '别敲桌子了。' },
    { speaker: 'Elon Musk', text: '我在测它的固有振动频率。' },
    { speaker: 'Gavin Newsom', text: '测出来了吗？' },
    { speaker: 'Elon Musk', text: '快了，再敲五下。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你为什么带了一只机械扳手来办公室？' },
    { speaker: 'Elon Musk', text: '它很有安全感。' },
    { speaker: 'Gavin Newsom', text: '对谁？' },
    { speaker: 'Elon Musk', text: '对我。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你是不是把糖当成盐了？' },
    { speaker: 'Elon Musk', text: '都是白色晶体。' },
    { speaker: 'Gavin Newsom', text: '……尝起来如何？' },
    { speaker: 'Elon Musk', text: '化学反应出乎意料。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '今天谁买单？' },
    { speaker: 'Elon Musk', text: '抛硬币吧。' },
    { speaker: 'Gavin Newsom', text: '正面对你有利，反面对我有害。' },
    { speaker: 'Elon Musk', text: '很公平的概率模型。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你走路能慢一点吗？' },
    { speaker: 'Elon Musk', text: '我已经开启了节能巡航模式。' },
    { speaker: 'Gavin Newsom', text: '那你把巡航调到步行档。' },
    { speaker: 'Elon Musk', text: '正在重新校准。' }
  ],

  // [奇怪的默契 (25%)]
  [
    { speaker: 'Gavin Newsom', text: '那家店关门了。' },
    { speaker: 'Elon Musk', text: '我知道。' },
    { speaker: 'Gavin Newsom', text: '换另一家？' },
    { speaker: 'Elon Musk', text: '街角第三家，你喜欢的坚果奶。' },
    { speaker: 'Gavin Newsom', text: '……算你记性好。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '如果今天下暴雨……' },
    { speaker: 'Elon Musk', text: '就在屋檐下坐到雨停。' },
    { speaker: 'Gavin Newsom', text: '你也是这么想的？' },
    { speaker: 'Elon Musk', text: '显而易见的最优解。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '三、二、一。' },
    { speaker: 'Elon Musk', text: '不去了。' },
    { speaker: 'Gavin Newsom', text: '很好，我们同时决定翘掉。' },
    { speaker: 'Elon Musk', text: '完美同步。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '这首歌叫什么？' },
    { speaker: 'Elon Musk', text: '不用查，听完就行。' },
    { speaker: 'Gavin Newsom', text: '好。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你觉得那个方案可行吗？' },
    { speaker: 'Elon Musk', text: '第 4 条和第 9 条得删掉。' },
    { speaker: 'Gavin Newsom', text: '我也是这么用红笔圈出来的。' },
    { speaker: 'Elon Musk', text: '这就叫英雄所见略同。' },
    { speaker: 'Gavin Newsom', text: '别往自己脸上贴金。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你今天居然没反驳我。' },
    { speaker: 'Elon Musk', text: '省点能量。' },
    { speaker: 'Gavin Newsom', text: '留着干什么？' },
    { speaker: 'Elon Musk', text: '留着听你把话说完。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '这里风有点大。' },
    { speaker: 'Elon Musk', text: '换个背风的台阶。' },
    { speaker: 'Gavin Newsom', text: '走吧。' },
    { speaker: 'Elon Musk', text: '跟上。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你刚才看了一眼手机。' },
    { speaker: 'Elon Musk', text: '又关上了。' },
    { speaker: 'Gavin Newsom', text: '为什么？' },
    { speaker: 'Elon Musk', text: '没有现在重要。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '这个安静的时刻能维持多久？' },
    { speaker: 'Elon Musk', text: '取决于你什么时候开口。' },
    { speaker: 'Gavin Newsom', text: '那我先不说了。' },
    { speaker: 'Elon Musk', text: '明智的选择。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '我猜你下一句要说“算力不足”。' },
    { speaker: 'Elon Musk', text: '……本来是的。' },
    { speaker: 'Gavin Newsom', text: '现在呢？' },
    { speaker: 'Elon Musk', text: '算力刚刚恢复了。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '两杯水。' },
    { speaker: 'Elon Musk', text: '一杯温的，一杯加冰。' },
    { speaker: 'Gavin Newsom', text: '你知道哪杯是你的。' },
    { speaker: 'Elon Musk', text: '毫无悬念。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '不用看地图了。' },
    { speaker: 'Elon Musk', text: '迷路了也是直行。' },
    { speaker: 'Gavin Newsom', text: '那就一直走。' }
  ],

  // [加州、科技、火箭等荒诞元素 (15%)]
  [
    { speaker: 'Gavin Newsom', text: '加州的阳光今天很好。' },
    { speaker: 'Elon Musk', text: '光伏转换效率可以达到 24.5%。' },
    { speaker: 'Gavin Newsom', text: '我只是在赞美天气。' },
    { speaker: 'Elon Musk', text: '我是在用数据赞美天气。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '如果火箭发射延迟了怎么办？' },
    { speaker: 'Elon Musk', text: '那就再推迟一天。' },
    { speaker: 'Gavin Newsom', text: '你的投资人不会抓狂吗？' },
    { speaker: 'Elon Musk', text: '宇宙已经等了 138 亿年，他们可以多等一天。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '火星上有咖啡馆吗？' },
    { speaker: 'Elon Musk', text: '第一批拓荒者需要的是氧气发生器。' },
    { speaker: 'Gavin Newsom', text: '那我不去了。' },
    { speaker: 'Elon Musk', text: '……我可以预留一个咖啡角。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '听说你打算把卫星连成一条链？' },
    { speaker: 'Elon Musk', text: '在夜空中划过很壮观。' },
    { speaker: 'Gavin Newsom', text: '天文学家可能会有意见。' },
    { speaker: 'Elon Musk', text: '我会把表面涂黑一点点。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '加州海岸线很美吧。' },
    { speaker: 'Elon Musk', text: '很适合建一个垂直着陆场。' },
    { speaker: 'Gavin Newsom', text: '驳回，那是海獭的保护区。' },
    { speaker: 'Elon Musk', text: '海獭也可以看火箭着陆。' },
    { speaker: 'Gavin Newsom', text: '……绝对不行。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你对自动驾驶的新算法满意吗？' },
    { speaker: 'Elon Musk', text: '它今天识别出了一只松鼠。' },
    { speaker: 'Gavin Newsom', text: '避开了吗？' },
    { speaker: 'Elon Musk', text: '不仅避开了，还减速向它致意。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你今天怎么没坐私人飞机？' },
    { speaker: 'Elon Musk', text: '加州的公路风光不错。' },
    { speaker: 'Gavin Newsom', text: '是不是堵车了？' },
    { speaker: 'Elon Musk', text: '……只是在路上停留得久了一点。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '硅谷今天温度多少？' },
    { speaker: 'Elon Musk', text: '刚好适合服务器降温。' },
    { speaker: 'Gavin Newsom', text: '你脑子里只有服务器。' },
    { speaker: 'Elon Musk', text: '还有电池组。' }
  ],

  // [非常轻微的暧昧 (10%)]
  [
    { speaker: 'Gavin Newsom', text: '你为什么总是挑我说话的时候看窗外？' },
    { speaker: 'Elon Musk', text: '玻璃上有反光。' },
    { speaker: 'Gavin Newsom', text: '反光里有什么？' },
    { speaker: 'Elon Musk', text: '你。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '这条围巾你戴反了。' },
    { speaker: 'Elon Musk', text: '无所谓，能保暖就行。' },
    { speaker: 'Gavin Newsom', text: '别动，我帮你正过来。' },
    { speaker: 'Elon Musk', text: '……好。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '如果某天你真的去了火星……' },
    { speaker: 'Elon Musk', text: '信号延迟大约八到二十分钟。' },
    { speaker: 'Gavin Newsom', text: '那发短信得多慢。' },
    { speaker: 'Elon Musk', text: '我会等回复的。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '今天的晚霞颜色很特别。' },
    { speaker: 'Elon Musk', text: '光谱散射造成的。' },
    { speaker: 'Gavin Newsom', text: '你一定要这么破坏气氛吗？' },
    { speaker: 'Elon Musk', text: '……其实挺好看的。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你今天比平时早到了五分钟。' },
    { speaker: 'Elon Musk', text: '红绿灯正好全是绿灯。' },
    { speaker: 'Gavin Newsom', text: '五个路口都是？' },
    { speaker: 'Elon Musk', text: '有时候概率就是这么不可思议。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你把伞往我这边靠得太过了。' },
    { speaker: 'Elon Musk', text: '你的西装不能淋雨。' },
    { speaker: 'Gavin Newsom', text: '你的肩膀都湿了。' },
    { speaker: 'Elon Musk', text: '纯棉材质干得快。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你打算在这里待到几点？' },
    { speaker: 'Elon Musk', text: '你什么时候走？' },
    { speaker: 'Gavin Newsom', text: '我还没决定。' },
    { speaker: 'Elon Musk', text: '那我也不急。' }
  ],

  // [纯粹无厘头 (10%)]
  [
    { speaker: 'Gavin Newsom', text: '如果有一只鸭子走进这间屋子……' },
    { speaker: 'Elon Musk', text: '我会先测量它的空气动力学流线。' },
    { speaker: 'Gavin Newsom', text: '然后呢？' },
    { speaker: 'Elon Musk', text: '给它一块面包。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你相不相信世界上有外星人？' },
    { speaker: 'Elon Musk', text: '如果我说有呢？' },
    { speaker: 'Gavin Newsom', text: '那他们在哪？' },
    { speaker: 'Elon Musk', text: '可能正在假装喝咖啡。' },
    { speaker: 'Gavin Newsom', text: '……不要用这种眼神看着我。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你为什么把曲别针掰成这个形状？' },
    { speaker: 'Elon Musk', text: '它现在是一个微型发射架。' },
    { speaker: 'Gavin Newsom', text: '那火箭呢？' },
    { speaker: 'Elon Musk', text: '这支铅笔就是。' },
    { speaker: 'Gavin Newsom', text: '……请放过我的铅笔。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '如果我们现在跳一支华尔兹……' },
    { speaker: 'Elon Musk', text: '我的运动传感器可能会报警。' },
    { speaker: 'Gavin Newsom', text: '我只是打个比方。' },
    { speaker: 'Elon Musk', text: '我的反应很严谨。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你觉得云朵像什么？' },
    { speaker: 'Elon Musk', text: '高空凝聚的水汽团。' },
    { speaker: 'Gavin Newsom', text: '左边那朵像不像一只小狗？' },
    { speaker: 'Elon Musk', text: '像一只正在重返大气层的小狗。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '今天吃点什么？' },
    { speaker: 'Elon Musk', text: '热量、蛋白质和适量碳水化合物。' },
    { speaker: 'Gavin Newsom', text: '也就是三明治。' },
    { speaker: 'Elon Musk', text: '更准确的描述是双层切片面包夹馅。' }
  ],

  // Extra rich sets to ensure vast variety
  [
    { speaker: 'Gavin Newsom', text: '外面起雾了。' },
    { speaker: 'Elon Musk', text: '能见度不足两百米。' },
    { speaker: 'Gavin Newsom', text: '那就在这里多坐一会儿。' },
    { speaker: 'Elon Musk', text: '赞成。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你今天没带笔记本电脑？' },
    { speaker: 'Elon Musk', text: '偶尔需要让晶体管休息一下。' },
    { speaker: 'Gavin Newsom', text: '那你现在在干嘛？' },
    { speaker: 'Elon Musk', text: '观察人类行为。' },
    { speaker: 'Gavin Newsom', text: '……别盯着我观察。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你觉得事情会有转机吗？' },
    { speaker: 'Elon Musk', text: '概率论告诉我们，变量一直在变化。' },
    { speaker: 'Gavin Newsom', text: '也就是说会？' },
    { speaker: 'Elon Musk', text: '你可以这么理解。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你桌上那叠纸是什么？' },
    { speaker: 'Elon Musk', text: '一些还没实现的奇思妙想。' },
    { speaker: 'Gavin Newsom', text: '比如？' },
    { speaker: 'Elon Musk', text: '一个不会把咖啡洒出来的杯托。' },
    { speaker: 'Gavin Newsom', text: '这个倒是比火星更实用。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你是不是想吃那个松饼？' },
    { speaker: 'Elon Musk', text: '没有。' },
    { speaker: 'Gavin Newsom', text: '你看了它三次了。' },
    { speaker: 'Elon Musk', text: '我只是在评估它的糖分分布。' },
    { speaker: 'Gavin Newsom', text: '分你一半。' },
    { speaker: 'Elon Musk', text: '……谢谢。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '今天的阳光很暖和。' },
    { speaker: 'Elon Musk', text: '适合晒太阳。' },
    { speaker: 'Gavin Newsom', text: '你居然会用“晒太阳”这种词。' },
    { speaker: 'Elon Musk', text: '生物本能。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '走哪条路回去？' },
    { speaker: 'Elon Musk', text: '沿着海岸的那条。' },
    { speaker: 'Gavin Newsom', text: '那条路有点绕。' },
    { speaker: 'Elon Musk', text: '但路上可以看到海。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你手上的墨水没洗干净。' },
    { speaker: 'Elon Musk', text: '这是灵感的副产物。' },
    { speaker: 'Gavin Newsom', text: '纸巾给你。' },
    { speaker: 'Elon Musk', text: '谢了。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '明天还有会。' },
    { speaker: 'Elon Musk', text: '明天的事情明天再算。' },
    { speaker: 'Gavin Newsom', text: '这不像你的风格。' },
    { speaker: 'Elon Musk', text: '今天可以破例。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '窗台上有只鸽子。' },
    { speaker: 'Elon Musk', text: '它已经在那站了十二分钟了。' },
    { speaker: 'Gavin Newsom', text: '你在数时间？' },
    { speaker: 'Elon Musk', text: '它站得很稳。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '你今天的领带打得挺齐。' },
    { speaker: 'Elon Musk', text: '花了三十秒。' },
    { speaker: 'Gavin Newsom', text: '难得。' },
    { speaker: 'Elon Musk', text: '出门前照了下镜子。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '这道算术题你怎么看？' },
    { speaker: 'Elon Musk', text: '心算三秒钟出结果。' },
    { speaker: 'Gavin Newsom', text: '多少？' },
    { speaker: 'Elon Musk', text: '42。' },
    { speaker: 'Gavin Newsom', text: '……你又引用《银河系漫游指南》。' }
  ],
  [
    { speaker: 'Gavin Newsom', text: '今天就聊到这里吧。' },
    { speaker: 'Elon Musk', text: '嗯。' },
    { speaker: 'Gavin Newsom', text: '下次什么时候？' },
    { speaker: 'Elon Musk', text: '路过的时候。' }
  ]
];

// Special Easter Eggs
export const EASTER_EGG_AGREE: FortuneResult = {
  id: 'egg-agree',
  rank: '？？？',
  signName: '隐藏签·灵犀',
  poem: '他们今天意见一致。',
  action: '你还是抽到了',
  dialogue: [
    { speaker: 'Gavin Newsom', text: '我们居然同意了。' },
    { speaker: 'Elon Musk', text: '是的。' },
    { speaker: 'Gavin Newsom', text: '有点可怕。' },
    { speaker: 'Elon Musk', text: '我也这么觉得。' }
  ],
  isEasterEgg: true,
  buttonLabel: '请重新抽签'
};

export const EASTER_EGG_HEART: FortuneResult = {
  id: 'egg-heart',
  rank: 'Newsom 🫶 Musk',
  signName: '特别签·不言',
  poem: '……',
  action: '自明',
  dialogue: [
    { speaker: 'Gavin Newsom', text: '……' },
    { speaker: 'Elon Musk', text: '……' }
  ],
  isEasterEgg: true,
  buttonLabel: '再抽一签'
};

/**
 * Randomly generate a fortune result
 */
export function drawRandomFortune(): FortuneResult {
  // 1% chance for easter egg 1, 1% chance for easter egg 2
  const randRoll = Math.random() * 100;
  if (randRoll < 1.2) {
    return EASTER_EGG_AGREE;
  }
  if (randRoll < 2.4) {
    return EASTER_EGG_HEART;
  }

  // Weighted select rank
  const totalWeight = RANKS.reduce((acc, curr) => acc + curr.weight, 0);
  let randomWeight = Math.random() * totalWeight;
  let selectedRank = RANKS[0].rank;

  for (const item of RANKS) {
    if (randomWeight < item.weight) {
      selectedRank = item.rank;
      break;
    }
    randomWeight -= item.weight;
  }

  const poems = POEMS_BY_RANK[selectedRank] || POEMS_BY_RANK['小吉'];
  const poem = poems[Math.floor(Math.random() * poems.length)];
  const signName = SIGN_NAMES[Math.floor(Math.random() * SIGN_NAMES.length)];
  
  // Independent random action
  let action = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
  if (selectedRank === '大凶' && Math.random() > 0.5) {
    action = '暂时不要';
  } else if (selectedRank === '大吉' && Math.random() > 0.5) {
    action = '可以去做';
  } else if (selectedRank === '特别签') {
    action = '当然可以';
  } else if (selectedRank === '无解') {
    action = '自己决定';
  }

  // Independent random dialogue
  const dialogue = DIALOGUES[Math.floor(Math.random() * DIALOGUES.length)];

  return {
    id: `fortune-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    rank: selectedRank,
    signName,
    poem,
    action,
    dialogue,
    buttonLabel: '再抽一签'
  };
}
