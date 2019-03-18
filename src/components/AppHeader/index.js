import React from 'react';
import { Link } from 'react-router-dom';
import { MainHeaderWrapper, AppTitle, HeaderNav } from './styled';

const AppHeader = () => (
  <MainHeaderWrapper>
    <AppTitle>
      <h2>Fetch your data!</h2>
    </AppTitle>
    <HeaderNav>
      <Link to='/'>
        <h3>Summery data</h3>
      </Link>
      <Link to='/card'>
        <h3>Card info</h3>
      </Link>
    </HeaderNav>
  </MainHeaderWrapper>
);

export default AppHeader;
