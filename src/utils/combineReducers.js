import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import mainPageReducer from '../containers/MainPage/reducer';

export default function createReducer() {
  return combineReducers({
    globalReducer,
    mainPageReducer,
  });
}
