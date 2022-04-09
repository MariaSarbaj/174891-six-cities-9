import store from '../store/store';
import {Location, Offer, Point} from './offers';

export type AppDispatch = typeof store.dispatch;

export type AuthDataType = {
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null,
}

export type CommentFormDataType = { rating: number | null, comment: string, checkboxesValue: Array<boolean> };

export type MapType = 'main' | 'room';

export type PlaceCardType = 'favorite' | 'placeCard' | 'placeNearby'| 'room';

export type OffersSortingType = 'none' | 'byPriceUp' | 'byPriceDown' | 'byRatingDown';

export type AuthorizationStatusType = 'authorized' | 'unauthorized' | 'unknown';

export type MapProps = {
  city: Location;
  points: Point[];
  selectedPoint: number | null;
  type: MapType,
};

export type PlaceCardOffer = Pick<Offer, 'isPremium' | 'isFavorite' | 'price' | 'rating' | 'title' | 'type' | 'previewImage' | 'id'>

export type PlaceCardProps = {
  offer: PlaceCardOffer,
  placeCardType: PlaceCardType,
  onActiveOffer?: (x: number | null) => void,
}

export type LocationsListProps = {
  offers: Offer[],
  onActiveOffer?: (x: number | null) => void,
  placeCardType: PlaceCardType,
}
