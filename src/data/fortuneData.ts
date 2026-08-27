import { DialogueLine, FortuneResult } from '../types';
import { BASE_DIALOGUES } from './baseDialogues';
import { POOL1_DIALOGUES } from './dialoguePool1';
import { POOL2_DIALOGUES } from './dialoguePool2';
import { POOL3_DIALOGUES } from './dialoguePool3';
import { POOL4_DIALOGUES } from './dialoguePool4';
import { POOL5_DIALOGUES } from './dialoguePool5';

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
  '第二十九签·晨雾', '第三十签·留白', '第三十一签·迟暮', '第三十二签·浅语',
  '第三十三签·秋水', '第三十四签·松风', '第三十五签·拂晓', '第三十六签·安澜',
  '第三十七签·澄澈', '第三十八签·明远', '第三十九签·听雨', '第四十签·停舟',
  '第四十一签·归雁', '第四十二签·微澜', '第四十三签·望岳', '第四十四签·栖迟',
  '第四十五签·清浅', '第四十六签·行云', '第四十七签·照影', '第四十八签·远山',
  '第四十九签·见素', '第五十签·抱朴', '第五十一签·守拙', '第五十二签·含光',
  '第五十三签·和光', '第五十四签·同尘', '第五十五签·无隅', '第五十六签·希声',
  '第五十七签·大白', '第五十八签·若谷', '第五十九签·玄同', '第六十签·自宾',
  '第六十一签·致虚', '第六十二签·守静', '第六十三签·万物', '第六十四签·复归',
  '第六十五签·知止', '第六十六签·不殆', '第六十七签·慎终', '第六十八签·追远',
  '第六十九签·海阔', '第七十签·天高', '第七十一签·风清', '第七十二签·月朗',
  '第七十三签·星灿', '第七十四签·日温', '第七十五签·云淡', '第七十六签·水湄',
  '第七十七签·林泉', '第七十八签·幽篁', '第七十九签·松壑', '第八十签·竹坞',
  '第八十一签·石径', '第八十二签·野渡', '第八十三签·斜阳', '第八十四签·薄暮',
  '第八十五签·微霜', '第八十六签·残雪', '第八十七签·初晴', '第八十八签·新绿',
  '第八十九签·落红', '第九十签·飞絮', '第九十一签·烟渚', '第九十二签·沙洲',
  '第九十三签·汀兰', '第九十四签·岸芷', '第九十五签·芳草', '第九十六签·碧云',
  '第九十七签·晴岚', '第九十八签·翠嶂', '第九十九签·浮槎', '第一百签·圆满',
  '第一百零一签·开元', '第一百零二签·浩渺', '第一百零三签·长风', '第一百零四签·破浪',
  '第一百零五签·星海', '第一百零六签·无垠', '第一百零七签·共鸣', '第一百零八签·永恒'
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
    '微风拂面，所遇皆为良善。',
    '长风破浪，何须多虑。',
    '山河明朗，所求皆如愿。',
    '日暖风轻，抬步即是坦途。',
    '吉星高照，自有默契相迎。',
    '云开见日，清光万里。',
    '春水初生，顺流而下皆胜境。',
    '行至水穷，坐看云起也是坦然。',
    '恰好赶上，一切都不早不晚。'
  ],
  中吉: [
    '恰好同路，不必多想。',
    '日头温软，做一半也是做。',
    '风波已过，静待水面平息。',
    '平淡无奇，正是最好的消息。',
    '行至半途，自会有柳暗花明。',
    '顺其自然，便能省去许多力气。',
    '有些事不必立刻弄明白，往前走就好。',
    '心宽一寸，路宽一丈。',
    '静待花开，自有其时。',
    '清茶一杯，足以慰风尘。',
    '虽非全盛，亦是安闲好时节。',
    '松柏常青，不急于一时绽放。',
    '随遇而安，处处皆有清景。',
    '水滴石穿，何须一日之功。',
    '行囊渐轻，步履自如。',
    '远近相宜，恰是自在分寸。'
  ],
  小吉: [
    '事情没有你想象中那么难。',
    '只要迈出一步，剩下的路会自己出现。',
    '虽有微凉，添件衣裳便无妨。',
    '偶有小阻，绕过去也就是了。',
    '今天适合做一件细微的小事。',
    '答案藏在一杯温水里。',
    '稍微试一下，并不会失去什么。',
    '静水流深，慢慢来就好。',
    '窗外有麻雀落脚，片刻即飞。',
    '案头微尘，随手拂去即可。',
    '小步慢走，也能走得很远。',
    '偶尔走神，也是大脑的呼吸。',
    '偶得一闲，胜过百日忙碌。',
    '微光引路，照亮脚下三寸。',
    '把手头的事做好，今天就很圆满。',
    '心平气和，自见天地真意。'
  ],
  末吉: [
    '慢一点，也没有关系。',
    '今天不适合争辩，适合发呆。',
    '脚步放缓，风景才能看清。',
    '不要急于给出承诺。',
    '把手头的事做完，剩下的交给明天。',
    '不争先，便少去几分疲惫。',
    '有些等待是必须经过的缝隙。',
    '放低一点期待，反而有意外收获。',
    '水流遇到礁石，绕行也是一种智慧。',
    '今天宜收敛锋芒，养精蓄锐。',
    '暂时没有结论，就是最好的结论。',
    '留白三分，方显天地广阔。',
    '且听风吟，莫问前程。',
    '放下一桩心事，换一夜好眠。',
    '慢行者常在，何必竞逐晨昏。',
    '收工回家，吃一顿热饭。'
  ],
  小凶: [
    '今日容易多想。',
    '情绪如潮水，等它退去再做决定。',
    '屋檐滴水，出门记得带伞。',
    '言多易失，不如多听少说。',
    '心中微乱，先把房间收拾干净。',
    '不要在疲惫的时候下定决心。',
    '有些话听过就算，不必深究。',
    '今日适宜早点休息。',
    '风大容易吹乱思绪，且在室内稍坐。',
    '不宜硬撑，累了就靠一靠。',
    '小心脚下，避开湿滑水坑。',
    '勿轻信片面之词，留待日后验证。',
    '今日易烦躁，宜深呼吸三次。',
    '把手机调至静音，远离纷扰。',
    '小磕小碰在所难免，不必懊恼。',
    '且把锋芒藏起，静待风平浪静。'
  ],
  中凶: [
    '云有微雨，事情可能反复。',
    '雾气渐浓，暂时看不清前路。',
    '不宜强求，强扭的瓜总是不甜。',
    '今日容易遇到固执的人。',
    '若是走不通，不妨退回原点。',
    '暂时收拢羽翼，不要硬碰硬。',
    '事情卡住时，放一放也是智慧。',
    '不要在这个时候做大变动。',
    '前路有阻，且停舟靠岸稍歇。',
    '急躁无益，反而容易忙中出错。',
    '防人之心不可无，谨言慎行为上。',
    '暂退一步，海阔天空。',
    '暗礁潜伏，切勿盲目加速。',
    '今日勿做重大投资或决定。',
    '耐心是唯一的解药。',
    '避开锋芒，方能长久。'
  ],
  大凶: [
    '今日诸事不宜。',
    '闭门静坐，胜过四处奔波。',
    '风雨未歇，且在亭下避一避。',
    '把手机放下，今天先放空自己。',
    '不争、不辩、不急、不躁。',
    '难得一天的彻底停顿，也是一种运气。',
    '今天只负责吃饭和睡觉就好。',
    '暴风雨来临前，飞鸟皆已归巢。',
    '万物有冬眠之时，今日且当冬眠。',
    '推掉所有不必要的应酬。',
    '守住本心，静待晦气散去。',
    '今天所有的阻碍，都是命运在为你挡灾。',
    '安心睡一觉，醒来又是全新的一天。'
  ],
  '特别签': [
    '命运今天心情不错。',
    '宇宙偶尔也会网开一面。',
    '今天的所有巧合，都是特意安排。',
    '今天你拥有随时离开和开始的特权。',
    '无需答案，存在即是理由。',
    '万物皆在静默中为你让路。',
    '星辰闪烁，只为这一刻的默契。',
    '心有灵犀，无需多言。'
  ],
  '？？？': [
    '系统偶尔也会失灵。',
    '这个问题超出了算力范围。',
    '今天没有答案，只有问题。',
    '未知本身就是一种答案。',
    '信号丢失，请仰望星空。'
  ],
  无解: [
    '随它去吧。',
    '无解也是一种解。',
    '有些问题本就不需要被解答。',
    '宇宙自有其深意。',
    '笑一笑，然后继续往前走。'
  ],
  'Newsom 🫶 Musk': [
    '……',
    '无需语言。',
    '默契已在不言中。',
    '此中有真意，欲辨已忘言。'
  ]
};

