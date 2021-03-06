import makeFakeComments from './comments';
import makeFakeOffers from './offers';
import {RoomDataType} from '../types/offers';

const makeFakeRoomData = () :RoomDataType => ({
  comments: makeFakeComments(),
  offersNearby: makeFakeOffers(),
  property: makeFakeOffers(1)[0],
});

export default makeFakeRoomData;
