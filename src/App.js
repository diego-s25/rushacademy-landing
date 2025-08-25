// src/App.js
import "./styles/globals.scss";

import Nav from "./components/Nav";
import HorizontalPager from "./components/HorizontalPager";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Companies from "./components/Companies";
import Team from "./components/TeamRush";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const PANELS = ["home", "products", "companies", "team", "contact"];

export default function App() {
  return (
    <>
      <Nav />
      <HorizontalPager ids={PANELS} className="horizontal-scroll" id="pager">
        <section className="panel" id="home" data-panel-id="home">
          <Hero />
        </section>

        <section className="panel" id="products" data-panel-id="products">
          <Products />
        </section>

        <section className="panel" id="companies" data-panel-id="companies">
          <Companies />
        </section>

        <section className="panel" id="team" data-panel-id="team">
          <Team />
        </section>

        <section className="panel" id="contact" data-panel-id="contact">
          <Contact />
          <Footer />
        </section>
      </HorizontalPager>
    </>
  );
}
