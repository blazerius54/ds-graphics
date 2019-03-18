import { CARD_REQUEST, CARD_SUCCESS, CARD_ERROR } from './consts';
import { getCardData } from '../../network';

// Async actions

export const cardRequest = () => ({
  type: CARD_REQUEST,
});

export const cardSuccess = cardData => ({
  type: CARD_SUCCESS,
  cardData,
});

export const cardError = () => ({
  type: CARD_ERROR,
});

// Redux-thunk

export function sendCardRequest() {
  return dispatch => {
    dispatch(cardRequest());

    getCardData()
      .then(response => response.json())
      .then(response => {
        dispatch(cardSuccess(response));
      })
      .catch(err => cardError(err));
  };
}
