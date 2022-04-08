import {combineReducers} from 'redux';
import offersProcess from './offers-process/offers-process';
import room from './room-process/room-process';
import offersNearby from './offers-nearby-process/offers-nearby-process';
import reviewsProcess from './reviews-process/reviews-process';
import favoritesProcess from './favorites-process/favorites-process';
import userProcess from './user-process/user-process';
import {NameSpace} from '../const';

const reducer = combineReducers({
  [NameSpace.Reviews]: reviewsProcess.reducer,
  [NameSpace.Favorites]: favoritesProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.OffersNearby]: offersNearby.reducer,
  [NameSpace.Room]: room.reducer,
  [NameSpace.User]: userProcess.reducer,
});

export default reducer;
