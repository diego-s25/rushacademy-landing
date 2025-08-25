// src/components/Products.jsx
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const PRODUCTS = [
  {
    title: "WRush Wallet",
    desc: "Pagos y transferencias seguras con custodia digital.",
    cta: "Learn more →",
  },
  {
    title: "Tokenización de Activos",
    desc: "Convierte bienes raíces, commodities y activos en inversiones digitales.",
    cta: "Learn more →",
  },
  {
    title: "DeFi Institucional",
    desc: "Finanzas descentralizadas adaptadas a corporativos y fondos de inversión.",
    cta: "Learn more →",
  },
  {
    title: "Consultoría Web3",
    desc: "Acompañamiento estratégico y técnico para lanzar proyectos en blockchain.",
    cta: "Learn more →",
  },
];

export default function Products() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (i) => emblaApi && emblaApi.scrollTo(i),
    [emblaApi]
  );

  return (
    <section id="products" className="section">
      <div className="container">
        <h2 className="heading-lg">Nuestros Productos</h2>
        <p className="lead" style={{ marginTop: 12 }}>
          Tecnología y soluciones blockchain diseñadas para individuos,
          inversionistas y empresas.
        </p>

        <div className="embla" style={{ marginTop: 24 }}>
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {PRODUCTS.map((p, i) => (
                <div className="embla__slide" key={i}>
                  <article className="card card--product">
                    <div>
                      <h3 className="heading-md" style={{ marginBottom: 10 }}>
                        {p.title}
                      </h3>
                      <p className="subtle" style={{ margin: 0 }}>
                        {p.desc}
                      </p>
                    </div>
                    <button
                      className="btn btn--ghost"
                      style={{ marginTop: 18 }}
                    >
                      {p.cta}
                    </button>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            className="embla__prev btn btn--primary"
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            className="embla__next btn btn--primary"
            onClick={scrollNext}
            aria-label="Next slide"
          >
            ›
          </button>

          {/* Dots */}
          <div className="embla__dots">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`embla__dot ${
                  i === selectedIndex ? "embla__dot--active" : ""
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
