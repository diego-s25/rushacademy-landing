// src/App.js
import "./styles/globals.scss";

import Nav from "./components/Nav";
import HorizontalPager from "./components/HorizontalPager";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Companies from "./components/Companies";
import Academy from "./components/Academy";
import Team from "./components/TeamRush";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const PANELS = ["home", "products", "companies", "academy", "team", "contact"];

export default function App() {
  return (
    <>
      <Nav />
      <HorizontalPager ids={PANELS} className="horizontal-scroll" id="pager">
        <section className="panel" id="home" data-panel-id="home">
          <div className="section" id="home">
            <Hero />
            <Footer />
          </div>
        </section>

        <section className="panel" id="products" data-panel-id="products">
          <div className="section" id="products">
            <Products />
            <Footer />
          </div>
        </section>

        <section className="panel" id="companies" data-panel-id="companies">
          <div className="section" id="companies">
            <Companies />
            <Footer />
          </div>
        </section>

        <section className="panel" data-panel-id="academy">
          <div className="section" id="academy">
            <Academy />
            <Footer />
          </div>
        </section>

        <section className="panel" id="team" data-panel-id="team">
          <div className="section" id="team">
            <Team />
            <Footer />
          </div>
        </section>

        <section className="panel" id="contact" data-panel-id="contact">
          <div className="section" id="contact">
            <Contact />
            <Footer />
          </div>
        </section>
      </HorizontalPager>
    </>
  );
}
