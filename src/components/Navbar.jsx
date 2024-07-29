// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                <i className="fa fa-fw fa-home"></i> 
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-links">
                            What is New
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/apply" className="nav-links">
                            Financing Options
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-links">
                        <i class='fas fa-sign-in-alt'></i>
                           Login   <i class='fas fa-caret-down'></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

