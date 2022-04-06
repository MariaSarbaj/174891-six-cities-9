import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offer, Offers } from '../../types/offers';
import {NameSpace} from '../../const';

const offersReducer = createSlice({
  name: NameSpace.offers,
  initialState: [] as Offers,
  reducers: {
    setOffers: (state, action:PayloadAction<Offers>) => {
      state = action.payload;
      return state;
    },
    replaceOffer: (state, action:PayloadAction<Offer>) => {
      const newOffer = action.payload;
      const newState = state.map((offer) => offer.id === newOffer.id ? newOffer : offer);
      return newState;
    },
  },
});

export const { setOffers, replaceOffer } = offersReducer.actions;

export default offersReducer;
