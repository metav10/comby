import { useRoutes } from 'react-router-dom';
import { Home, Login, ThankYou } from './pages';

export const Router = () => {  
  const routes = useRoutes([
    { path: '/login', element: <Login /> },
    { path: '/thankYou', element: <ThankYou /> },
    { path: '/', element: <Home /> },
  ]);
  return routes;
};
