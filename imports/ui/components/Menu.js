import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Menu = () => (
    <Nav>
        <div className="btn-group btn-group-justified" role="group" aria-label="Basic example">
            <NavLink to="/projects" type="button" className="btn btn-secondary">
                <span className="glyphicon glyphicon-briefcase"></span>
             </NavLink>  

            <NavLink to="/inbox" type="button" className="btn btn-secondary">
                <span className="glyphicon glyphicon-envelope"></span>
            </NavLink>

            <NavLink to="/findPeople" type="button" className="btn btn-secondary">
                <span className="glyphicon glyphicon-search"></span>
            </NavLink>
            
            <NavLink to="/home" type="button" className="btn btn-secondary">
                <span className="glyphicon glyphicon-home"></span>
            </NavLink>

            <NavLink to="/notification" type="button" className="btn btn-secondary">
                <span className="glyphicon glyphicon-bell"></span>
            </NavLink>
            
            <NavLink to="/profile" type="button" className="btn btn-secondary" >
            <span className="glyphicon glyphicon-user"></span>
            </NavLink>
        </div>
        </Nav>

);        
export default Menu;