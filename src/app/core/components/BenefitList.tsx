import React from 'react';
import { BENEFITS } from '../constants/contstants'


const BenefitsList: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-slate-600 text-sm sm:text-base w-full px-4" style={{ fontFamily: 'var(--font-kanit)' }}>
      {BENEFITS.map((benefit, index) => (
        <div key={index} className="text-center leading-relaxed">
         <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          {benefit}
        </div>
      ))}
    </div>
  );
};

export default BenefitsList;