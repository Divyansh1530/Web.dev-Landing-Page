import React from 'react';
import leftImage1 from '../assets/Rectangle 382.png'
import leftImage2 from '../assets/Rectangle 383.png'
import leftImage3 from '../assets/Mask Group.png'
import leftRectangle from '../assets/Vector.png'
import rightImage1 from '../assets/Rectangle 385.png'
import rightImage2 from '../assets/Rectangle 384.png'
import rightImage3 from '../assets/Rectangle 386.png'
import rightRectangle1 from '../assets/Rectangle 387.png'
import rightRectangle2 from '../assets/Rectangle 388.png'
import whiteBlank from '../assets/Rectangle 389.png'


const HeroWithGraphics = () => {
  return (
    <section className=''>
    <div className="relative w-full font-['Inter',sans-serif] min-h-200 mt-5 pt-24 z-30 bg-neutral-100 overflow-hidden flex items-center justify-center">
      

      <div
  className="
    absolute left-0 top-90 -translate-y-1/2
    w-1/3 h-full
    hidden md:block
    md:scale-[0.6]
    lg:scale-[0.9]
    xl:scale-100
    origin-left
    transition-transform duration-300

  "
>


        
        <img src={leftRectangle} className="absolute left-15 top-50 w-65 h-110 z-0 opacity-100" />
        

        <div className="absolute top-[17%] left-[4%] w-40 h-62 bg-white border border-gray-100 z-30 overflow-hidden">
          <img src={leftImage2} alt="Project 1" className="w-full h-full object-cover" />
        </div>

        
        <div className="absolute top-[42%] left-[42%] w-39 h-55 bg-white border border-gray-100 z-30 overflow-hidden">
          <img src={leftImage3} alt="Project 2" className="w-full h-full object-cover" />
        </div>

        
        <div className="absolute top-[70%] left-[4%] w-40 h-42 bg-white border border-gray-100 z-10 overflow-hidden">
          <img src={leftImage1} alt="Project 3" className="w-full h-full object-cover" />
        </div>
      </div>

      
    <div className="max-w-4xl w-full flex flex-col items-center text-center -translate-y-20">

        
        
        <h1 className="text-5xl md:text-5xl lg:text-[82px] font-extrabold tracking-tighter -space-y-4 leading-tight">
          <span className="block text-[#303131] ">We Develop</span>
          <span className="block">
            <span className="text-[#49AD09]">Shopify</span>{' '}
            <span className="text-[#303131]">sites</span>
          </span>
        </h1>


        <p className="mt-8 text-[#514140] text-lg md:text-[20px] max-w-xl leading-relaxed mx-6 md:mx-auto">
          Slingback fabric heels. Thin wraparound ankle strap. Squared heel and toe. Pointed toes. Padded insole with geometrical design.
        </p>

        
        <div className="mt-15 flex flex-col sm:flex-row items-center justify-center gap-8">

          <button
          className=" relative z-0 bg-[#49AD09] text-white text-lg px-18 py-4 rounded-md shadow-[0_46px_22px_5px_rgba(0,0,0,0.1)]">
          Contact Us
          </button>



          <a 
            href="#" 
            className="group flex items-center gap-2 text-[#313131] font-normal underline text-[19px]"
          >
            Watch Video
            <svg 
              className="w-5 h-5 " 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>



     <div
  className="
    absolute right-0 top-1/2 -translate-y-1/2
    w-1/3 h-full
    hidden md:block
    md:scale-[0.6]
    lg:scale-[0.9]
    xl:scale-100
    origin-right
    transition-transform duration-300

  "
>

        <img src={rightRectangle1} className="absolute right-10 top-[15%] w-40 h-90 z-0" />
        <img src={rightRectangle2} className="absolute right-29 top-[47%] w-31 h-82 z-0 rotate-90" />
        

        <div className="absolute top-[6%] right-[1%] w-39 h-40 bg-white border border-gray-100 z-30 overflow-hidden">
          <img src={rightImage2} alt="Project 4" className="w-full h-full object-cover" />
        </div>

        
        <div className="absolute top-[33%] right-[21%] w-46 h-61 z-10 overflow-hidden">
           
          <img src={rightImage3} alt="Project 5" />
           
        </div>
        <img src={whiteBlank} alt="whiteblank" className='h-65 w-49 absolute top-[32%] right-[21%]'/>


        <div className="absolute top-[67%] right-[0%] w-40 h-40 bg-white border border-gray-100 z-30 overflow-hidden">
          <img src={rightImage1} alt="Project 6" className="w-full h-full object-cover" />
        </div>

        
      </div>
    
     
     
    </div>
    </section>
    
  );
};

export default HeroWithGraphics;