import React from 'react';
import {
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaHeadset,
  FaCalendarCheck,
  FaLeaf,
  FaStar,
} from 'react-icons/fa';

const WhyChooseUsSection = () => {
  return (
    <section className='bg-[#F7F9F5] py-20 px-4'>
      <div className='max-w-7xl mx-auto text-center'>
        {/* Badge */}
        <div className='inline-block bg-[#E7F0E7] text-[#6BA96A] text-sm font-medium px-4 py-1 rounded-full mb-4'>
          🌿 Why Choose Us
        </div>

        {/* Heading */}
        <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'>
          Why Choose <span className='text-[#6BA96A]'>LushHavens?</span>
        </h2>

        {/* Subheading */}
        <p className='text-gray-600 text-lg max-w-2xl mx-auto mb-12'>
          Experience the difference with our premium venue booking platform
          designed for
          <span className='text-[#6BA96A] font-medium'>
            {' '}
            extraordinary moments
          </span>
        </p>

        {/* Feature Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          {/* Feature 1 (Main Feature) */}
          <div className='col-span-1 lg:col-span-1 row-span-2 bg-white shadow-md rounded-2xl p-6 text-left'>
            <div className='flex items-center justify-center w-12 h-12 bg-[#A3C49A] rounded-xl mb-4'>
              <FaCheckCircle className='text-white text-xl' />
            </div>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>
              Handpicked Peaceful Venues
            </h3>
            <p className='text-sm text-gray-600 mb-4'>
              Every venue in our collection is carefully curated for its
              tranquil atmosphere, natural beauty, and unique character. We
              personally visit and verify each location to ensure it meets our
              high standards.
            </p>
            <div className='text-sm text-[#6BA96A] font-medium'>
              ✔ 500+ Verified Venues
            </div>
            <div className='text-sm text-[#F59E0B] flex items-center gap-1 mt-1'>
              <FaStar /> 4.9/5 Average Rating
            </div>
          </div>

          {/* Feature 2 */}
          <div className='bg-white shadow-sm rounded-xl p-5 text-left'>
            <div className='flex items-center justify-center w-10 h-10 bg-amber-400 rounded-lg mb-3'>
              <FaClock className='text-white text-base' />
            </div>
            <h4 className='font-semibold text-gray-800 mb-1'>
              Instant Booking
            </h4>
            <p className='text-sm text-gray-600 mb-2'>
              Book your perfect venue in under 5 minutes with our streamlined
              system.
            </p>
            <p className='text-xs text-amber-600 font-medium'>
              ⏱ Average booking time: 3 minutes
            </p>
          </div>

          {/* Feature 3 */}
          <div className='bg-white shadow-sm rounded-xl p-5 text-left'>
            <div className='flex items-center justify-center w-10 h-10 bg-[#A3C49A] rounded-lg mb-3'>
              <FaShieldAlt className='text-white text-base' />
            </div>
            <h4 className='font-semibold text-gray-800 mb-1'>
              100% Verified Listings
            </h4>
            <p className='text-sm text-gray-600 mb-2'>
              Every venue undergoes thorough verification for authenticity and
              quality.
            </p>
            <p className='text-xs text-[#6BA96A] font-medium'>
              ✔ Quality guaranteed
            </p>
          </div>


          {/* Feature 5 */}
          <div className='bg-white shadow-sm rounded-xl p-5 text-left'>
            <div className='flex items-center justify-center w-10 h-10 bg-[#405E3E] rounded-lg mb-3'>
              <FaCalendarCheck className='text-white text-base' />
            </div>
            <h4 className='font-semibold text-gray-800 mb-1'>
              Flexible Cancellation
            </h4>
            <p className='text-sm text-gray-600 mb-2'>
              Enjoy peace of mind with flexible cancellation policies.
            </p>
            <p className='text-xs text-[#6BA96A] font-medium'>
              ✅ Free Cancellation
            </p>
          </div>

          {/* Feature 6 */}
          <div className='bg-white shadow-sm rounded-xl p-5 text-left'>
            <div className='flex items-center justify-center w-10 h-10 bg-amber-300 rounded-lg mb-3'>
              <FaLeaf className='text-white text-base' />
            </div>
            <h4 className='font-semibold text-gray-800 mb-1'>
              Eco-Friendly Focus
            </h4>
            <p className='text-sm text-gray-600 mb-2'>
              Sustainable venues that celebrate and protect our environment.
            </p>
            <p className='text-xs text-[#6BA96A] font-medium'>
              🌱 Carbon Neutral Events
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center mt-10'>
          <div className='bg-white py-6 rounded-xl shadow-md'>
            <p className='text-2xl font-semibold text-gray-800'>50K+</p>
            <p className='text-sm text-gray-500'>Happy Customers</p>
          </div>
          <div className='bg-white py-6 rounded-xl shadow-md'>
            <p className='text-2xl font-semibold text-amber-500'>100K+</p>
            <p className='text-sm text-gray-500'>Events Hosted</p>
          </div>
          <div className='bg-white py-6 rounded-xl shadow-md'>
            <p className='text-2xl font-semibold text-green-600'>4.9★</p>
            <p className='text-sm text-gray-500'>Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
