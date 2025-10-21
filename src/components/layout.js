import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen bg-[#f6f7f2] text-gray-800'>
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className='flex-grow'>{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
