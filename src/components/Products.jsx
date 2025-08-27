import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/** Academic catalog — one topic per card */
const TOPICS = [
  "📚 Fundamentos de Blockchain & Web3",
  "💻 Contratos Inteligentes con Solidity",
  "🪙 Tokenización de Activos Reales",
  "📈 Marketing Estratégico para Proyectos Blockchain",
  "🤖 Blockchain + Inteligencia Artificial",
  "🔐 Auditoría de Contratos y Seguridad Web3",
  "🛡️ Ciberseguridad para Protocolos Blockchain",
  "🧩 DAO & Gobernanza Digital",
];

export default function Products() {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [viewportRef, embla] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
      slidesToScroll: 1,
    },
    [autoplay.current]
  );

  useEffect(() => {
    return () => autoplay.current && autoplay.current.destroy;
  }, []);

  const scrollPrev = () => embla && embla.scrollPrev();
  const scrollNext = () => embla && embla.scrollNext();

  return (
    <section
      className="ccardsSection"
      id="products"
      aria-labelledby="products-title"
    >
      <div className="container">
        <h2
          id="products-title"
          className="heading-lg"
          style={{ textAlign: "center" }}
        >
          Oferta Académica
        </h2>

        <div className="embla embla--catalog">
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container">
              {TOPICS.map((title, i) => (
                <div className="embla__slide embla__slide--card" key={title}>
                  <motion.article
                    className="ccard"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                    transition={{ duration: 0.35, delay: (i % 4) * 0.05 }}
                  >
                    <header className="ccard__hd">
                      <span className="ccard__dot" aria-hidden="true" />
                      <span className="ccard__title">{title}</span>
                    </header>

                    <div className="ccard__thumb" aria-hidden="true" />

                    {/* Optional: keep a compact line to hint outcomes */}
                    <p className="ccard__desc">
                      Programa práctico con enfoque en casos reales de Web3 y
                      tokenización.
                    </p>
                  </motion.article>
                </div>
              ))}
            </div>
          </div>

          {/* Nav arrows */}
          <button
            className="embla__btn embla__btn--prev"
            type="button"
            aria-label="Anterior"
            onClick={scrollPrev}
          >
            ‹
          </button>
          <button
            className="embla__btn embla__btn--next"
            type="button"
            aria-label="Siguiente"
            onClick={scrollNext}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
