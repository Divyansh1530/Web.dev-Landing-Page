import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);


  return (
    <nav className="bg-neutral-100 py-6 relative z-50 font-['Inter',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center">
        <div className="flex justify-between items-center h-16">
          
          
          <div className=" flex items-center">
            <span className="text-lg font-bold text-[#303131] tracking-tight cursor-pointer">
              Web.Dev
            </span>
          </div>

          
          <div className="hidden md:flex items-center space-x-6">
            <div className="hidden md:flex flex-1 justify-center md:space-x-8 lg:space-x-12 text-lg">
            <a href="#home" className="text-[#313131] hover:text-gray-900 transition-colors duration-200">Home</a>
            <a href="#services" className="text-[#313131] hover:text-gray-900 transition-colors duration-200">About</a>
            <a href="#testimonials" className="text-[#313131] hover:text-gray-900 transition-colors duration-200">Testimonials</a>
            <a href="#contact" className="text-[#313131] hover:text-gray-900 transition-colors duration-200">Contact</a>
             <a href="#pricing" className="text-[#313131] hover:text-gray-900 font-medium">
              Sign in
            </a>
          </div>
           
            <a
            href='#pricing'
            className="bg-[#49AD09] text-white px-12 py-4 rounded-sm font-medium transition-colors duration-200 text-[18px]
             shadow-[0_46px_22px_5px_rgba(0,0,0,0.1)]">
              Sign up
            </a>
          </div>

          
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-1">
          <a onClick={closeMenu} href="#home" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">Home</a>
          <a onClick={closeMenu} href="#services" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">About</a>
          <a onClick={closeMenu} href="#testimonials" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">Testimonials</a>
          <a onClick={closeMenu} href="#contact" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">Contact</a>
          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
            <a onClick={closeMenu} href="#pricing" className="px-3 py-2 text-gray-600">Sign in</a>
            <a onClick={closeMenu} href="#pricing" className="w-full bg-green-600 text-white px-6 py-2 rounded-full font-medium">
              Sign up
            </a>
          </div>
        </div>
        
      )}
      

    </nav>
  );
};

export default Navbar;