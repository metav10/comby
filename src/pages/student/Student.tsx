import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { selectedStatusStore, statusNameTypeStore } from '../../store';
import { User } from '../../types';
import { StatusList } from './statusList/StatusList';
import { Button } from '../../components';

import * as S from './Student.style';

export const Student = ({ user }: { user: User }) => {
  const { firstName, username } = user;
  const selectedStatus = useRecoilValue(selectedStatusStore);
  const statusNameType = useRecoilValue(statusNameTypeStore);

  const navigate = useNavigate();

  const handleClick = () => {
    if (!selectedStatus.length) return;
    navigate('thankYou');
  };

  return (
    <>
      {/* <S.Name>Hi, {firstName}</S.Name> */}
      <S.Name>Hi, {username}</S.Name>
      <S.Feeling>
        <S.FeelingEng>
          How are you
          <br />
          feeling today?
        </S.FeelingEng>
        <S.FeelingHe>איך אתם מרגישים היום?</S.FeelingHe>
      </S.Feeling>
      {statusNameType && <StatusList statusName={statusNameType} />}
      <S.SubmitButtonContainer>
        <Button onClick={handleClick} disabled={!selectedStatus.length}>
          Submit / שליחה
        </Button>
      </S.SubmitButtonContainer>
    </>
  );
};
