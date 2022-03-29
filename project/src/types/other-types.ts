import { Offers } from './offers';
import store from '../store';
import {Reviews} from './review';

export type AppDispatch = typeof store.dispatch;

export type AppState = {
  city: string,
  offers: Offers,
  reviews: Reviews
}

export type Comment = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: Omit<User, 'email' | 'token'>,
}
export type Comments = Comment[];
export type MapType = 'main' | 'room';
export type MarkType = 'placeCard' | 'room';
export type PlaceCardType = 'main' | 'room';

export type PlaceCardListType = PlaceCardType;

export type State = ReturnType<typeof store.getState>;

export type User = {
  avatarUrl: string,
  email: string,
  id: number,
  isPro: boolean,
  name: string,
  token: string,
}