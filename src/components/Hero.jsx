export default function Hero() {
  const go = (id) => {
    window.__scrollToPanel?.(id) ??
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="container hero__wrap">
        <h1 className="hero__title" aria-label="Qué vamos a crear hoy">
          <span className="hero__gradient">Lidera</span> El Futuro con
          Habilidades en Blockchain
        </h1>

        <p className="hero__sub">
          Revoluciona tu Potencial: aprende, crea y certifícate con RushAcademy
          en Blockchain y Web3.
        </p>

        <div className="hero__ctas">
          <button className="btn btn--primary" onClick={() => go("contact")}>
            Empieza a aprender
          </button>
        </div>
      </div>
    </div>
  );
}
