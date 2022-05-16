import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { selectedStatusNameStore, selectedStatusStore } from '../../store';
import { EmotionsType, ColorsType } from '../../types';
import { Emotion } from '../../components';
import * as S from './ThankYou.style';

export const ThankYou = () => {
  const navigate = useNavigate();
  const selectedStatus = useRecoilValue(selectedStatusStore);
  const selectedStatusName = useRecoilValue(selectedStatusNameStore);

  if (!selectedStatus) {
    navigate('/');
    return <></>;
  }

  return (
    <S.ThankYou background={selectedStatusName === 'COLORS' ? (selectedStatus as ColorsType) : '#b0b0b0'}>
      <S.Emotion>
        {selectedStatusName === 'EMOTIONS' && (
          <Emotion noBg noBorder selected noCursor onClick={() => null} emotion={selectedStatus as EmotionsType} />
        )}
      </S.Emotion>
      <S.ForSharing>
        <S.ForSharingEng>Thank you for sharing</S.ForSharingEng>
        <S.ForSharingHe>תודה ששיתפתם</S.ForSharingHe>
      </S.ForSharing>
    </S.ThankYou>
  );
};
