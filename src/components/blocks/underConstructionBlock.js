import React from 'react';
import bgImage from '../../assets/images/publicContain.webp'; // Ensure this path is valid

const UnderCOnstructionBLock = () => {
  return (
    <section
      className='h-screen relative bg-cover bg-center flex items-center justify-center'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark gradient overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/30 via-black/20 to-black/40 z-0'></div>

      {/* Content */}
      <div className='relative z-10 text-center px-4 max-w-xl'>
        {/* Spinner Animation */}
        <div className='flex justify-center mb-6'>
          <div className='w-14 h-14 border-[6px] border-[#A3C49A] border-t-transparent rounded-full animate-spin'></div>
        </div>

        {/* Title */}
        <h1 className='text-4xl md:text-5xl font-bold text-white'>
          Something <span className='text-amber-300'>Beautiful</span> is Coming
        </h1>
        <p className='mt-4 text-white text-lg'>
          We're working hard to bring this page to life. Hang tight and check
          back soon!
        </p>

        {/* Optional Back/Home Button */}
        <div className='mt-8'>
          <button className='bg-[#A3C49A] hover:bg-[#5d8353] text-white font-semibold px-6 py-3 rounded-lg transition'>
            ← Go Back Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default UnderCOnstructionBLock;
