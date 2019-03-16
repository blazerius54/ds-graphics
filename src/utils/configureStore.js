import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import createReducer from './combineReducers';

export default function configureStore() {
  const store = createStore(
    createReducer(),
    composeWithDevTools(
      applyMiddleware(thunkMiddleware),
    ),
  );

  if (module.hot) {
    module.hot.accept('./combineReducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
