import { lazy } from 'react';
import Dashboard from '../views/Dashboard/presentational';

const Login = lazy(() => import('../views/Login/presentational'));


const routes =  {
  public: [
    {
      path: '/login',
      key: 'login',
      component: Login,
      exact: true,
      title: 'login',
    },
    {
      path: '/',
      key: 'dashboard',
      component: Dashboard,
      exact: true,
      title: 'Dashboard',
    },
  ],
};

export default routes;