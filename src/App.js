import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import MainPage from './containers/MainPage';
import history from './utils/history';
import { store } from './utils/store';


const App = () => (
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </Router>
    </div>
  </Provider>
);

export default App;
