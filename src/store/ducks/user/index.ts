import { Reducer } from 'redux';
import { UserState, UserTypes } from './types';

const INITIAL_STATE: UserState = {
  data: {
    id: NaN,
    name: '',
    token: '',
  },
  error: false,
  loading: false,
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.FETCH_REQUEST:
      return { ...state, loading: true, data: action.payload };
    case UserTypes.FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case UserTypes.FETCH_FAILURE:
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
