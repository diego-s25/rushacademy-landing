// src/components/PricingPlans.jsx
import React from "react";

const PLANS = [
  {
    name: "Gratis",
    desc: "Lecciones intro + comunidad + certificado básico.",
    cta: "Empieza gratis",
    highlight: false,
    icon: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2FPricingPlans%2FPricingPlans1.jpeg?alt=media&token=1f1f9dba-e7b5-4d6e-a03b-df775d4c880d",
  },
  {
    name: "Pro (por curso)",
    desc: "Acceso total + labs + mentoría grupal + certificado on-chain.",
    cta: "Inscribirme",
    highlight: true,
    // TODO: swap for your real icon URL
    icon: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2FPricingPlans%2FPricingPlans4.jpeg?alt=media&token=141ee004-82c3-4bc7-8b36-4ba4d183f8f1",
  },
  {
    name: "All Access (12 meses)",
    desc: "Todos los cursos + cohortes en vivo + proyectos guiados.",
    cta: "Unirme",
    highlight: false,
    // TODO: swap for your real icon URL
    icon: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2FPricingPlans%2FPricingPlans3.jpeg?alt=media&token=1a39e555-5c37-41dc-aa5a-2a4d499e35a2",
  },
  {
    name: "Empresas",
    desc: "Cohortes privadas, reporting, SSO y ruta a medida.",
    cta: "Hablar con nosotros",
    highlight: false,
    // TODO: swap for your real icon URL
    icon: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2FPricingPlans%2FPricingPlans2.jpeg?alt=media&token=ba522a6d-a789-4a22-b357-a4edb33883f8",
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
          {PLANS.map(({ name, desc, cta, highlight, icon }, i) => (
            <article
              key={i}
              className={`pricing__card ${highlight ? "is-highlight" : ""}`}
            >
              {/* NEW: plan icon */}
              {icon && (
                <div className="pricing__iconWrap" aria-hidden="true">
                  <img
                    className="pricing__icon"
                    src={icon}
                    alt=""
                    loading="lazy"
                    width="56"
                    height="56"
                  />
                </div>
              )}

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
