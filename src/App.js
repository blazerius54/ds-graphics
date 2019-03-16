import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';
import MainPage from './containers/MainPage';
import history from './utils/history';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  </Router>
);

export default App;
