'use client'
import Image from "next/image";
import { ServiceCard } from "./core/blocks/section";
import FleetEquipment from "./core/blocks/FleetEqupment";
import About from "./core/blocks/About";
import Contact from "./core/blocks/Contact";
import Footer from "./core/blocks/Footer";
import Header from "./core/blocks/Header";
import Hero from "./core/blocks/Hero";
import { SERVICES } from '../app/core/blocks/constants'

export default function HeroSection() {
  // JSON-LD Schema for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Axper Transport",
    "url": "https://axper-transport.com",
    "logo": "https://axper-transport.com/logo.png",
    "description": "Professional transport and logistics solutions",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+1-XXX-XXX-XXXX"
    },
    "sameAs": [
      "https://www.facebook.com/axpertransport",
      "https://www.linkedin.com/company/axpertransport"
    ]
  };

  // JSON-LD Schema for LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Axper Transport Solutions",
    "description": "Reliable freight and logistics services",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Your City",
      "addressRegion": "Your State",
      "postalCode": "Your Zip",
      "addressCountry": "US"
    },
    "telephone": "+1-XXX-XXX-XXXX"
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <div className=" bg-[#F5F5F5] flex flex-col">
        <Header/>
        <section id="home">
          <Hero/>
        </section>
        <section id="services" className="min-h-screen  py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1400px] mx-auto">
            
            {/* Header Section */}
            <div className="text-center mb-12 space-y-3">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#323e48] tracking-tight">
                Transport Solutions That Work for You
              </h1>
              <p className="text-[1.05rem] sm:text-lg text-slate-500 font-light">
                No matter the load — we deliver safely, on time, and with full visibility.
              </p>
            </div>

            {/* Grid Layout */}
            {/* Matching the 3-column layout from the image */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {SERVICES.map((service, index) => (
                <ServiceCard key={index} item={service} />
              ))}
            </div>

          </div>
        </section>
        <section id="fleet">
          <FleetEquipment/>
        </section>
        <section id="about">
          <About/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
        <Footer/>

      </div>
    </>
  );
}