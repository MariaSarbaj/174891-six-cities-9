import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import Layout from '../layout/layout';
import HomePage from '../home-page/home-page';
import Login from '../login/login';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import ErrorPage from '../404/404';
import { Provider } from 'react-redux';
import store from '../../store/store';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';

import {fetchOffersAction, checkAuthAction} from '../../store/api-actions';

store.dispatch(fetchOffersAction);
store.dispatch(checkAuthAction);

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
          <Route path={AppRoute.SignIn} element={<Login />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute>
              <Provider store={store}>
                <Favorites />
              </Provider>
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.RoomId} element={
            <Provider store={store}>
              <Property />
            </Provider>
          }
          />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </HistoryRouter>
  );
}

export default App;
