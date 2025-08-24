import "./styles/globals.scss";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Companies from "./components/Companies";
import TeamRush from "./components/TeamRush";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Products /> {/* -> will be “Productos” */}
      <Companies />
      <TeamRush />
      <Contact />
      <Footer />
    </>
  );
}
