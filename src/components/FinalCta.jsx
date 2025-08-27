// src/components/FinalCta.jsx
import React from "react";

export default function FinalCta() {
  return (
    <section className="finalCta" aria-labelledby="final-cta-title">
      <div className="container">
        <div className="finalCta__card">
          <h2 id="final-cta-title" className="finalCta__title">
            ¿Listo para dar tu primer paso en Web3?
          </h2>
          <a href="#signup" className="btn finalCta__btn">
            Crear tu cuenta gratis
          </a>
        </div>
      </div>
    </section>
  );
}
