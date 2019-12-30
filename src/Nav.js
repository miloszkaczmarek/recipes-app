import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Nav(){

    const navStyle = {
        color:'black'
    }

    return(
        <nav>
            <Link to="/">
                <h3>Logo</h3>
            </Link>
            <ul className="nav-links">
                <Link style={navStyle} to="/about">
                    <li>About</li>
                </Link>
                <Link style={navStyle} to="/recipes">
                    <li>Recipes</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav