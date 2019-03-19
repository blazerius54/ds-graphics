import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { MainHeaderWrapper, AppTitle, HeaderNav, NavItem } from './styled';

const AppHeader = props => (
  <MainHeaderWrapper>
    <AppTitle>
      <h2>Fetch your data!</h2>
    </AppTitle>
    <HeaderNav>
      <Link to="/">
        <NavItem active={props.location.pathname === '/'}>
          <h3>Summery data</h3>
        </NavItem>
      </Link>
      <Link to="/card">
        <NavItem active={props.location.pathname === '/card'}>
          <h3>Card data</h3>
        </NavItem>
      </Link>
    </HeaderNav>
  </MainHeaderWrapper>
);

AppHeader.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(AppHeader);
