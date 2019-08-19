/**
 * Action Types
 */
export enum UserTypes {
  FETCH_REQUEST = '@user/FETCH_REQUEST',
  FETCH_SUCCESS = '@user/FETCH_SUCCESS',
  FETCH_FAILURE = '@user/FETCH_FAILURE'
}

/**
 * Data Types
 */
export interface User {
  id: number;
  name: string;
  token: string;
  avatar?: string;
}

/**
 * State Types
 */
export interface UserState {
  readonly data: User;
  readonly loading: boolean;
  readonly error: boolean;
}
