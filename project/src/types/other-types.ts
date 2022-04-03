import store from '../store/store';

export type AppDispatch = typeof store.dispatch;

export type AuthDataType = {
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null,
}

export type Comment = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: Omit<UserType, 'email' | 'token'>,
}

export type Comments = Comment[];
export type MapType = 'main' | 'room';
export type MarkType = 'placeCard' | 'room';
export type PlaceCardType = 'main' | 'room';

export type PlaceCardListType = PlaceCardType;

export type UserType = {
  avatarUrl: string,
  email: string,
  id: number,
  isPro: boolean,
  name: string,
  token: string,
}

export type OffersSortingType = 'none' | 'byPriceUp' | 'byPriceDown' | 'byRatingDown';

export type AuthorizationStatusType = 'authorized' | 'unauthorized';

export type StateType = ReturnType<typeof store.getState>;
