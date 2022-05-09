import { EmotionsType, Emotions } from '../../types';
import { Emojis } from '../';
import * as S from './Emotion.style';

export const Emotion = ({
  emotion,
  onClick,
  selected,
}: {
  emotion: EmotionsType;
  onClick: () => void;
  selected?: boolean;
}) => (
  <S.Emotion selected={selected} onClick={onClick}>
    <Emojis emotion={emotion} />
    <S.Labels>
      <S.EngLabel>{emotion}</S.EngLabel>
      <span>{Emotions[emotion]}</span>
    </S.Labels>
  </S.Emotion>
);
