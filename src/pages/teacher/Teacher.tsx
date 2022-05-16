import { User } from '../../types';
import { StudentsFeelings } from './studentsFeelings/StudentsFeelings';
import * as S from './Teacher.style';
import { STATUS, KITOT, USERS } from '../../constant';

export const Teacher = ({ user }: { user: User }) => {
  const { firstName, id } = user;

  const kita = KITOT.find((kita) => kita.managementUserIds.includes(id));
  let students: Array<User> = [];

  USERS.forEach((u) => {
    if (kita?.kidsUserIds.includes(u.id)) {
      students.push(u);
    }
  });

  return (
    <>
      <S.Name>Hi, {firstName}</S.Name>
      <S.Feeling>This is how your class are feeling today</S.Feeling>
      {students && <StudentsFeelings status={STATUS} students={students} />}
    </>
  );
};
