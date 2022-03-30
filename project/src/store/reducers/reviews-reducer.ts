import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Reviews } from '../../types/review';
import {reviews} from '../../mocks/reviews';

const reviewsReducer = createSlice({
  name: 'reviews',
  initialState: reviews,
  reducers: {
    setReviews: (state, action:PayloadAction<Reviews>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setReviews } = reviewsReducer.actions;

export default reviewsReducer;
