import {
  SUMMURY_REQUEST,
  SUMMURY_SUCCESS,
  SUMMURY_ERROR,
} from '../containers/MainPage/consts';

export const initialState = {
  loading: false,
};

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case SUMMURY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SUMMURY_SUCCESS:
    case SUMMURY_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default globalReducer;
