import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import MainPage from './containers/MainPage';
import history from './utils/history';
import { store } from './utils/store';
import { AppContentWrapper } from './components/CommonStyled';

const App = () => (
  <Provider store={store}>
    <AppContentWrapper>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </Router>
    </AppContentWrapper>
  </Provider>
);

export default App;
