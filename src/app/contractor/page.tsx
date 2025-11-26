'use client';

import Header from "../core/blocks/Header";
import Footer from "../core/blocks/Footer";

export default function ContractorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#e5e5e5] flex items-center justify-center px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16">
      <div className="max-w-4xl w-full text-center">
        {/* Main Heading */}
        <h1 className="text-[#3d4f5f] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-8 sm:mt-12 md:mt-20 mb-4">Independent Contractor (Partner with Us)</h1>

        {/* Subtitle */}
        <p className="text-[#5a6a7a] text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed px-2">
          Run under your own authority with a dispatch team that keeps you moving.
          <br />
          You choose your rates — we negotiate, book, and support you on every load.
        </p>

        {/* Requirements Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 px-2 sm:px-4">
          <h2 className="text-[#3d4f5f] font-bold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">Requirements for Independent Contractor</h2>
          <ul className="text-[#5a6a7a] text-sm sm:text-base md:text-lg space-y-2 sm:space-y-3 text-left max-w-2xl mx-auto">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Active MC/DOT authority (optional)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Your own truck (Cargo Van / Sprinter / Small or Large Straight Truck / 26ft Box Truck)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>At least 2+ years of driving experience</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Active insurance (Auto Liability + Cargo)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Valid Registration</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Clean MVR (no major violations)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Ability to run OTR / Regional</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Smartphone with internet</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Professional communication & on-time updates</span>
            </li>
          </ul>
        </div>

        {/* What You Get Section */}
        <div className="mb-10 sm:mb-12 md:mb-14 px-2 sm:px-4">
          <h2 className="text-[#3d4f5f] font-bold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">What You Get</h2>
          <ul className="text-[#5a6a7a] text-sm sm:text-base md:text-lg space-y-2 sm:space-y-3 text-left max-w-2xl mx-auto">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>24/7 professional dispatch</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Convenient Mobile App</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Strong rate negotiation</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Direct brokers + load boards</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>No forced dispatch</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Your rate — your decision</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Fast paperwork, support, problem-solving</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Consistent loads across the U.S. & Canada</span>
            </li>
          </ul>
        </div>

        {/* Apply Button */}
        <div className="px-2">
          <a href="https://axpergroup.com/application/">
            <button className="bg-gray-700 rounded-4xl hover:bg-[#1c242b] active:bg-black text-white font-semibold text-xs sm:text-sm md:text-base tracking-wider px-8 sm:px-12 md:px-16 py-3 sm:py-4 transition-colors duration-200 w-full sm:w-auto">
              APPLY NOW
            </button>
          </a>
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}
