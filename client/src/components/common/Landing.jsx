import Hero from "../landing/Hero";
import Stats from "../landing/Stats";
import Features from "../landing/Features";
import HowItWorks from "../landing/HowItWork";
import Modules from "../landing/Modules";
import Testimonials from "../landing/Testimonials";
import CTA from "../landing/Cta";
import Footer from "../layout/Footer";

export default function Landing() {
  return (
    <>
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />

      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Modules />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </>
  );
}