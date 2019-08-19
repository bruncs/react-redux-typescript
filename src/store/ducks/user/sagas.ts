import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import {
 fetchUserSuccess, fetchUserFailure,
} from './actions';

export function* fetch() {
  try {
    const response = yield call(api.get, 'user');

    yield put(fetchUserSuccess(response.data));
  } catch (err) {
    yield put(fetchUserFailure());
  }
}
