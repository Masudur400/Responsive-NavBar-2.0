import React from 'react';
import './NavbarOne.css'
import { useState } from 'react';
 
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarOne = () => {
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <h2>MyWebsite</h2>
        </div>

        {/* Burger icon for mobile */}
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links - Left slide-in menu */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>

        {/* Overlay */}
        {click && <div className="overlay" onClick={closeMenu}></div>}
      </nav>
    </>
  );
};


export default NavbarOne;