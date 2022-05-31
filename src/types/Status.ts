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
  'purple' = 'סגול',
  'blue' = 'כחול',
  'brown' = 'חום',
  'white' = 'לבן',
  'orange' = 'כתום',
  'green' = 'ירוק',
  'pink' = 'ורוד',
  'yellow' = 'צהוב',
  'black' = 'שחור',
  'gold' = 'זהב',
  'silver' = 'כסף',
}
export type ColorsType = keyof typeof Colors;
export const LightColors: Array<ColorsType> = ['yellow', 'gold', 'white', 'silver', 'pink'];

export type StatusType = EmotionsType | ColorsType;
export type StatusNameType = 'EMOTIONS' | 'COLORS';

export type Status = {
  kidUserId: string;
  status: StatusType;
  date: string;
};

export const isEmotionType = (emotion: StatusType): emotion is EmotionsType => {
  return Object.keys(Emotions).includes(emotion);
};

export const isColorType = (color: StatusType): color is ColorsType => {
  return Object.keys(Colors).includes(color);
};
