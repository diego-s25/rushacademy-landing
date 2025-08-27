// src/components/ImpactMosaic.jsx
import React from "react";

const IMPACT = [
  {
    icon: "🌐",
    title: "Ecosistema educativo",
    desc: "Crear un ecosistema educativo referente para El Salvador y LATAM en Web3.",
  },
  {
    icon: "🧠",
    title: "Líderes que innovan",
    desc: "Formar líderes capaces de crear e innovar con tecnologías descentralizadas.",
  },
  {
    icon: "🚀",
    title: "Startups e infraestructura",
    desc: "Fomentar startups, soluciones empresariales, marcos legales e infraestructura blockchain.",
  },
  {
    icon: "🤖",
    title: "IA en Blockchain",
    desc: "Promover la integración de IA para escalabilidad, seguridad y eficiencia en blockchain.",
  },
];

export default function ImpactMosaic() {
  return (
    <section id="impacto" className="impact">
      <div className="container">
        <header className="impact__head">
          <h2 className="sectionTitle">Impacto esperado</h2>
        </header>

        <div className="impact__grid">
          {IMPACT.map(({ icon, title, desc }, i) => (
            <article className="impact__card" key={i}>
              <div className="impact__icon" aria-hidden="true">
                {icon}
              </div>
              <h3 className="impact__title">{title}</h3>
              <p className="impact__desc">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
