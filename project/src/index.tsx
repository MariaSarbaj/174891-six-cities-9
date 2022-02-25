import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

const City = {
  OFFERS_NUMBER: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      offersNumber = {City.OFFERS_NUMBER}
      offers = {offers}
      reviews = {reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
