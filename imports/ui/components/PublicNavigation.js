import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const PublicNavigation = () => (
  <div>
  <Nav>
      <NavLink to="/signup" activeClassName="active">Signup</NavLink>
      <NavLink to="/login" activeClassName="active">Login</NavLink> 
  </Nav>
  </div>
);

export default PublicNavigation;
