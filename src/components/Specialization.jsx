import React from 'react';
import Webflow from '../assets/Webflow1.png'
import figma from '../assets/Figma.png'
import php from '../assets/php.png'
import Shopify from '../assets/Shopify.png'

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div
  className="group bg-white p-8 rounded-md border border-gray-100 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out flex flex-col items-start w-full max-w-sm min-h-75">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-3xl">{icon}</div>
        <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
          {title}
        </h3>
      </div>

      <p className="text-gray-500 text-lg leading-relaxed mb-6">
        {description}
      </p>

      <div className="mt-auto">
        <a
        href="#"
        className="
          text-sm font-medium
          text-gray-900
          underline underline-offset-4
          decoration-gray-300
          group-hover:text-[#49AD09]
          group-hover:decoration-[#49AD09]
          transition-colors duration-300">
         Read More
          </a>

      </div>
    </div>
  );
};

const Specialization = () => {
  const services = [
    {
      title: "Webflow Development",
      description: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behindon afraid or warmly",
      icon: <img src={Webflow} alt="Webflow" />
    },
    {
      title: "Shopify Development",
      description: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behindon afraid or warmly",
      icon: <img src={Shopify} alt="Shopify" />
    },
    {
      title: "Figma Web Designing",
      description: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behindon afraid or warmly",
      icon: <img src={figma} alt="figma" />
    },
    {
      title: "PHP Development",
      description: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behindon afraid or warmly",
      icon: <img src={php} alt="php" />
    }
  ];

  return (
    <section id='services' className="bg-white py-20 px-6 sm:py-32">
      <div className="max-w-200 mx-auto flex flex-col items-center">
        <div className='text-[20px] mb-10 mt-20 text-[#514140]'>
          What we do?
        </div>
        <h2 className="text-4xl md:text-5xl font-medium text-[#313131] text-center mb-25 tracking-tight">
          Our Specialization
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-10 justify-items-center w-full">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

      </div>
      <div className="mt-22 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#" className="bg-[#49AD09] text-white text-lg px-18 py-4 rounded-md shadow-[0_46px_22px_5px_rgba(0,0,0,0.1)]">
            Learn More
          </a>
          </div>
    </section>
  );
};

export default Specialization;