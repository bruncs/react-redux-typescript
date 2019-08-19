import { Reducer } from 'redux';
import { AuthState, AuthTypes } from './types';

const INITIAL_STATE: AuthState = {
  data: {
    id: NaN,
    name: '',
    token: '',
  },
  error: false,
  loading: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.LOGIN_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case AuthTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case AuthTypes.LOGOUT_REQUEST:
      return state;
    case AuthTypes.LOGOUT_SUCCESS:
      return INITIAL_STATE;
    case AuthTypes.LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
