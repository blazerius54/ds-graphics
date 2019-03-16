import { SUMMURY_REQUEST, SUMMURY_SUCCESS, SUMMURY_ERROR } from './consts';
import { getSummuryData } from '../../network';

// Async actions

export const summeryRequest = () => ({
  type: SUMMURY_REQUEST,
});

export const summerySuccess = () => ({
  type: SUMMURY_SUCCESS,
});

export const summeryError = () => ({
  type: SUMMURY_ERROR,
});

// Redux-thunk

export function sendSofDetailsRequest(url) {
  return dispatch => {
    dispatch(summeryRequest());

    getSummuryData(url)
      .then(response => response.json())
      .then(response => {
        dispatch(summerySuccess(response));
      })
      .catch(err => summeryError(err));
  };
}
