import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import auth from './auth';
import user from './user';

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  auth,
  user,
});

export default rootReducer;
