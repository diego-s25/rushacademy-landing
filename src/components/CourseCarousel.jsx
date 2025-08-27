import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

/**
 * Paste your Firebase download URLs below.
 * Each must include its own token=... query param (as in your example).
 */
const COURSE_IMAGES = [
  {
    alt: "Auditoría de contratos y seguridad Web3",
    src: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2FCourses%2FAuditoria%20de%20contratos.jpg?alt=media&token=2224ea0b-805f-4188-938c-b4c3fd69aea8",
  },
  // ↓ Replace the 7 placeholders with your real Firebase URLs (each has its own token)
  {
    alt: "Ciberseguridad para Protocolos Blockchain",
    src: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2FCourses%2FCiberseguridad.jpg?alt=media&token=c35d5579-f177-448f-b814-47c794236c4c",
  },
  {
    alt: "Contratos Inteligentes con Solidity",
    src: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2FCourses%2FContratos%20inteligentes.jpg?alt=media&token=eca6d41c-c105-4d05-a04e-85cd7c6335ac",
  },
  {
    alt: "Diseño y Gestión de DAO",
    src: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2FCourses%2FDisen%CC%83o%20y%20gestion%20de%20dao.jpg?alt=media&token=49fea222-e51b-4e10-905f-0833aa74a445",
  },
  {
    alt: "Fundamentos de Blockchain y Web3",
    src: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2FCourses%2FFundamentos%20blockchain.jpg?alt=media&token=2488061e-1c98-4db8-ae25-e5e93170a5ab",
  },
  {
    alt: "Blockchain + Inteligencia Artificial",
    src: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2FCourses%2Finteligencia%20artificial.jpg?alt=media&token=57477f74-0725-4968-bdcc-6b2278cd5f2d",
  },
  {
    alt: "Marketing Estratégico para Blockchain",
    src: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2FCourses%2FMarketing%20estrategico.jpg?alt=media&token=f8aae966-1d10-4d7b-89dc-51769f3f2a93",
  },
  {
    alt: "Tokenización de Activos Reales",
    src: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2FCourses%2FTokenizacio%CC%81n.jpg?alt=media&token=db0e866e-529c-4040-8a0f-9faa5eae2a47",
  },
];

export default function CourseCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    loop: false,
  });

  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevDisabled(!embla.canScrollPrev());
    setNextDisabled(!embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("reInit", onSelect);
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <section className="courseCarousel" aria-labelledby="courses-title">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {COURSE_IMAGES.map(({ src, alt }, i) => (
              <div className="embla__slide embla__slide--img" key={i}>
                <div className="imgFrame">
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    fetchpriority={i < 2 ? "high" : "low"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="embla__btn embla__btn--prev"
          aria-label="Anterior"
          onClick={() => embla && embla.scrollPrev()}
          disabled={prevDisabled}
        >
          ‹
        </button>
        <button
          className="embla__btn embla__btn--next"
          aria-label="Siguiente"
          onClick={() => embla && embla.scrollNext()}
          disabled={nextDisabled}
        >
          ›
        </button>
      </div>
    </section>
  );
}
