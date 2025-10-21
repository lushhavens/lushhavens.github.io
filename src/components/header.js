import React from 'react'
import { Link } from 'gatsby';
import logo from '../assets/logo/logonobg.png';

const Header = () => {
  return (
    <header className='bg-[#f6f7f2] shadow-sm py-4 px-6 flex justify-between items-center'>
      <div className='flex items-center space-x-1'>
        <img src={logo} alt='LushHavens Logo' className='w-8 h-8 mb-[7px]' />
        <span className='text-xl font-semibold text-green-900'>LushHavens</span>
      </div>
      <nav className='hidden md:flex space-x-6 text-sm font-medium'>
        <Link to='/properties' className='hover:text-green-800'>
          Browse Venues
        </Link>
        <Link to='/how-it-works' className='hover:text-green-800'>
          How It Works
        </Link>
        <Link to='/about' className='hover:text-green-800'>
          About Us
        </Link>
        <Link to='/testimonials' className='hover:text-green-800'>
          Testimonials
        </Link>
      </nav>
      <Link
        to='/booking'
        className='ml-4 bg-[#A3C49A] hover:bg-green-400 text-green-900 font-semibold py-2 px-4 rounded-lg text-sm'
      >
        Start Booking
      </Link>
    </header>
  );
}

export default Header