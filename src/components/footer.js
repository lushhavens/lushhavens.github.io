import React from 'react'
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className='bg-[#1D4228] text-white py-8 px-6'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='mb-6 md:mb-0'>
          <div className='flex items-center space-x-2 mb-2'>
            <img
              src='/logo-light.svg'
              alt='LushHavens Logo'
              className='w-6 h-6'
            />
            <span className='text-lg font-semibold'>LushHavens</span>
          </div>
          <p className='text-sm text-green-100'>
            Discover and book cozy, greenery-filled venues for peaceful
            gatherings.
          </p>
        </div>
        <div className='flex space-x-10 mt-6 md:mt-0 text-sm'>
          <div>
            <h4 className='font-bold mb-2'>Quick Links</h4>
            <ul className='space-y-1'>
              <li>
                <Link to='/' className='hover:underline'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/properties' className='hover:underline'>
                  Browse Venues
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold mb-2'>Contact</h4>
            <ul className='space-y-1'>
              <li>
                <a
                  href='mailto:hello@lushhavens.com'
                  className='hover:underline'
                >
                  hello@lushhavens.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='text-center mt-6 text-sm text-green-200'>
        © {new Date().getFullYear()} LushHavens. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer