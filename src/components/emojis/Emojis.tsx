import { EmotionsType } from '../../types';
import amazingIcon from './icons/amazing.svg';
import angryIcon from './icons/angry.svg';
import annoyedIcon from './icons/annoyed.svg';
import confusedIcon from './icons/confused.svg';
import frustratedIcon from './icons/frustrated.svg';
import funnyIcon from './icons/funny.svg';
import happyIcon from './icons/happy.svg';
import loveIcon from './icons/love.svg';
import sadIcon from './icons/sad.svg';
import shockedIcon from './icons/shocked.svg';
import sickIcon from './icons/sick.svg';
import tiredIcon from './icons/tired.svg';

export const Emojis = ({ emotion }: { emotion: EmotionsType }) => {
  switch (emotion) {
    case 'amazing':
      return <img src={amazingIcon} alt={emotion} />;
    case 'angry':
      return <img src={angryIcon} alt={emotion} />;
    case 'annoyed':
      return <img src={annoyedIcon} alt={emotion} />;
    case 'confused':
      return <img src={confusedIcon} alt={emotion} />;
    case 'frustrated':
      return <img src={frustratedIcon} alt={emotion} />;
    case 'funny':
      return <img src={funnyIcon} alt={emotion} />;
    case 'happy':
      return <img src={happyIcon} alt={emotion} />;
    case 'love':
      return <img src={loveIcon} alt={emotion} />;
    case 'sad':
      return <img src={sadIcon} alt={emotion} />;
    case 'shocked':
      return <img src={shockedIcon} alt={emotion} />;
    case 'sick':
      return <img src={sickIcon} alt={emotion} />;
    case 'tired':
      return <img src={tiredIcon} alt={emotion} />;
    default:
      return <>none</>;
  }
};
