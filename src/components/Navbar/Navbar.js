// src/components/Navbar/Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling (to be created)

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="logo">Your Logo</h1>
                <ul className="nav-links">
                    <li className="nav-link"><a href="#about">About</a></li>
                    <li className="nav-link"><a href="#experience">Experience</a></li>
                    <li className="nav-link"><a href="#portfolio">Portfolio</a></li>
                    <li className="nav-link"><a href="#services">Services</a></li>
                    <li className="nav-link"><a href="#blog">Blog</a></li>
                    <li className="nav-link"><a href="#hobbies">Hobbies</a></li>
                    <li className="nav-link"><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
