import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getReviewBlockData = (state: State) => ({
  reviews: state[NameSpace.Reviews],
  authorizationStatus: state[NameSpace.User].authorizationStatus,
});
