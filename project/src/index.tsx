import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
// import {offers} from './mocks/offers';
// import {reviews} from './mocks/reviews';
import store from './store';

// const City = {
//   OFFERS_NUMBER: 312,
// };

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

    {/*<App*/}
    {/*  offersNumber = {City.OFFERS_NUMBER}*/}
    {/*  offers = {offers}*/}
    {/*  reviews = {reviews}*/}
    {/*  selectedOffer={null}*/}
    {/*/>*/}
  </React.StrictMode>,
  document.getElementById('root'));
