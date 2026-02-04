import React from 'react';

const PricingCard = ({ title, price, features, buttonText, isPrimary }) => {
  return (
    <div 
      className={`bg-white p-8 rounded-md flex flex-col  h-full transition-all font-['Inter',sans-serif] duration-300 relative ${
        isPrimary 
          ? 'border-0 shadow-[0_20px_50px_rgba(0,0,0,0.1)] scale-102 z-10' 
          : 'border border-gray-100 shadow-sm'
      }`}
    >
      
      <h3 className="text-3xl font-semibold text-gray-800 text-center mb-6">
        {title}
      </h3>
      
      
      <div className="text-center mb-10">
        <span className="text-6xl font-bold text-gray-800">
          {price === "Custom" ? "" : "$"}
          {price}
        </span>
      </div>

      
      <ul className="space-y-4 mb-10 grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-900 font-semibold text-[15px]">
            
            <div className="mt-1 shrink-0 w-3 h-3 rounded-full flex items-center justify-center bg-gray-800">
               
               <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {feature}
          </li>
        ))}
      </ul>

      
      <button 
        className={`mx-10 py-4 rounded-md font-normal transition-all duration-200 text-[16px] ${
          isPrimary 
            ? 'bg-[#4fb218] text-white hover:bg-[#449a15] shadow-[0_46px_22px_5px_rgba(0,0,0,0.1)]' 
            : 'bg-white text-gray-800 border border-gray-600 hover:bg-gray-50'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      title: "For Starter",
      price: "1499",
      buttonText: "Request Demo",
      isPrimary: false,
      features: [
        "Feedback Categorization",
        "Features Prioritization",
        "Real-Time Collaboration",
        "Feedback Loop Notifications",
        "Essential Dev Tools Integrations"
      ]
    },
    {
      title: "For Teams",
      price: "2999",
      buttonText: "Request Demo",
      isPrimary: true,
      features: [
        "Feedback Categorization",
        "Features Prioritization",
        "Real-Time Collaboration",
        "Feedback Loop Notifications",
        "Essential Dev Tools Integrations"
      ]
    },
    {
      title: "For Company",
      price: "Custom",
      buttonText: "Contact Us",
      isPrimary: false,
      features: [
        "Feedback Categorization",
        "Feedback Loop Notifications",
        "Essential Dev Tools Integrations"
      ]
    }
  ];

  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      
      <div className="hidden lg:block absolute -left-5 top-1/2 w-16 h-16 border border-gray-300 rotate-45 -z-10" />

      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-24">
          <p className="text-[#514140] text-[19px] mb-8">Pricing</p>
          <h2 className="text-5xl font-normal text-[#313131] tracking-tight">
            Pricing Policy
          </h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;