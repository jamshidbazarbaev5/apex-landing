'use client'
import Image from "next/image";
import TransportServices from "./core/blocks/section";
import FleetEquipment from "./core/blocks/FleetEqupment";
import About from "./core/blocks/About";
import Contact from "./core/blocks/Contact";
import Footer from "./core/blocks/Footer";
import Header from "./core/blocks/Header";
import Hero from "./core/blocks/Hero";

export default function HeroSection() {
  return (
    <div className=" bg-[#F5F5F5] flex flex-col">
    <Header/>
    <Hero/>

      <TransportServices/>
      <FleetEquipment/>
      <About/>
      <Contact/>
      <Footer/>

    </div>
  );
}