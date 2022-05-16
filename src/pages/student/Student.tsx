import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { selectedStatusStore } from '../../store';
import { User } from '../../types';
import { StatusList } from './statusList/StatusList';
import { Button } from '../../components';

import * as S from './Student.style';

export const Student = ({ user }: { user: User }) => {
  const { firstName } = user;
  const selectedStatus = useRecoilValue(selectedStatusStore);
  const navigate = useNavigate();

  const status = 'EMOTIONS';

  const handleClick = () => {
    if (!selectedStatus) return;
    navigate('thankYou');
  };

  return (
    <>
      <S.Name>Hi, {firstName}</S.Name>
      <S.Feeling>
        <S.FeelingEng>
          How are you
          <br />
          feeling today?
        </S.FeelingEng>
        <S.FeelingHe>איך אתם מרגישים היום?</S.FeelingHe>
      </S.Feeling>
      <StatusList statusName={status} />
      <S.SubmitButtonContainer>
        <Button onClick={handleClick} disabled={!selectedStatus}>
          Submit / שליחה
        </Button>
      </S.SubmitButtonContainer>
    </>
  );
};
