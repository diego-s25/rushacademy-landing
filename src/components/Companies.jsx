import React from "react";

export default function Companies() {
  return (
    <section id="companies" className="section section--divider">
      <div className="container">
        {/* Section Title */}
        <h2 className="heading-lg">Blockchain para Empresas</h2>

        {/* Subtitle */}
        <p className="lead" style={{ marginTop: 12 }}>
          Soluciones escalables, seguras y reguladas para corporativos e
          instituciones.
        </p>

        {/* Value Points */}
        <ul style={{ marginTop: 28, lineHeight: 1.6 }}>
          <li>
            <strong>Cumplimiento legal:</strong> bajo la Ley de Activos
            Digitales (LEAD) y estándares internacionales AML/CFT.
          </li>
          <li>
            <strong>Infraestructura segura:</strong> KYC/KYB integrado y
            plataformas a medida.
          </li>
          <li>
            <strong>Casos de uso reales:</strong> tokenización inmobiliaria,
            inversión colectiva, trazabilidad.
          </li>
          <li>
            <strong>Ventaja competitiva:</strong> innovación, rapidez y
            confianza.
          </li>
        </ul>

        {/* CTA */}
        <div style={{ marginTop: 32 }}>
          <a href="#contact" className="btn btn--primary">
            Agenda una asesoría
          </a>
        </div>
      </div>
    </section>
  );
}
