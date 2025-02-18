import React from 'react';

export const SectionTitle = ({ badge, title, description }) => {
  return (
    <div className="my-16 text-center">
      <h4 className="text-[#FE6A61] text-3xl md:text-4xl font-bold font-nexa-bold mb-3 md:mb-4">
        {badge}
      </h4>
      <h1 className="text-4xl md:text-[40px] font-nexa-bold text-gray-900 mb-4 md:mb-6">
        {title}
      </h1>
      <p className="text-gray-700 w-[100%] md:w-[60%] text-lg mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
};
