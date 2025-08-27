import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CARDS = [
  {
    title: "Carrera Universitaria en Blockchain + Tokenización",
    desc: "Forma parte de la primera generación de profesionales Web3 en LATAM con doble titulación en tokenización.",
  },
  {
    title: "Maestrías Especializadas",
    desc: "Programas de posgrado en Blockchain, Tokenización y Marketing Web3, con módulos de IA aplicada.",
  },
  {
    title: "Cursos Intensivos (12–24 semanas)",
    desc: "Capacitación práctica en smart contracts, tokenización, ciberseguridad, marketing Web3 y más.",
  },
  {
    title: "Capacitación Ejecutiva",
    desc: "Diseñada para directivos y líderes que buscan integrar blockchain y tokenización en sus empresas.",
  },
];

// small helper to render the card once (used in both grid and mobile)
function Card({ item, i }) {
  return (
    <motion.article
      className="ccard"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.35, delay: i * 0.04 }}
    >
      <header className="ccard__hd">
        <span className="ccard__dot" aria-hidden="true" />
        <span className="ccard__title">{item.title}</span>
      </header>
      <div className="ccard__thumb" aria-hidden="true" />
      <p className="ccard__desc">{item.desc}</p>
    </motion.article>
  );
}

export default function Products() {
  const [isMobile, setIsMobile] = useState(false);
  const [viewportRef] = useEmblaCarousel({ loop: false, align: "start" });

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section
      className="ccardsSection"
      id="products"
      aria-labelledby="products-title"
    >
      <div className="container">
        {/* Desktop / large screens: 4-up grid (no carousel) */}
        {!isMobile && (
          <div className="ccards ccards--grid">
            {CARDS.map((c, i) => (
              <Card key={i} item={c} i={i} />
            ))}
          </div>
        )}

        {/* Mobile / tablet: Embla carousel */}
        {isMobile && (
          <div className="ccards ccards--mobile embla">
            <div className="embla__viewport" ref={viewportRef}>
              <div className="embla__container">
                {CARDS.map((c, i) => (
                  <div className="embla__slide" key={i}>
                    <Card item={c} i={i} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
