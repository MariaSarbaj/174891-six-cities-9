import {createAction} from '@reduxjs/toolkit';
import { Offers } from '../types/offers';
import {Reviews} from '../types/review';

export const setCity = createAction<string>('main/setCity');

export const setOffers = createAction<Offers>('main/setOffers');

export const setReviews = createAction<Reviews>('main/setReviews');
