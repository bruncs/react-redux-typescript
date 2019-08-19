import { User } from '../user/types';

/**
 * Action Types
 */
export enum AuthTypes {
  LOGIN_REQUEST = '@auth/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@auth/LOGIN_SUCCESS',
  LOGIN_FAILURE = '@auth/LOGIN_FAILURE',
  LOGOUT_REQUEST = '@auth/LOGOUT_REQUEST',
  LOGOUT_SUCCESS = '@auth/LOGOUT_SUCCESS',
  LOGOUT_FAILURE = '@auth/LOGOUT_FAILURE',
}

/**
 * Data Types
 */
export interface Credentials {
  username: string;
  password: string;
}

/**
 * State Types
 */
export interface AuthState {
  readonly data: User;
  readonly loading: boolean;
  readonly error: boolean;
}
