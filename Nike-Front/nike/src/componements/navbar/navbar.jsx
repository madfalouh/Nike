import React from 'react';
import './navbar.css'; // Import the CSS file for styling
import nikeLogo from '../../assets/img/nikeLogo.png'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={nikeLogo} style={{marginLeft : "50px"}}  alt="Nike Logo" width={80} />
            </div>
            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">New and Features</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="icons">
                <a href="#"><i style={{marginRight :"35px"  }} className="fas fa-shopping-cart"></i></a>
                <a href="#"><i className="fas fa-heart"></i></a>
            </div>
        </nav>
    );
};

export default Navbar;