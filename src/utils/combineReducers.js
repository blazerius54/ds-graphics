import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import mainPage from '../containers/MainPage/reducer';

export default function createReducer() {
  return combineReducers({
    globalReducer,
    mainPage,
  });
}
