import { useRoutes } from 'react-router-dom';
import { Home, Login } from './pages';

export const Router = () => {
  const routes = useRoutes([
    { path: '/login', element: <Login /> },
    { path: '/', element: <Home /> },
  ]);
  return routes;
};
