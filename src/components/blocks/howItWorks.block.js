import React from 'react';
import { FaSearch, FaEye, FaCalendarCheck, FaArrowRight } from 'react-icons/fa';

const HowItWorksBlock = () => {
  return (
    <section className='py-24 lg:py-40 bg-gradient-to-br from-white via-gray-50 to-green-50 relative overflow-hidden'>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #10B981 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Floating elements */}
      <div className='absolute top-10 left-10 w-16 h-16 bg-green-200/30 rounded-full animate-pulse'></div>
      <div className='absolute top-32 right-16 w-12 h-12 bg-blue-200/30 rounded-full animate-bounce'></div>
      <div className='absolute bottom-20 left-1/4 w-8 h-8 bg-amber-200/40 rounded-full animate-pulse'></div>
      <div className='container mx-auto px-4 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-6'>
            How It Works
          </h2>
          <div className='w-20 h-1 bg-[#A3C49A] mx-auto mb-6 rounded-full'></div>
          <p className='text-lg sm:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed'>
            Finding your perfect venue is simple and effortless with our
            streamlined 3-step process
          </p>
        </div>

        {/* Steps */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto'>
          {/* Step 1: Search */}
          <div className='relative group'>
            <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#E5E7EB]'>
              <div className='absolute -top-6 left-8'>
                <div className='w-12 h-12 bg-[#A3C49A] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg'>
                  1
                </div>
              </div>

              <div className='text-center mb-6 mt-4'>
                <div className='w-20 h-20 bg-[#FFC107]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <FaSearch className='text-3xl text-[#A3C49A]' />
                </div>
              </div>

              <div className='text-center'>
                <h3 className='text-xl font-bold text-[#1F2937] mb-4'>
                  Search
                </h3>
                <p className='text-[#6B7280] leading-relaxed'>
                  Browse through our curated collection of peaceful,
                  greenery-filled venues using our intuitive search filters
                </p>
              </div>
            </div>

            <div className='hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-[#A3C49A] text-2xl'>
              <FaArrowRight />
            </div>
          </div>

          {/* Step 2: View */}
          <div className='relative group'>
            <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#E5E7EB]'>
              <div className='absolute -top-6 left-8'>
                <div className='w-12 h-12 bg-[#5d8353] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg'>
                  2
                </div>
              </div>

              <div className='text-center mb-6 mt-4'>
                <div className='w-20 h-20 bg-[#5d8353]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <FaEye className='text-3xl text-[#5d8353]' />
                </div>
              </div>

              <div className='text-center'>
                <h3 className='text-xl font-bold text-[#1F2937] mb-4'>View</h3>
                <p className='text-[#6B7280] leading-relaxed'>
                  Explore detailed photos, amenities, and reviews to find the
                  perfect space that matches your vision
                </p>
              </div>
            </div>

            <div className='hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-[#5d8353] text-2xl'>
              <FaArrowRight />
            </div>
          </div>

          {/* Step 3: Book */}
          <div className='relative group'>
            <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#E5E7EB]'>
              <div className='absolute -top-6 left-8'>
                <div className='w-12 h-12 bg-[#D97706] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg'>
                  3
                </div>
              </div>

              <div className='text-center mb-6 mt-4'>
                <div className='w-20 h-20 bg-[#D97706]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <FaCalendarCheck className='text-3xl text-[#D97706]' />
                </div>
              </div>

              <div className='text-center'>
                <h3 className='text-xl font-bold text-[#1F2937] mb-4'>Book</h3>
                <p className='text-[#6B7280] leading-relaxed'>
                  Secure your perfect venue instantly with our seamless booking
                  system and start planning your event
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className='text-center mt-16'>
          <a
            href='/how-it-works'
            className='inline-flex items-center bg-[#A3C49A] text-white px-8 py-4 rounded-lg hover:bg-[#5d8353] transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
          >
            Learn More About Our Process
            <FaArrowRight className='ml-2' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksBlock;
