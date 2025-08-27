// src/components/PricingPlans.jsx
import React from "react";

const PLANS = [
  {
    name: "Gratis",
    desc: "Lecciones intro + comunidad + certificado básico.",
    cta: "Empieza gratis",
    highlight: false,
  },
  {
    name: "Pro (por curso)",
    desc: "Acceso total + labs + mentoría grupal + certificado on-chain.",
    cta: "Inscribirme",
    highlight: true, // 👈 spotlight plan
  },
  {
    name: "All Access (12 meses)",
    desc: "Todos los cursos + cohortes en vivo + proyectos guiados.",
    cta: "Unirme",
    highlight: false,
  },
  {
    name: "Empresas",
    desc: "Cohortes privadas, reporting, SSO y ruta a medida.",
    cta: "Hablar con nosotros",
    highlight: false,
  },
];

export default function PricingPlans() {
  return (
    <section id="precios" className="pricing">
      <div className="container">
        <header className="pricing__head">
          <h2 className="sectionTitle">Precios</h2>
        </header>

        <div className="pricing__grid">
          {PLANS.map(({ name, desc, cta, highlight }, i) => (
            <article
              key={i}
              className={`pricing__card ${highlight ? "is-highlight" : ""}`}
            >
              <h3 className="pricing__name">{name}</h3>
              <p className="pricing__desc">{desc}</p>
              <button className="btn pricing__cta">{cta}</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
