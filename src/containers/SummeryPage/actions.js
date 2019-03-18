import { SUMMARY_REQUEST, SUMMARY_SUCCESS, SUMMARY_ERROR } from './consts';
import { getSummuryData } from '../../network';

// Async actions

export const summeryRequest = () => ({
  type: SUMMARY_REQUEST,
});

export const summerySuccess = summeryData => ({
  type: SUMMARY_SUCCESS,
  summeryData,
});

export const summeryError = () => ({
  type: SUMMARY_ERROR,
});

// Redux-thunk

export function sendSummeryRequest() {
  return dispatch => {
    dispatch(summeryRequest());

    getSummuryData()
      .then(response => response.json())
      .then(response => {
        dispatch(summerySuccess(response));
      })
      .catch(err => summeryError(err));
  };
}
