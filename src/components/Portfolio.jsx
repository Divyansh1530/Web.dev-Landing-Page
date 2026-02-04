import React from 'react';
import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image2.png';
import Image3 from '../assets/Image3.png';
import Image4 from '../assets/Image4.png';

const Portfolio = () => {
  const projects = [
    { title: "Fashion Landing page", category: "Shopify Development", image: Image1 },
    { title: "Health & Fitness", category: "Figma Design", image: Image2 },
    { title: "Furniture Shop", category: "Webflow Development", image: Image3 },
    { title: "IT Solution Provider", category: "UI/UX Design", image: Image4 }
  ];

  return (
    <section className="bg-white py-10 px-6 sm:py-10 font-['Inter',sans-serif]">
      <div className="max-w-6xl mx-auto">
        
        
        <div className="text-center sm:mb-40 mb-20"> {/* Increased margin to account for upward shift */}
          <span className="text-[18px] font-medium text-[#514140]">
            Our Work
          </span>
          <h2 className="mt-8 text-4xl md:text-5xl font-normal text-[#313131] ">
            Our Portfolio
          </h2>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-start">
          {projects.map((project, index) => {
            // Check if item is in the left column (Index 0 and 2)
            const isElevated = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`group flex flex-col transition-all duration-500 ${
                  isElevated ? 'md:-mt-20' : 'md:mt-0'
                }`}
              >
                {/* Image Container */}
                <div className="w-full h-80 md:h-112.5 bg-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                
                <div className="mt-6 flex justify-between items-end">
                  <div className="flex flex-col">
                    
                    <h3 className="text-[28px] font-medium text-gray-900 leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <a 
                    href="#" 
                    className="text-lg font-medium text-green-600 hover:text-green-700 underline underline-offset-4 decoration-transparent hover:decoration-green-600 transition-all duration-200"
                  >
                    View Details
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
      <div className="mt-22 flex flex-col sm:flex-row items-center justify-center gap-6">

          <button className="bg-[#49AD09] text-white text-lg px-18 py-4 rounded-md shadow-[0_46px_22px_5px_rgba(0,0,0,0.1)]">
            All Projects
          </button>
          </div>
    </section>
  );
};

export default Portfolio;