import React from 'react';
import bgImage from '../../assets/images/publicContain.webp'; // Ensure this path is correct
import bgImage1 from '../../assets/images/3.png'; // Ensure this path is correct

const HeroBlock = () => {
  return (
    <section
      className='h-screen relative bg-cover bg-center flex items-center justify-center'
      style={{ backgroundImage: `url(${bgImage})` }} // replace with your image path
    >
      <div className='absolute top-0 w-full h-full bg-gradient-to-br from-black/30 via-black/20 to-black/40'></div>
      <div className='relative z-10 text-center px-4 max-w-2xl justify-center'>
        <h1 className='text-4xl md:text-7xl font-[Open Sans] font-bold text-white'>
          Find Your Perfect <br />
          <span className='text-amber-300'>Hideaway</span>
        </h1>
        <p className='mt-4 text-white text-lg'>
          Discover cozy, greenery-filled venues perfect for intimate events,
          creative photoshoots, and peaceful gatherings.
        </p>

        {/* Search bar */}
        <div className='flex w-full justify-center'>
          <div className='mt-8 flex p-4 w-fit flex-col rounded-xl md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-4 bg-white/95 backdrop-blur-sm'>
            <input
              type='text'
              placeholder='Enter location or venue type...'
              className='w-full md:w-80 px-4 py-2 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-[#A3C49A]'
            />
            <button className='bg-[#A3C49A] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#5d8353] transition flex items-center'>
              <div className='w-[18px] h-[18px] mr-2 flex items-center justify-center'>
                <svg
                  className='w-full h-full fill-white'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 640 640'
                >
                  <path d='M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z' />
                </svg>
              </div>
              Search Venues
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className='mt-6 flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4'>
          <button className='bg-[#A3C49A] hover:bg-[#5d8353] text-gray-100 font-semibold px-6 py-3 rounded-lg flex items-center space-x-2'>
            <span>Start Exploring</span>
            <span>→</span>
          </button>
          <button className='bg-white hover:bg-gray-100 text-gray-700 font-semibold px-6 py-3 rounded-lg flex items-center space-x-2'>
            <span>How It Works</span>
            <span>📘</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;
