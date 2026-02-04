import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white font-['Inter',sans-serif]">
      
      <section className="py-32 px-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-5xl md:text-5xl font-normal text-[#313131] tracking-tight leading-tight">
          Need a little more <br />
          home to grow?
        </h2>
        <button className="mt-12 bg-[#4fb218] text-white px-20 py-4 rounded-md font-normal shadow-[0_46px_22px_5px_rgba(0,0,0,0.1)]
 text-lg">
          Contact Us
        </button>
      </section>


      <footer className="pt-8 pb-12 px-6 md:px-24 lg:px-40">
        <div className="max-w-360 mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-y-16 gap-x-24 mb-20">
            
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[#313131] mb-8">Web.Dev</span>
             <p className="text-[#514140] text-[16px] leading-relaxed max-w-70 mb-10">

                You’ll find your next home loan value you prefer.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 11-2 2 2 2 0 012-2z"/></svg>
                </a>
              </div>
            </div>

            
            <div className="flex flex-col">
              <h4 className="text-xl font-bold text-[#313131] mb-8">Resources</h4>
              <nav className="flex flex-col space-y-6">
                <a href="#" className="text-[#514140] hover:text-gray-900 text-[16px]">Our Agents</a>
                <a href="#" className="text-[#514140] hover:text-gray-900 text-[16px]">Member Stories</a>
                <a href="#" className="text-[#514140] hover:text-gray-900 text-[16px]">Video</a>
                <a href="#" className="text-[#514140] hover:text-gray-900 text-[16px]">Free trial</a>
              </nav>
            </div>

            
            <div className="flex flex-col">
              <h4 className="text-xl font-bold text-[#313131] mb-8">Company</h4>
              <nav className="flex flex-col space-y-6">
                <a href="#" className="text-[#514140] hover:text-gray-900 text-[16px]">Patnerships</a>
                <a href="#" className="text-[#514140] hover:text-gray-900 text-[16px]">Terms of use</a>
                <a href="#" className="text-[#514140] hover:text-gray-900 text-[16px]">Privacy</a>
                <a href="#" className="text-[#514140] hover:text-gray-900 text-[16px]">Sitemap</a>
              </nav>
            </div>

            
            <div className="flex flex-col">
              <h4 className="text-xl font-bold text-[#313131] mb-8">Get in touch</h4>
              <div className="relative max-w-70">
                <input 
                  type="email" 
                  placeholder="Enter your mail"
                  className="w-full bg-[#f3f3f3] border-none rounded-md py-4 px-6 pr-12 text-[15px] focus:outline-none placeholder:text-gray-500"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 hover:text-green-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8l4 4-4 4M8 12h8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          
          <div className="border-t border-gray-100 pt-10 text-center">
            <p className="text-gray-800 text-[15px]">
              Copyright 2021 © Web.Dev. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;