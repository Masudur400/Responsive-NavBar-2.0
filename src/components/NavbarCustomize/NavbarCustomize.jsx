import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarTwoCustomize = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-gray-800 text-white fixed w-full z-10">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className='flex gap-10'> 
          {/* Burger Icon */}
          <div className="" onClick={handleClick}>
            {click ? (
              <FaTimes className="text-3xl cursor-pointer" />
            ) : (
              <FaBars className="text-3xl cursor-pointer" />
            )}
          </div>
          <div className="text-2xl font-bold">
            <h2>MyWebsite</h2>
          </div>
          </div>

          {/* Menu Items */}
          <ul
            className={`fixed top-0 left-0 w-[250px] h-full bg-gray-900 p-10 space-y-6 transform transition-transform duration-1000 ease-in-out ${
              click ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <li className="text-2xl font-bold flex justify-between items-center">
            <div >
            <h2>MyWebsite</h2>
          </div>
              <a onClick={closeMenu} className="hover:text-pink-500 border-2 px-2">
                X
              </a>
            </li>
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
         <div className='flex gap-5 justify-center items-center'>
            <div>
            <img src="" alt="" className='w-12 h-12 border rounded-full' />
            </div>
             <div>
                <button className='bg-red-500 px-3 py-1 rounded-md'>LogOut</button>
             </div>
         </div>
      </nav>
    </>
  );
};

export default NavbarTwoCustomize;
