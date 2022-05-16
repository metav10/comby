import { useEffect } from 'react';
import {} from 'react-router-dom';
import { useRoutes, useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Home, Login, ThankYou, Logout } from './pages';
import { userStore } from './store';

export const Router = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useRecoilValue(userStore);

  useEffect(() => {
    if (!user && location.pathname !== '/login') {
      navigate('/login');
    }
  }, [location.pathname, navigate, user]);

  return useRoutes([
    { path: '/login', element: <Login /> },
    { path: '/logout', element: <Logout /> },
    { path: '/thankYou', element: <ThankYou /> },
    { path: '/', element: <Home /> },
  ]);
};
