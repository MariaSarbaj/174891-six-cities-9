import {Dispatch} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import {setOffers} from './reducers/offers-reducer';
import {APIRoute, AppRoute, DEFAULT_USER} from '../const';
import { AxiosInstance, AxiosResponse } from 'axios';
import {StateType, AuthDataType} from '../types/other-types';
import {setAuthStatus} from './reducers/auth-status';
import {setUser} from './reducers/user-reducer';
import {redirectToRoute} from './actions';
import {errorHandle} from '../services/error-handle';

export const fetchOffersAction = (nextDispatch: Dispatch, getState: () => StateType, api: AxiosInstance) => {
  toast.promise(api.get(APIRoute.Offers)
    .then((response: AxiosResponse) => {
      nextDispatch(setOffers(response.data));
    })
    .catch((error) => {
      errorHandle(error);
    }),
  {
    pending: 'Loading...',
  });
};

export const checkAuthAction = (nextDispatch: Dispatch, getState: () => StateType, api: AxiosInstance) => {
  toast.promise(api.get(APIRoute.Login)
    .then((response: AxiosResponse) => {
      nextDispatch(setAuthStatus('authorized'));
      nextDispatch(setUser(response.data));
    })
    .catch((error) => {
      nextDispatch(setAuthStatus('unauthorized'));
      nextDispatch(setUser(DEFAULT_USER));
      errorHandle(error);
    }),
  {
    pending: 'Loading...',
  });
};

export const authAction = (authData: AuthDataType) => (
  nextDispatch: Dispatch,
  getState: () => StateType,
  api: AxiosInstance,
) => {
  toast.promise(api.post(APIRoute.Login, authData)
    .then((response: AxiosResponse) => {
      nextDispatch(setAuthStatus('authorized'));
      nextDispatch(setUser(response.data));
      nextDispatch(redirectToRoute(AppRoute.Main));
    })
    .catch((error) => {
      nextDispatch(setAuthStatus('unauthorized'));
      nextDispatch(setUser(DEFAULT_USER));
      errorHandle(error);
    }),
  {
    pending: 'Loading...',
  });
};
