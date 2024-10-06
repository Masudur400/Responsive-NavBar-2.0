import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { LiaTimesSolid } from 'react-icons/lia';
import { MdOutlineMenu } from 'react-icons/md';

const NavbarTwoCustomize = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-gray-800 text-white fixed w-full z-10">
        <div className="container mx-auto flex items-center justify-between p-2 lg:p-4">
          <div className="flex gap-5 lg:gap-10 justify-center items-center">
            {/* Burger Icon */}
            <div onClick={handleClick}>
              {click ? (
                <LiaTimesSolid className="text-xl lg:text-2xl cursor-pointer" />
              ) : (
                <MdOutlineMenu className="text-2xl lg:text-3xl cursor-pointer" />
              )}
            </div>
            <div className="lg:text-2xl font-bold">
              <h2>MyWebsite</h2>
            </div>
          </div>

          {/* Menu Items */}
          <div
            className={`fixed top-0 left-0 w-[250px] h-full bg-gray-900 transition-transform duration-500 ease-in-out z-50 ${
              click ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            {/* Fixed Header in Burger Menu */}
            <div className="sticky top-0 bg-gray-900 p-4 border-b border-gray-700">
              <div className="text-2xl font-bold flex justify-between items-center">
                <h2>MyWebsite</h2>
                <a onClick={closeMenu} className="hover:text-pink-500 cursor-pointer">
                  X
                </a>
              </div>
            </div>

            {/* Scrollable Content with Hidden Scrollbar */}
            <ul
              className="overflow-y-scroll p-4 space-y-6"
              style={{
                maxHeight: 'calc(100vh - 64px)',
                scrollbarWidth: 'thin', /* For Firefox */
                msOverflowStyle: 'none'  /* For Internet Explorer and Edge */
              }}
            >
              {/* Hide Scrollbar for WebKit Browsers */}
              <style jsx>{`
                ul::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

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
              {/* Simulated Scrollable Items */}
              {Array.from({ length: 20 }, (_, i) => (
                <li key={i}>
                  <a href={`#item${i}`} onClick={closeMenu} className="hover:text-pink-500">
                    Item {i + 1}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Overlay */}
          {click && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeMenu}
            ></div>
          )}
        </div>

        {/* Right Section */}
        <div className="flex gap-5 lg:gap-10 justify-center items-center mr-4">
          <div>
            <img src="" alt="" className="w-8 lg:w-12 h-8 lg:h-12 border rounded-full" />
          </div>
          <div>
            <button className="bg-red-500 px-3 py-1 rounded-md btn-sm text-sm">LogOut</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarTwoCustomize;
