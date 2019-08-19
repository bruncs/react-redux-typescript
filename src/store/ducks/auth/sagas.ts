import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import api from '../../../services/api';
import {
 loginSuccess, loginFailure, logoutSuccess, logoutFailure,
} from './actions';

export function* login() {
  try {
    const response = yield call(api.get, 'auth');

    localStorage.setItem('token', response.data.token);
    yield put(loginSuccess(response.data));
  } catch (err) {
    yield put(loginFailure());
  }
}

export function* logout() {
  try {
    localStorage.clear();
    yield put(push('/'));
    yield put(logoutSuccess());
  } catch (err) {
    yield put(logoutFailure());
  }
}
