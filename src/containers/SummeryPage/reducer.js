import { SUMMARY_SUCCESS } from './consts';

export const initialState = {
  summeryRowsTable: [],
  viewSettings: [],
  periodInfo: {
    firstDate: '',
    lastDate: '',
  },
};

function summeryPageReducer(state = initialState, action) {
  switch (action.type) {
    case SUMMARY_SUCCESS:
      return {
        ...state,
        summeryRowsTable: action.summeryData.rows,
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

export default summeryPageReducer;
