import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Layout from '../layout/layout';
import HomePage from '../home-page/home-page';
import Login from '../login/login';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import ErrorPage from '../404/404';
import { Provider } from 'react-redux';
import store from '../../store';

function App(): JSX.Element {

  return (
    <BrowserRouter>
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
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Provider store={store}>
                <Favorites />
              </Provider>
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Room} element={
            <Provider store={store}>
              <Property />
            </Provider>
          }
          />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
