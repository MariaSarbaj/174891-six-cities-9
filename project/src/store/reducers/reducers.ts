import { combineReducers } from 'redux';
import city from './city-reducer';
import offers from './offers-reducer';
import reviews from './reviews-reducer';
import authorizationStatus from './auth-status';
import user from './user-reducer';
import room from './room-reducer';
import offersNearby from './offers-nearby-reducer';

const reducer = combineReducers({
  authorizationStatus: authorizationStatus.reducer,
  city: city.reducer,
  offers: offers.reducer,
  reviews: reviews.reducer,
  user: user.reducer,
  offersNearby: offersNearby.reducer,
  room: room.reducer,
});

export default reducer;
