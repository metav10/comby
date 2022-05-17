import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { statusNameTypeStore, selectedStatusStore, userStore } from '../../store';

export const Logout = () => {
  const navigate = useNavigate();
  const [, setUser] = useRecoilState(userStore);
  const [, setStatusNameType] = useRecoilState(statusNameTypeStore);
  const [, setSelectedStatus] = useRecoilState(selectedStatusStore);

  useEffect(() => {
    setUser(null);
    setStatusNameType(null);
    setSelectedStatus(null);
    navigate('/login');
  }, [navigate, setSelectedStatus, setStatusNameType, setUser]);

  return <>Login out...</>;
};
