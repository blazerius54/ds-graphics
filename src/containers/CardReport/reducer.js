import { CARD_SUCCESS } from './consts';

export const initialState = {
  cardData: [],
  cardTime: '',
};

function cardPageReducer(state = initialState, action) {
  switch (action.type) {
    case CARD_SUCCESS:
      return {
        ...state,
        cardData: action.cardData.fieldsInfo,
        cardTime: action.cardData.periodInfo.currentDate,
      };
    default:
      return state;
  }
}

export default cardPageReducer;
