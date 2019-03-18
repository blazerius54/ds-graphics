import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import summeryPageReducer from '../containers/SummeryPage/reducer';
import cardPageReducer from '../containers/CardReport/reducer';

export default function createReducer() {
  return combineReducers({
    globalReducer,
    summeryPageReducer,
    cardPageReducer,
  });
}
