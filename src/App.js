import { useEffect } from "react";

import Hero from "./components/Hero";
import "./styles/globals.scss";
import Nav from "./components/Nav";
import CourseCarousel from "./components/CourseCarousel";
import ExecSummary from "./components/ExecSummary";
import Modality from "./components/Modality";
import ImpactMosaic from "./components/ImpactMosaic";
import PricingPlans from "./components/PricingPlans";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import Socials from "./components/Socials";

export default function App() {
  useEffect(() => {
    const NAV_HEIGHT = 72;
    window.__scrollToPanel = (id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top: y, behavior: "smooth" });
    };
    return () => {
      delete window.__scrollToPanel;
    };
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <CourseCarousel />
      <ExecSummary />
      <Modality />
      <ImpactMosaic />
      <PricingPlans />
      <FinalCta />
      <Socials />
      <Footer />
    </>
  );
}
