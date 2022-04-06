import { OffersSortingType } from './types/other-types';

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/',
  NotFound = '/notfound',
  RoomId = '/offer/:id'
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

export const DEFAULT_USER = {
  avatarUrl: '',
  email: '',
  id: 0,
  isPro: false,
  name: '',
  token: '',
};

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export const DEFAULT_PROPERTY_DATA = {
  reviews: [],
  offersNearby: [],
  property: null,
};

export enum NameSpace {
  auth = 'AUTH',
  city = 'CITY',
  reviews = 'REVIEWS',
  offersNearby = 'OFFERS_NEARBY',
  offers = 'OFFERS',
  room = 'ROOM',
  user = 'USER',
  favorites = 'FAVORITES',
}

export const REVIEW = {
  MaxCount: 10,
  MinLength: 50,
  MaxLength: 300,
} as const;

export const DEFAULT_LOCATION = {
  Latitude: 0,
  Longitude: 0,
  Zoom: 0,
} as const;


