import React from "react";

export default function Modality() {
  return (
    <section className="modality">
      <div className="container">
        <h2 className="modality__title">Modalidad Académica</h2>
        <p className="modality__intro">Estudia como te funcione mejor</p>

        <div className="modality__grid">
          <div className="modality__card">
            <h3>Presencial</h3>
            <p>Sesiones en campus/centro aliado.</p>
          </div>
          <div className="modality__card">
            <h3>Online</h3>
            <p>En vivo y on-demand con soporte.</p>
          </div>
          <div className="modality__card">
            <h3>Híbrida</h3>
            <p>Combina lo mejor de ambos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
