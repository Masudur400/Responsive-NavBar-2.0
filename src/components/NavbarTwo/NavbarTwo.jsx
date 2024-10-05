import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarTwo = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white fixed w-full z-10">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-2xl font-bold">
            <h2>MyWebsite</h2>
          </div>

          {/* Burger Icon */}
          <div className="lg:hidden" onClick={handleClick}>
            {click ? (
              <FaTimes className="text-3xl cursor-pointer" />
            ) : (
              <FaBars className="text-3xl cursor-pointer" />
            )}
          </div>

          {/* Menu Items */}
          <ul
            className={`fixed top-0 left-0 w-[250px] h-full bg-gray-900 p-10 lg:p-0 space-y-6  lg:space-y-0 transform transition-transform duration-1000 ease-in-out ${
              click ? 'translate-x-0' : '-translate-x-full'
            } lg:static lg:flex justify-center items-center lg:space-x-8 lg:bg-transparent`}
          >
            <li></li>
            <li>
              <a href="#home" onClick={closeMenu} className="hover:text-pink-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu} className="hover:text-pink-500">
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu} className="hover:text-pink-500">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu} className="hover:text-pink-500">
                Contact
              </a>
            </li>
          </ul>

          {/* Overlay */}
          {click && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-0"
              onClick={closeMenu}
            ></div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavbarTwo;
