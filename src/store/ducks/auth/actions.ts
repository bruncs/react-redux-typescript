import { action } from 'typesafe-actions';
import { AuthTypes, Credentials } from './types';
import { User } from '../user/types';

export const loginRequest = (data: Credentials) => action(AuthTypes.LOGIN_REQUEST, data);

export const loginSuccess = (data: User) => action(AuthTypes.LOGIN_SUCCESS, { data });

export const loginFailure = () => action(AuthTypes.LOGIN_FAILURE);
