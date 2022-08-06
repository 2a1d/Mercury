import React from "react";
import {NavLink} from "react-router-dom";

function Header()
{
    return <div id="header" className="navbar navbar-inverse">
        <div className="nav navbar-nav">
            <NavLink exact to="/" className="navbar-brand">Hompage
            </NavLink>
            <NavLink exact to="/travels" className="navbar-brand">Travels
            </NavLink>
            <NavLink exact to="/signup" className="navbar-brand">Sign up
            </NavLink>
            <NavLink exact to="/login" className="navbar-brand">Login
            </NavLink>
            {/* how to add search button without it taking you somewhere */}
        </div>
        
    </div>
}
export default Header;