/**
 * Action Types
 */
export enum AuthTypes {
  LOGIN_REQUEST = '@auth/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@auth/LOGIN_SUCCESS',
  LOGIN_FAILURE = '@auth/LOGIN_FAILURE'
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
  readonly data: Credentials;
  readonly loading: boolean;
  readonly error: boolean;
}
