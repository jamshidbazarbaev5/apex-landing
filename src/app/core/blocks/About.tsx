import React from 'react';
import { Counter } from '../components/Counter'

interface FeatureItemProps {
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => (
  <li className="flex items-start gap-3">
    <div className="mt-2 w-2 h-2 rounded-full bg-[#2d3e50] flex-shrink-0" />
    <span className="text-gray-600 leading-relaxed">{text}</span>
  </li>
);

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, suffix, label }) => (
  <div className="flex flex-col items-center justify-center p-6 transition-transform hover:scale-105 duration-300">
    <div className="w-40 h-40 bg-[#344455] rounded-[2.5rem] flex items-center justify-center shadow-lg mb-4">
      <div className="text-white text-4xl md:text-5xl font-bold">
        <Counter end={value} suffix={suffix} />
      </div>
    </div>
    <span className="text-[#666] text-center font-medium">{label}</span>
  </div>
);

export const About: React.FC = () => {
  const features = [
    "20+ Years Experienced Drivers",
    "200+ Active Trucks Managed",
    "24/7 Live Dispatch & Tracking",
    "Nationwide Coverage (US & Canada)",
    "Professional Negotiation",
    "Full Back-Office Support",
    "Daily / Weekly Reporting",
    "Independent Contractor Friendly"
  ];

  return (
    <section className="w-full bg-[#F5F5F5] py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Title */}
        <div className="w-full flex justify-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3e50] tracking-tight">
            About Axper
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
          
          {/* Left Column: Text */}
          <div className="flex flex-col gap-6 text-[#666] text-base md:text-[1.05rem] leading-relaxed">
            <p>
              At Axper, we specialize in dependable, efficient, and flexible 
              logistics solutions across the U.S. and Canada.
            </p>
            <p>
              Whether it's a single box or a full truckload, our experienced team 
              ensures every shipment arrives safely and on time.
            </p>
            <p>
              With years of experience, a trusted carrier network, and dedicated 
              dispatch professionals, we help businesses streamline their 
              supply chains with reliability and transparency.
            </p>
            <p>
              Let us handle the logistics — so you can focus on growing your 
              business.
            </p>
          </div>

          {/* Right Column: Features List */}
          <div>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <FeatureItem key={index} text={feature} />
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <StatCard value={20} suffix="+" label="Expert Members" />
          <StatCard value={4} suffix="+" label="Years in Business" />
          <StatCard value={5} suffix="k+" label="Loads Delivered" />
          <StatCard value={500} suffix="+" label="Happy Customers" />
        </div>

      </div>
    </section>
  );
};