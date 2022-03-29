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

// import { useAppSelector } from '../../hooks';

function App(): JSX.Element {
  // const { city, offers, reviews } = useAppSelector((state) => state);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          {/*<Route index element={<HomePage offers={offers} city={city}/>} />*/}
          <Route index element={<HomePage />} />
          <Route path={AppRoute.SignIn} element={<Login />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              {/*<Favorites offers={offers}/>*/}
              <Favorites />
            </PrivateRoute>
          }
          />
          {/*<Route path={AppRoute.Room} element={<Property offers={offers} reviews={reviews}/>} />*/}
          <Route path={AppRoute.Room} element={<Property />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
