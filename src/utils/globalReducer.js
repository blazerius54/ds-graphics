import {
  SUMMARY_REQUEST,
  SUMMARY_SUCCESS,
  SUMMARY_ERROR,
} from '../containers/SummeryPage/consts';
import {
  CARD_REQUEST,
  CARD_SUCCESS,
  CARD_ERROR,
} from '../containers/CardReport/consts';

export const initialState = {
  loading: false,
};

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case SUMMARY_REQUEST:
    case CARD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SUMMARY_SUCCESS:
    case CARD_SUCCESS:
    case SUMMARY_ERROR:
    case CARD_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default globalReducer;
