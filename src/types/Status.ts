export enum Emotions {
  'happy' = 'שמח',
  'funny' = 'מצחיק',
  'confused' = 'מבולבל',
  'love' = 'אוהב',
  'angry' = 'כועס',
  'sad' = 'עצוב',
  'frustrated' = 'מתוסכל',
  'tired' = 'עייף',
  'annoyed' = 'מוטרד',
  'shocked' = 'מופתע',
  'sick' = 'חולה',
  'amazing' = 'מדהים',
}
export type EmotionsType = keyof typeof Emotions;
export enum Colors {
  'red' = 'אדום',
  'green' = 'ירוק',
  'yellow' = 'צהוב',
}
export type ColorsType = keyof typeof Colors;
export type StatusType = EmotionsType | ColorsType;

export type StatusNameType = 'EMOTIONS' | 'COLORS';

export type Status = {
  kidUserId: string;
  status: StatusType;
  date: string;
};
