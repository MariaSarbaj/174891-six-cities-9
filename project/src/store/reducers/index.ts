import { combineReducers } from 'redux';
import city from './city-reducer';
import offers from './offers-reducer';
import reviews from './reviews-reducer';

const reducer = combineReducers({
  city: city.reducer,
  offers: offers.reducer,
  reviews: reviews.reducer,
});

export default reducer;
