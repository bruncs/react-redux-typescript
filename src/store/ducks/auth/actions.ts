import { action } from 'typesafe-actions';
import { AuthTypes, Credentials } from './types';
import { User } from '../user/types';

export const loginRequest = (credentials: Credentials) => action(
  AuthTypes.LOGIN_REQUEST,
  { credentials },
);

export const loginSuccess = (data: User) => action(AuthTypes.LOGIN_SUCCESS, { data });

export const loginFailure = () => action(AuthTypes.LOGIN_FAILURE);

export const logoutRequest = () => action(AuthTypes.LOGOUT_REQUEST);

export const logoutSuccess = () => action(AuthTypes.LOGOUT_SUCCESS);

export const logoutFailure = () => action(AuthTypes.LOGOUT_FAILURE);
