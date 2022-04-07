import { setOffers, replaceOffer } from './offers-process/offers-process';
import { successfulAuth, unSuccessfulAuth } from './user-process/user-process';
import { setRoom, setRoomData } from './room-process/room-process';
import {setReviews} from './reviews-process/reviews-process';
import { redirectToRoute } from './actions';
import { APIRoute, AppRoute } from '../const';
import { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { errorHandle } from '../services/error-handle';
import { saveToken, dropToken } from '../services/token';
import { DEFAULT_PROPERTY_DATA, HTTP_CODE } from '../const';
import {AuthDataType, ReviewFormDataType, PlaceCardType} from '../types/other-types';
import {replaceOfferNearby} from './offers-nearby-process/offers-nearby-process';
import {setFavorites, removeFavoriteOffer} from './favorites-process/favorites-process';
import {createAsyncThunk} from '@reduxjs/toolkit';
import request from 'axios';
import {AppDispatch, State} from '../types/state.js';
import {ErrorType} from '../types/error';

const toastLoadingOptions = {pending: 'Loading...'};

const isAuthError = (error: ErrorType) => request
  .isAxiosError(error) && error.response?.status === HTTP_CODE.UNAUTHORIZED;

const storeActionMapping = {
  'placeCard': replaceOffer,
  'placeNearby': replaceOfferNearby,
  'favorite': removeFavoriteOffer,
  'room': setRoom,
};

function getStoreAction(type: PlaceCardType) {
  return storeActionMapping[type];
}

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offers/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await toast.promise(
        api.get(APIRoute.Offers),
        toastLoadingOptions,
      );
      dispatch(setOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuthStatus',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await toast.promise(
        api.get(APIRoute.Login),
        toastLoadingOptions,
      );
      dispatch(successfulAuth(data));
    } catch (error) {
      errorHandle(error);
      dropToken();
      dispatch(unSuccessfulAuth());
    }
  },
);

export const authAction = createAsyncThunk<void, AuthDataType, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logIn',
  async (authData, {dispatch, extra: api}) => {
    try {
      const {data} = await toast.promise(
        api.post(APIRoute.Login, authData),
        toastLoadingOptions,
      );
      saveToken(data.token);
      dispatch(successfulAuth(data));
    } catch (error) {
      errorHandle(error);
      dispatch(unSuccessfulAuth());
    }
  },
);

export const fetchRoomDataAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'room/fetchRoomData',
  async (hotelId, {dispatch, extra: api}) => {
    try {
      const [{data: property}, {data: offersNearby}, {data: reviews}] = await toast.promise(Promise.all([
        api.get(`${APIRoute.Offers}/${hotelId}`),
        api.get(`${APIRoute.Offers}/${hotelId}/nearby`),
        api.get(`${APIRoute.Reviews}/${hotelId}`),
      ]), toastLoadingOptions);
      dispatch(setRoomData({property, offersNearby, reviews}));
    } catch (error) {
      errorHandle(error);
      dispatch(setRoomData(DEFAULT_PROPERTY_DATA));
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const finishAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offers/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await toast.promise(api.delete(APIRoute.Logout), toastLoadingOptions);
      dropToken();
      dispatch(unSuccessfulAuth());
      dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const sendReviewAction = createAsyncThunk<void,
  {
    hotelId: number,
    review: ReviewFormDataType,
    onClearReviewForm: () => void,
    onLockReviewForm: (value: boolean) => void,
      },
  {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
      'comments/sendComment',
      async (reviewData, {dispatch, extra: api}) => {
        const {hotelId, review, onClearReviewForm, onLockReviewForm} = reviewData;
        try {
          const {data} = await toast.promise(
            api.post(`${APIRoute.Reviews}/${hotelId}`, {rating: review.rating, review: review.review}),
            toastLoadingOptions,
          );
          dispatch(setReviews(data));
          onClearReviewForm();
        } catch (error) {
          if (isAuthError(error)) {
            dropToken();
            dispatch(unSuccessfulAuth());
          }
          onLockReviewForm(false);
          errorHandle(error);
        }
      },
      );

export const changeOfferStatusAction = createAsyncThunk<void,
  {
    hotelId: number,
    isFavorite: boolean,
    actionType: PlaceCardType,
  },
  {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'favorites-page/changeOfferFavoriteStatus',
    async (offerData, {dispatch, extra: api}) => {
      try {
        const {hotelId, isFavorite, actionType} = offerData;
        const status = isFavorite ? 0 : 1;
        const {data} = await toast.promise(
          api.post(`${APIRoute.Favorites}/${hotelId}/${status}`),
          toastLoadingOptions,
        );
        const storeAction = getStoreAction(actionType);
        dispatch(storeAction(data));
      } catch (error) {
        errorHandle(error);
        if (isAuthError(error)) {
          dropToken();
          dispatch(unSuccessfulAuth());
        }
      }
    },
  );

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'favorites-page/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await toast.promise(
        api.get(APIRoute.Favorites),
        toastLoadingOptions,
      );
      dispatch(setFavorites(data));
    } catch (error) {
      errorHandle(error);
      if (isAuthError(error)) {
        dropToken();
        dispatch(unSuccessfulAuth());
      }
    }
  },
);
