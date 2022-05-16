import { User } from '../../types';
import { STATUS } from './status';
import { StudentsFeelings } from './studentsFeelings/StudentsFeelings';
import * as S from './Teacher.style';

export const Teacher = ({ user }: { user: User }) => {
  const { firstName } = user;

  return (
    <>
      <S.Name>Hi, {firstName}</S.Name>
      <S.Feeling>
        This is how your class
        <br />
        are feeling today
      </S.Feeling>
      <StudentsFeelings status={STATUS} />
    </>
  );
};
