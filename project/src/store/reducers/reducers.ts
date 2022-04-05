import { combineReducers } from 'redux';
import city from './city-reducer';
import offers from './offers-reducer';
import reviews from './reviews-reducer';
import authorizationStatus from './auth-status';
import user from './user-reducer';
import room from './room-reducer';
import offersNearby from './offers-nearby-reducer';
import {NameSpace} from '../../const';

const reducer = combineReducers({
  [NameSpace.auth]: authorizationStatus.reducer,
  [NameSpace.city]: city.reducer,
  [NameSpace.reviews]: reviews.reducer,
  [NameSpace.offers]: offers.reducer,
  [NameSpace.offersNearby]: offersNearby.reducer,
  [NameSpace.room]: room.reducer,
  [NameSpace.user]: user.reducer,
});

export default reducer;
