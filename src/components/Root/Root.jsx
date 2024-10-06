import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavbarOne from '../NavbarOne/NavbarOne';

const Root = () => {
    return (
        <div>
            <div className='flex flex-wrap gap-3 my-10'>
                <Link to='/navbarOne' className='px-3 py-1 bg-red-300'>Navbar One</Link>
                <Link to='/navbarTwo' className='px-3 py-1 bg-red-300'>Navbar Two</Link>
                <Link to='/navbarcustomize' className='px-3 py-1 bg-red-300'>Navbar Two Customize</Link>
                <Link to='/navbarThree' className='px-3 py-1 bg-red-300'>Navbar Three</Link>
                 
            </div>
        <div className='my-10'>
        <Outlet></Outlet>
        </div>
         
          
        </div>
    );
};

export default Root;