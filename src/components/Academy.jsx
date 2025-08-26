// src/components/Academy.jsx
export default function Academy() {
  return (
    <section aria-labelledby="academy-title" className="container">
      {/* Main section heading */}
      <h2 id="academy-title" className="heading-lg">
        Academy
      </h2>

      {/* Section subtitle / tagline */}
      <p className="lead" style={{ marginTop: 16, maxWidth: 860 }}>
        Aprende y Crece con CryptoRush Academy
      </p>

      {/* Customer-provided subtitle */}
      <p className="subtle" style={{ marginTop: 12, maxWidth: 860 }}>
        Formación en Blockchain, Tokenización, Marketing Web3 e Inteligencia
        Artificial aplicada, diseñada para estudiantes, profesionales y
        ejecutivos.
      </p>

      {/* 4 Canales de Oferta Académica */}
      <div className="grid grid-2" style={{ marginTop: 28 }}>
        <article className="card">
          <h3 className="heading-md">
            Carrera Universitaria en Blockchain + Tokenización
          </h3>
          <p className="subtle" style={{ marginTop: 8 }}>
            Forma parte de la primera generación de profesionales Web3 en LATAM
            con doble titulación en tokenización.
          </p>
        </article>

        <article className="card">
          <h3 className="heading-md">Maestrías Especializadas</h3>
          <p className="subtle" style={{ marginTop: 8 }}>
            Programas de posgrado en Blockchain, Tokenización y Marketing Web3,
            con módulos de IA aplicada.
          </p>
        </article>

        <article className="card">
          <h3 className="heading-md">Cursos Intensivos (12–24 semanas)</h3>
          <p className="subtle" style={{ marginTop: 8 }}>
            Capacitación práctica en smart contracts, tokenización,
            ciberseguridad, marketing Web3 y más.
          </p>
        </article>

        <article className="card">
          <h3 className="heading-md">Capacitación Ejecutiva</h3>
          {/* El documento no añade descripción aquí; dejamos solo el título */}
        </article>
      </div>
    </section>
  );
}
