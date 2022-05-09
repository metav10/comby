export enum Emotions {
  'sad' = 'עצוב',
  'happy' = 'שמח',
}
export type EmotionsType = keyof typeof Emotions;
export enum Colors {
  'red' = 'אדום',
  'green' = 'ירוק',
  'yellow' = 'צהוב',
}
export type ColorsType = keyof typeof Colors;
export type StatusType = 'EMOTIONS' | 'COLORS';

export type Status = {
  kidUserId: string;
  status: EmotionsType | ColorsType;
  date: string;
};
