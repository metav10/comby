import { FormEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userStore } from '../../store';
import { Input, Button } from '../../components';
import { USERS } from '../../constant';
import * as S from './Login.style';
import { useNavigate } from 'react-router-dom';
import Logo from './logo.svg';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [, setUser] = useRecoilState(userStore);
  const navigate = useNavigate();

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser();
  };

  const addUser = () => {
    const user = USERS.find((u) => u.username === username);
    if (!user) return;

    setUser(user);
    navigate('/');
  };

  return (
    <S.Login>
      <S.Logo src={Logo} alt="commbe" />
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
          />
        </S.Inputs>
        <Button isWhite onClick={addUser}>
          Login / התחברות
        </Button>
      </S.LoginForm>
    </S.Login>
  );
};
