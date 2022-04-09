import commentsProcess, {setComments} from './comments-process';
import {setRoomData} from '../room-process/room-process';
import makeFakeComments from '../../mocks/comments';
import makeFakeRoomData from '../../mocks/roomData';
import {Comment} from '../../types/offers';

const reviews = makeFakeComments();
const roomData = makeFakeRoomData();

describe('Reducer: commentsProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(commentsProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'})).toEqual([]);
  });

  it('should update reviews by set reviews', () => {
    const state = [] as Comment[];
    expect(commentsProcess.reducer(state, setComments(reviews)))
      .toEqual(reviews);
  });

  it('should update reviews by set room data', () => {
    const state = [] as Comment[];
    expect(commentsProcess.reducer(state, setRoomData(roomData)))
      .toEqual(roomData.comments);
  });
});
