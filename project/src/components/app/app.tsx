import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import Layout from '../layout/layout';
import HomePage from '../../pages/home-page/home-page';
import LoginPage from '../../pages/login-page/login-page';
import PrivateRoute from '../private-route/private-route';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import PropertyPage from '../../pages/property-page/property-page';
import ErrorPage from '../../pages/404/404';
import store from '../../store/store';
import {fetchOffersAction, checkAuthAction} from '../../store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path={AppRoute.City} element={<HomePage />}/>
        <Route path={AppRoute.SignIn} element={<LoginPage/>}/>
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute>
            <FavoritesPage />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.NotFound} element={<ErrorPage />} />
        <Route path={AppRoute.RoomId} element={<PropertyPage />}/>
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
