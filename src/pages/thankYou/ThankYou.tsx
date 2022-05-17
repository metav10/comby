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

  const statusEmotion = selectedStatus as EmotionsType;
  const stautsColors = selectedStatus as ColorsType;

  return (
    <S.ThankYou
      background={isColors ? stautsColors : '#b0b0b0'}
      isLightTextColor={isColors && LightColors.includes(stautsColors)}
    >
      <S.Feeling>
        <S.FeelingEng>You are feeling</S.FeelingEng>
        <S.FeelingHe>אתם מרגישים</S.FeelingHe>
      </S.Feeling>
      <S.Emotion>
        {isEmotions ? (
          <Emotion noBg noBorder selected noCursor onClick={() => null} emotion={statusEmotion} />
        ) : (
          isColors && <Color noBg noBorder selected noCursor onClick={() => null} color={stautsColors} />
        )}
      </S.Emotion>
      <S.ForSharing>
        <S.ForSharingEng>Thank you for sharing</S.ForSharingEng>
        <S.ForSharingHe>תודה ששיתפתם</S.ForSharingHe>
      </S.ForSharing>
    </S.ThankYou>
  );
};
