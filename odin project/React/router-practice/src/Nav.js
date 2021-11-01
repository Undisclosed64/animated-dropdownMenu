import React from "react";
import './App.css';
import { Link } from "react-router-dom";



const Nav = () => {

    const navStyle = {
        color:'white'

    };
return(
    <nav>
        <h2>Logo</h2>
        <ul className="nav-links">
            <Link style={navStyle} to='/'>
        <li>Home</li>
        </Link>
        <Link style={navStyle} to='/about'>
                <li>About</li>
                </Link>
                <Link style={navStyle} to='/shop'>
                <li>Shop</li>
                </Link>
        </ul>
    </nav>
)
};
export default Nav;











