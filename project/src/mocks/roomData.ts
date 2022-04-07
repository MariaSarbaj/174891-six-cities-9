import makeFakeReviews from './reviews';
import makeFakeOffers from './offers';
import {RoomDataType} from '../types/offers';

const makeFakeRoomData = () :RoomDataType => ({
  reviews: makeFakeReviews(),
  offersNearby: makeFakeOffers(),
  property: makeFakeOffers(1)[0],
});

export default makeFakeRoomData;
