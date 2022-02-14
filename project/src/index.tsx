import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const City = {
  OFFERS_NUMBER: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      offersNumber = {City.OFFERS_NUMBER}
    />
  </React.StrictMode>,
  document.getElementById('root'));
