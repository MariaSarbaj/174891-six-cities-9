import store from '../store/store';

export type AppDispatch = typeof store.dispatch;

export type AuthDataType = {
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null,
}

export type ReviewFormDataType = { rating: number | null, review: string };

export type MapType = 'main' | 'room';
export type MarkType = 'placeCard' | 'room';
export type PlaceCardType = 'main' | 'room';

export type LocationsListType = PlaceCardType;

export type OffersSortingType = 'none' | 'byPriceUp' | 'byPriceDown' | 'byRatingDown';

export type AuthorizationStatusType = 'authorized' | 'unauthorized';

export type StateType = ReturnType<typeof store.getState>;
