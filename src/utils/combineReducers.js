import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import mainPageReducer from '../containers/SummeryPage/reducer';

export default function createReducer() {
  return combineReducers({
    globalReducer,
    mainPageReducer,
  });
}
