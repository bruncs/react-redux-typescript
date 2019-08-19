import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from './auth/types';
import { UserTypes } from './user/types';
import { login, logout } from './auth/sagas';
import { fetch } from './user/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.LOGOUT_REQUEST, logout),
    takeLatest(UserTypes.FETCH_REQUEST, fetch),
  ]);
}
