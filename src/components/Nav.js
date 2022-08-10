import React from "react";
import {NavLink} from "react-router-dom";
import SearchBtn from "./SearchBtn";
import './Nav.css';

function Nav()
{
    return <div id="nav" className="navbar navbar-inverse">
        <div id="navChild" className="nav navbar-nav">
            <NavLink exact to="/" className="nav-logo"><img src="../../public/img/wings.png"></img>
            </NavLink>
            <NavLink exact to="/" className="navbar-location">Home
            </NavLink>
            <NavLink exact to="/Travels" className="navbar-location">Travles
            </NavLink>
            <NavLink exact to="/Signup" className="navbar-location">Signup
            </NavLink>
            <NavLink exact to="/Login" className="navbar-location">Login
            </NavLink>
            <SearchBtn/>
        </div>
        
    </div>
}
export default Nav;