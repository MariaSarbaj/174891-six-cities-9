import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import Layout from '../layout/layout';
import HomePage from '../../pages/home-page/home-page';
import LoginPage from '../../pages/login-page/login-page';
import PrivateRoute from '../private-route/private-route';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import PropertyPage from '../../pages/property-page/property-page';
import ErrorPage from '../../pages/404/404';
import { Provider } from 'react-redux';
import store from '../../store/store';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import {fetchOffersAction, checkAuthAction} from '../../store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={
            <Provider store={store}>
              <HomePage />
            </Provider>
          }
          />
          <Route path={AppRoute.City} element={
            <Provider store={store}>
              <HomePage />
            </Provider>
          }
          />
          <Route path={AppRoute.SignIn} element={<LoginPage />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute>
              <Provider store={store}>
                <FavoritesPage />
              </Provider>
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.RoomId} element={
            <Provider store={store}>
              <PropertyPage />
            </Provider>
          }
          />
          <Route path={AppRoute.NotFound} element={<ErrorPage />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </HistoryRouter>
  );
}

export default App;
