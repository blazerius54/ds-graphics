import { combineReducers } from 'redux';
import globalReducer from './globalReducer';

export default function createReducer() {
  return combineReducers({
    globalReducer,
  });
}
