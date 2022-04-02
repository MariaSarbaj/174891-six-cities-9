import { OffersSortingType } from './types/other-types';

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum UrlMarker {
  Default = 'pin.svg',
  Current = 'pin-active.svg'
}

export const cityNames = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const IMG_URL = 'img/';

export const MIN_REVIEW_LENGTH = 50;

export const MAX_STARS_RATING = 5;

export const offersSortingVariants: OffersSortingType[] = ['none', 'byPriceUp', 'byPriceDown', 'byRatingDown'];

export enum Mapping {
  none= 'Popular',
  byPriceUp = 'Price: low to high',
  byPriceDown = 'Price: high to low',
  byRatingDown = 'Top rated first',
}

export enum APIRoute {
  Comments = '/comments',
  Favorites = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Offers = '/hotels',
}

export const TileLayerURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
