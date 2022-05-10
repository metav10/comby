import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { selectedStatusStore } from '../../store';
import { StatusList } from './statusList/StatusList';
import * as S from './Home.style';

export const Home = () => {
  const navigate = useNavigate();
  const selectedStatus = useRecoilValue(selectedStatusStore);

  const name = 'Dani';
  const status = 'EMOTIONS';

  const handleClick = () => {
    if (!selectedStatus) return;
    navigate('thankYou');
  };

  return (
    <S.Home>
      <S.Name>Hi, {name}</S.Name>
      <S.Feeling>
        <S.FeelingEng>
          How are you
          <br />
          feeling today?
        </S.FeelingEng>
        <S.FeelingHe>איך אתם מרגישים היום?</S.FeelingHe>
      </S.Feeling>
      <StatusList status={status} />
      <S.SubmitButton onClick={handleClick} disabled={!selectedStatus}>
        Submit / שליחה
      </S.SubmitButton>
    </S.Home>
  );
};
