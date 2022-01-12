import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-indigo-700 p-4 shadow-lg '>
            <nav className='flex mt-1 ml-20 mr-20'>
                <Link to='/' className='mx-auto container text-white font-bold text-xl'>LOGO</Link>
                <Link to='/' className='ml-10 text-white font-semibold'>HOME</Link>
                <Link to='/food' className='ml-10 text-white font-semibold'>FOOD</Link>
                <Link to='/about' className='ml-10 text-white font-semibold'>ABOUT</Link>
                <Link to='/contact' className='ml-10 text-white font-semibold'>CONTACT</Link>
            </nav>
        </div>
    );
};

export default Header;