export const ACTIONS = [
  '可以去做',
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
  '你还是抽到了',
  '早点睡觉',
  '深呼吸三次',
  '去窗边看看远方',
  '吃顿好的',
  '把房间收拾干净',
  '给花浇点水',
  '听一首慢歌',
  '喝杯清茶',
  '换双舒服的鞋',
  '放空十分钟',
  '不必解释',
  '顺其自然',
  '保持安静',
  '脱稿发挥',
  '带上外套',
  '不要回头看',
  '信步由缰',
  '且听风吟',
  '早点收工',
  '推迟半小时',
  '慢慢吃',
  '少看手机',
  '出门散步',
  '不与人争',
  '自明',
  '无妨',
  '放宽心',
  '一切随意',
  '随遇而安',
  '知足常乐',
  '且慢行',
  '静待时机',
  '养精蓄锐',
  '适可而止',
  '勿急勿躁',
  '坦然受之'
];

/**
 * All Dialogues combined into one master array.
 * Retains all 65 original dialogues plus 525+ new dialogues (590+ total dialogues).
 * Anyone can add more dialogues to this array directly.
 */
export const DIALOGUES: DialogueLine[][] = [
  ...BASE_DIALOGUES,
  ...POOL1_DIALOGUES,
  ...POOL2_DIALOGUES,
  ...POOL3_DIALOGUES,
  ...POOL4_DIALOGUES,
  ...POOL5_DIALOGUES
];

