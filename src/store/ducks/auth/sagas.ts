import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loginSuccess, loginFailure } from './actions';

export function* login() {
  try {
    const response = yield call(api.get, 'auth');

    yield put(loginSuccess(response.data));
  } catch (err) {
    yield put(loginFailure());
  }
}
