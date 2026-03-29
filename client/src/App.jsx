import React from "react";
import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from "./components/landing/Hero";
import Stats from "./components/landing/Stats";
import Features from "./components/landing/Features";
import HowItWorks from "./components/landing/HowItWork";
import Modules from "./components/landing/Modules";
import Testimonials from "./components/landing/Testimonials";
import CTA from "./components/landing/Cta";

function App() {
  

  return (
    <>
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />
      <Navbar/>
      <main>
        <Hero/>
        <Stats/>
        <Features/>
        <HowItWorks/>
        <Modules/>
        <Testimonials/>
        <CTA/>
      </main>
      <Footer/>
    </>
  )
}

export default App
