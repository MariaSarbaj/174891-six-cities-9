import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers, setReviews } from './action';
import { AppState } from '../types/other-types';
import { offers}  from '../mocks/offers';
import {reviews} from '../mocks/reviews';

const initialState: AppState = {
  city: 'Paris',
  offers: offers,
  reviews: reviews,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    });
});

export default reducer;
