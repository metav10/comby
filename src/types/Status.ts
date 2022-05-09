export enum Emotions {
  'sad',
  'happy',
}
export type EmotionsType = Record<Emotions, string>;

export type Status = {
  kidUserId: string;
  status: Emotions;
  date: string;
};