export const EASTER_EGG_AGREE: FortuneResult = {
  id: 'egg-agree',
  rank: '特别签',
  signName: '特别签·罕见',
  poem: '今天所有巧合，都是特意安排。',
  action: '当然可以',
  dialogue: [
    { speaker: 'Gavin Newsom', text: '我觉得今天会很顺利。' },
    { speaker: 'Elon Musk', text: '我也觉得。' },
    { speaker: 'Gavin Newsom', text: '你居然没有反驳。' },
    { speaker: 'Elon Musk', text: '今天不反驳。' }
  ],
  isEasterEgg: true,
  buttonLabel: '请重新抽签'
};

export const EASTER_EGG_HEART: FortuneResult = {
  id: 'egg-heart',
  rank: 'Newsom 🩵 Musk',
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

// Sliding window history to prevent repetitive draws in short succession
const RECENT_DIALOGUE_HISTORY_SIZE = 40;
const RECENT_POEM_HISTORY_SIZE = 15;
const recentDialogueIndexes: number[] = [];
const recentPoems: string[] = [];

/**
 * Randomly generate a fortune result from the complete pool
 * Includes short-term anti-repetition mechanism
 */
export function drawRandomFortune(): FortuneResult {
  // 1% chance for easter egg 1, 1% chance for easter egg 2
  const randRoll = Math.random() * 100;
  if (randRoll < 1.0) {
    return EASTER_EGG_AGREE;
  }
  if (randRoll < 2.0) {
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
  
  // Pick poem avoiding very recent ones if possible
  let poem = poems[Math.floor(Math.random() * poems.length)];
  let poemAttempts = 0;
  while (recentPoems.includes(poem) && poemAttempts < 10 && poems.length > 1) {
    poem = poems[Math.floor(Math.random() * poems.length)];
    poemAttempts++;
  }
  recentPoems.push(poem);
  if (recentPoems.length > RECENT_POEM_HISTORY_SIZE) {
    recentPoems.shift();
  }

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

  // Pick dialogue avoiding recent indices if possible
  const totalDialogues = DIALOGUES.length;
  let chosenIdx = Math.floor(Math.random() * totalDialogues);
  let dialogueAttempts = 0;
  
  while (recentDialogueIndexes.includes(chosenIdx) && dialogueAttempts < 15 && totalDialogues > RECENT_DIALOGUE_HISTORY_SIZE) {
    chosenIdx = Math.floor(Math.random() * totalDialogues);
    dialogueAttempts++;
  }

  recentDialogueIndexes.push(chosenIdx);
  if (recentDialogueIndexes.length > Math.min(RECENT_DIALOGUE_HISTORY_SIZE, totalDialogues - 1)) {
    recentDialogueIndexes.shift();
  }

  const dialogue = DIALOGUES[chosenIdx] || DIALOGUES[0];

  return {
    id: `fortune-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
    rank: selectedRank,
    signName,
    poem,
    action,
    dialogue,
    buttonLabel: '再抽一签'
  };
}
