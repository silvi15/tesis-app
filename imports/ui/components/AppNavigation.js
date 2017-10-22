import React, { PropTypes } from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';
import Menu from './Menu';

const renderNavigation = authenticated =>
(authenticated ? <AuthenticatedNavigation /> : <PublicNavigation />);

const renderNavMenu = authenticated =>
(authenticated ? <Menu />: '');

const AppNavigation = ({ authenticated }) => (
  <Nav>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">App</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      { renderNavigation(authenticated) }
    </Navbar.Collapse>
  </Navbar>
  {renderNavMenu(authenticated)}
  </Nav>
);

AppNavigation.propTypes = {
  authenticated: PropTypes.bool,
};

export default AppNavigation;
