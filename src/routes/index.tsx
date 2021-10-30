import { Switch, Route } from 'react-router-dom';
import NotFound from '../views/NotFound/presentational';
import Routes from './routes';
import Layout from '../components/Layout'
import { Suspense } from 'react';
import { PrivateRoute } from '../components/PrivateRoute';
import Dashboard from '../views/Dashboard/presentational';

export default function Router() {
  // const { roleRoutes = 'public' } = useSelector(({ AppReducer = {} }) => AppReducer);
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <Layout>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          {Routes.public.map(({ key, ...routeProps }) => (
            <Route {...routeProps} key={key} />
        ))}
          <Route component={NotFound} />
        </Switch>
      </Layout>
      </Suspense>
  );
}
