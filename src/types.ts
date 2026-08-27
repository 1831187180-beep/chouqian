export type FortuneRankType =
  | '大吉'
  | '中吉'
  | '小吉'
  | '末吉'
  | '小凶'
  | '中凶'
  | '大凶'
  | '？？？'
  | '特别签'
  | '无解'
  | 'Newsom 🩵💛 Musk';

export interface DialogueLine {
  speaker: 'Gavin Newsom' | 'Elon Musk';
  text: string;
}

export interface FortuneResult {
  id: string;
  rank: string;
  signName: string;
  poem: string;
  action: string;
  dialogue: DialogueLine[];
  isEasterEgg?: boolean;
  buttonLabel?: string;
}
