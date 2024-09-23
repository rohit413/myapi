import React from 'react';
import './Header.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';

function Header() {

    return (

        <header className="header">
            <div className="logo">
                <h1>GuruQ </h1>
            </div>

            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    {/* <li>
                        <Link to="/userdata">User </Link>
                    </li> */}
                    <li>
                        <Link to="/userproject">Userproject  </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header