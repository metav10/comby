import { EmotionsType } from '../../types';

export const Emojis = ({ emotion }: { emotion: EmotionsType }) => {
  switch (emotion) {
    case 'happy':
      return <>happy</>;
    case 'sad':
      return <>sad</>;
    default:
      return <>none</>;
  }
};
