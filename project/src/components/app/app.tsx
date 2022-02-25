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

import {Offers, Offer} from '../../types/offer';
import {Reviews, Review} from '../../types/review';

type AppScreenProps = {
  offersNumber: number,
  offers: Offers,
  reviews: Reviews,
}

function App({offersNumber, offers, reviews}: AppScreenProps): JSX.Element {
  const [offer] = offers;
  const [review] = reviews;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout offersNumber = {offersNumber} />}>
          <Route index element={<HomePage offersNumber = {offersNumber} offers={offers}/>} />
          <Route path={AppRoute.SignIn} element={<Login />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers={offers}/>
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Room} element={<Property offer={offer as Offer} review={review as Review}/>} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
