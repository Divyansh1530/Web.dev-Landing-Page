import React from 'react';

const TestimonialCard = ({ name, quote }) => (
  <div className="bg-white p-8 font-['Inter',sans-serif] rounded-lg shadow-2xl shadow-gray-200/50 flex flex-col h-full border border-gray-50 relative z-10 transition-transform duration-300 hover:-translate-y-1">
    <h4 className="text-[#1a2e5a] font-bold text-sm mb-4">Superb Work!</h4>
    <p className="text-gray-500 text-[15px] leading-relaxed mb-6 italic">
      “{quote}”
    </p>
    <div className="mt-auto">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-orange-400 text-lg">★</span>
        ))}
      </div>
      <p className="text-[#1a2e5a] font-bold text-sm">{name}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const reviews = [
    { name: "Sabo Masties", quote: "Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary." },
    { name: "Sabo Masties", quote: "Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary." },
    { name: "Sabo Masties", quote: "Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary." },
  ];

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative">
        
        
        <div className="text-center mb-16">
          <p className="text-[#514140] text-[19px] mb-8 font-medium">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-normal text-[#313131] tracking-tight md:mb-30">
            What Customers Say
          </h2>
        </div>

        
        <div className="relative w-full py-12">
          
          
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-140 bg-[#f3f3f3] z-0" />

        
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 max-w-6xl mx-auto px-4">
            {reviews.map((rev, index) => (
              <TestimonialCard key={index} name={rev.name} quote={rev.quote} />
            ))}
          </div>
        </div>

        
        <div className="mt-12 md:mt-4 relative z-20">
          <div className="bg-white shadow-xl rounded-full p-2 flex items-center gap-1 border border-gray-100">
            <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#333333] text-white shadow-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;