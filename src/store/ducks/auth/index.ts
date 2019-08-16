import { Reducer } from 'redux';
import { AuthState, AuthTypes } from './types';

const INITIAL_STATE: AuthState = {
  data: {
    username: '',
    password: '',
  },
  error: false,
  loading: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST:
      return { ...state, loading: true, data: action.payload };
    case AuthTypes.LOGIN_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case AuthTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: {},
      };
    default:
      return state;
  }
};

export default reducer;
