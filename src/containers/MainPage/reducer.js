import { SUMMURY_REQUEST, SUMMURY_SUCCESS, SUMMURY_ERROR } from './consts';

export const initialState = {
  summeryData: {},
  viewSettings: {},
  periodInfo: {
    firstDate: '',
    lastDate: '',
  },
};

function mainPageReducer(state = initialState, action) {
  switch (action.type) {
    case SUMMURY_SUCCESS:
      return {
        ...state,
        summeryData: action.summeryData,
        viewSettings: action.summeryData.viewSettings.plots[0].legends,
        periodInfo: {
          firstDate: action.summeryData.periodInfo.firstDate,
          lastDate: action.summeryData.periodInfo.lastDate,
        },
      };
    default:
      return state;
  }
}

export default mainPageReducer;
