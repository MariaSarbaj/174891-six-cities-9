import reviewsProcess, {setReviews} from './reviews-process';
import {setRoomData} from '../room-process/room-process';
import makeFakeReviews from '../../mocks/reviews';
import makeFakeRoomData from '../../mocks/roomData';
import {Review} from '../../types/offers';

const reviews = makeFakeReviews();
const roomData = makeFakeRoomData();

describe('Reducer: reviewsProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(reviewsProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'})).toEqual([]);
  });

  it('should update reviews by set reviews', () => {
    const state = [] as Review[];
    expect(reviewsProcess.reducer(state, setReviews(reviews)))
      .toEqual(reviews);
  });

  it('should update reviews by set room data', () => {
    const state = [] as Review[];
    expect(reviewsProcess.reducer(state, setRoomData(roomData)))
      .toEqual(roomData.reviews);
  });
});
