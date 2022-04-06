import store from '../store/store';

export type AppDispatch = typeof store.dispatch;

export type AuthDataType = {
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null,
}

export type ReviewFormDataType = { rating: number | null, review: string };

export type MapType = 'main' | 'room';
export type MarkType = 'placeCard' | 'room';
export type PlaceCardType = 'favorite' | 'placeCard' | 'placeNearby'| 'room';

export type OffersSortingType = 'none' | 'byPriceUp' | 'byPriceDown' | 'byRatingDown';

export type AuthorizationStatusType = 'authorized' | 'unauthorized' | 'unknown';

export type StateType = ReturnType<typeof store.getState>;
