import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import SummeryPage from './containers/SummeryPage';
import history from './utils/history';
import { store } from './utils/store';
import { AppContentWrapper } from './components/CommonStyled';
import AppHeader from './components/AppHeader';
import CardReport from './containers/CardReport';
const App = () => (
  <Provider store={store}>
    <AppContentWrapper>
      <Router history={history}>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={SummeryPage} />
          <Route exact path="/card" component={CardReport} />
        </Switch>
      </Router>
    </AppContentWrapper>
  </Provider>
);

export default App;
