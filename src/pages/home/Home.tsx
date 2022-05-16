import { User } from '../../types';
import { Student } from '../student/Student';
import { Teacher } from '../teacher/Teacher';
import * as S from './Home.style';

export const Home = () => {
  const user: User = {
    id: '12121',
    firstName: 'Dani',
    lastName: 'Gold',
    username: 'danigold',
    userType: 'STUDENT',
  };

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

  return <S.Home>{component()}</S.Home>;
};
