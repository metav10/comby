import { useRecoilValue } from 'recoil';
import { Student } from '../student/Student';
import { Teacher } from '../teacher/Teacher';
import * as S from './Home.style';
import { userStore } from '../../store/';

export const Home = () => {
  const user = useRecoilValue(userStore);
  if (!user) return <></>;

  const component = () => {
    switch (user.userType) {
      case 'STUDENT':
        return <Student user={user} />;
      case 'TEACHER':
        return <Teacher user={user} />;
      default:
        return <></>;
    }
  };

  return (
    <S.Home>
      <S.Logout to="/logout">Logout / התנתקות</S.Logout>
      {component()}
    </S.Home>
  );
};
