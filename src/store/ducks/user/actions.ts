import { action } from 'typesafe-actions';
import { UserTypes, User } from './types';


export const fetchUserRequest = () => action(UserTypes.FETCH_REQUEST);

export const fetchUserSuccess = (data: User) => action(UserTypes.FETCH_SUCCESS, { data });

export const fetchUserFailure = () => action(UserTypes.FETCH_FAILURE);
