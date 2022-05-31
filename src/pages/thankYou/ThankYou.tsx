import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { statusNameTypeStore, selectedStatusStore } from '../../store';
import { EmotionsType, ColorsType, LightColors } from '../../types';
import { Color, Emotion } from '../../components';
import * as S from './ThankYou.style';

export const ThankYou = () => {
  const navigate = useNavigate();
  const selectedStatus = useRecoilValue(selectedStatusStore);
  const statusNameType = useRecoilValue(statusNameTypeStore);

  if (!selectedStatus) {
    navigate('/');
    return <></>;
  }

  const isColors = statusNameType === 'COLORS';
  const isEmotions = statusNameType === 'EMOTIONS';

  const statusEmotions = selectedStatus as Array<EmotionsType>;
  const statusColors = selectedStatus as Array<ColorsType>;

  return (
    <S.ThankYou
      background={isColors ? `linear-gradient(
        to right,
        ${statusColors[0]} 50%,
        ${statusColors[1]} 50%
        );` : '#ffa77a'}
      isLightTextColor={isColors && LightColors.includes(statusColors[0])}
    >
      <S.Feeling isColors={isColors}>
        <S.FeelingEng>You are feeling</S.FeelingEng>
        <S.FeelingHe>אתם מרגישים</S.FeelingHe>
      </S.Feeling>
      <S.Emotion>
        {isEmotions
          ? statusEmotions.map((emotion, eIndex) => (
              <Emotion key={eIndex} noBg noBorder selected noCursor onClick={() => null} emotion={emotion} />
            ))
          : isColors &&
            statusColors.map((color, cIndex) => (
              <Color key={cIndex} noBg noBorder selected noCursor onClick={() => null} color={color} />
            ))}
      </S.Emotion>
      <S.ForSharing isColors={isColors}>
        <S.ForSharingEng>Thank you for sharing</S.ForSharingEng>
        <S.ForSharingHe>תודה ששיתפתם</S.ForSharingHe>
      </S.ForSharing>
    </S.ThankYou>
  );
};
