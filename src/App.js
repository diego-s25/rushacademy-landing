import { useEffect } from "react";

import Hero from "./components/Hero";
// import Products from "./components/Products";
import "./styles/globals.scss";
import Nav from "./components/Nav";
import CourseCarousel from "./components/CourseCarousel";

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
      {/* <Products /> */}
      <CourseCarousel />
    </>
  );
}
