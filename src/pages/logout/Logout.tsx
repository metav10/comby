import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userStore } from '../../store';

export const Logout = () => {
  const navigate = useNavigate();
  const [, setUser] = useRecoilState(userStore);

  useEffect(() => {
    setUser(null);
    navigate('/login');
  }, [navigate, setUser]);

  return <>Login out...</>;
};
