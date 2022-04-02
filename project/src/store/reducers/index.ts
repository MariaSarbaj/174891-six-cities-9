import { combineReducers } from 'redux';
import city from './city-reducer';
import offers from './offers-reducer';
import reviews from './reviews-reducer';
import authorizationStatus from './auth-status';

const reducer = combineReducers({
  authorizationStatus: authorizationStatus.reducer,
  city: city.reducer,
  offers: offers.reducer,
  reviews: reviews.reducer,
});

export default reducer;
