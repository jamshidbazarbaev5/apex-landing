import React from 'react';
import { ServiceItem } from './types';

interface ServiceCardProps {
  item: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  return (
    <div className="group relative w-full h-64 sm:h-72 lg:h-60 overflow-hidden rounded-[2.5rem] shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Background Image */}
      <img
        src={item?.image}
        alt={item?.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
      />

      {/* Colored Tint Overlay - This provides the specific 'ome colors' requested */}
      {/* Using mix-blend-multiply or just opacity can work, but direct opacity is safer for text readability */}
      <div className={`absolute inset-0 ${item?.tintClass} transition-all duration-300`} />

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-80" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-6 sm:p-8 text-center">
        <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 drop-shadow-lg tracking-wide">
          {item?.title}
        </h3>
        {/* Added max-width to prevent text from touching edges too much, matching the pill look */}
        <p className="text-gray-100 text-sm sm:text-[0.95rem] leading-snug max-w-[280px] drop-shadow-md font-normal opacity-95">
          {item.description}
        </p>
      </div>
    </div>
  );
};