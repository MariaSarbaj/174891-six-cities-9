import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {setRoomData} from '../room-process/room-process';
import {Review, RoomDataType} from '../../types/offers';
import {NameSpace} from '../../const';

const reviewsProcess = createSlice({
  name: NameSpace.Reviews,
  initialState: [] as Review[],
  reducers: {
    setReviews: (state, action:PayloadAction<Review[]>) => {
      state = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setRoomData, (state, action: PayloadAction<RoomDataType>) => {
        state = action.payload.reviews;
        return state;
      });
  },
});

export const { setReviews } = reviewsProcess.actions;

export default reviewsProcess;
