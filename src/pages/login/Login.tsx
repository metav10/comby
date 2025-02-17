import { FormEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import { statusNameTypeStore, userStore } from '../../store';
import { Input, Button } from '../../components';
import { KITOT, USERS } from '../../constant';
import * as S from './Login.style';
import { useNavigate } from 'react-router-dom';
import Logo from './logo.svg';
import Bg from './bg.svg';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [, setUser] = useRecoilState(userStore);
  const [, setStatusNameType] = useRecoilState(statusNameTypeStore);
  const navigate = useNavigate();

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser();
  };

  // const addUser = () => {
  //   const user = USERS.find((u) => u.username === username);
  //   if (!user) return;
  //   const kita = KITOT.find((kita) => kita.kidsUserIds.includes(user.id) || kita.managementUserIds.includes(user.id));
  //   if (!kita) return;

  //   setStatusNameType(kita.status);
  //   setUser(user);
  //   navigate('/');
  // };
  const getRealUserData = () => {
    const user = USERS.find((u) => u.username === username);
    if (!user) return;
    const kita = KITOT.find((kita) => kita.kidsUserIds.includes(user.id) || kita.managementUserIds.includes(user.id));
    if (!kita) return;

    setStatusNameType(kita.status);
    setUser(user);
    navigate('/');
  };

  const addUser = () => {
    const user = username;
    if (!user) return;
    if (user === 'teacher' || user === 'teacher1' || user === 'teacher2') {
      getRealUserData();
      return;
    }
    const randomInteger = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    const kita = KITOT[randomInteger(0, 1)];
    if (!kita) return;

    setStatusNameType(kita.status);
    setUser({
      firstName: '',
      id: '',
      lastName: '',
      userType: 'STUDENT',
      username,
    });
    navigate('/');
  };

  return (
    <S.Login>
      <S.Images>
        <S.Logo src={Logo} alt="commbe" />
        <S.Bg src={Bg} alt="bg" />
      </S.Images>
      <S.LoginForm onSubmit={handleForm}>
        <S.Inputs>
          <Input
            type="text"
            placeholder="Username / שם משתמש"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password / סיסמא"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled
          />
        </S.Inputs>
        <Button isWhite onClick={addUser}>
          Login / התחברות
        </Button>
      </S.LoginForm>
    </S.Login>
  );
};
