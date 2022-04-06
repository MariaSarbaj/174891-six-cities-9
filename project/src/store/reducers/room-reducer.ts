import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RoomStateType, RoomDataType} from '../../types/offers';
import {NameSpace} from '../../const';

const roomReducer = createSlice({
  name: NameSpace.room,
  initialState: null as RoomStateType,
  reducers: {
    setRoom: (state, action: PayloadAction<RoomStateType>) => {
      state = action.payload;
      return state;
    },
    setRoomData: (state, action: PayloadAction<RoomDataType>) => {
      state = action.payload.property;
      return state;
    },
  },
});

export const { setRoom, setRoomData } = roomReducer.actions;

export default roomReducer;