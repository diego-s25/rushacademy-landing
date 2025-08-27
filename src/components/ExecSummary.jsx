import React from "react";
export default function ExecSummary() {
  return (
    <section id="resumen-ejecutivo" className="exec section">
      <div className="container">
        <div className="exec__grid">
          <article className="exec__card">
            <h3 className="exec__cardTitle">Quiénes somos</h3>
            <p className="exec__body">
              Somos un movimiento educativo que busca posicionar a El Salvador y
              Centroamérica como referentes en innovación tecnológica. Formamos
              líderes capaces de crear startups, impulsar proyectos blockchain y
              aplicar soluciones de inteligencia artificial que transformen
              comunidades y empresas. Nuestra misión es democratizar la
              educación Web3 y conectar el talento local con oportunidades
              globales.
            </p>
          </article>

          <article className="exec__card">
            <h3 className="exec__cardTitle">Qué obtienes tú</h3>
            <p className="exec__body">
              Al unirte, adquieres más que conocimientos técnicos: te integras a
              un ecosistema en crecimiento con mentores, profesionales y
              emprendedores de toda la región. Aprenderás con proyectos reales,
              obtendrás certificaciones digitales verificables y tendrás las
              herramientas para crear, innovar y liderar en el mercado
              tecnológico internacional.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
