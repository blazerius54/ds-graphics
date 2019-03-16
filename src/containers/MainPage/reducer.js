import { SUMMURY_REQUEST, SUMMURY_SUCCESS, SUMMURY_ERROR } from './consts';

export const initialState = {
  main: 'page',
};

function mainPageReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default mainPageReducer;
