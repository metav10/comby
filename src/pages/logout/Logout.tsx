import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { selectedStatusNameStore, selectedStatusStore, userStore } from '../../store';

export const Logout = () => {
  const navigate = useNavigate();
  const [, setUser] = useRecoilState(userStore);
  const [, setStatusName] = useRecoilState(selectedStatusNameStore);
  const [, setSelectedStatus] = useRecoilState(selectedStatusStore);

  useEffect(() => {
    setUser(null);
    setStatusName(null);
    setSelectedStatus(null);
    navigate('/login');
  }, [navigate, setSelectedStatus, setStatusName, setUser]);

  return <>Login out...</>;
};
