export default function Nav() {
  const go = (id) => {
    if (window.__scrollToPanel) window.__scrollToPanel(id);
  };

  return (
    <header className="nav" /* ... */>
      <div className="container nav__row">
        <a
          href="#top"
          style={{ display: "flex", alignItems: "center", gap: 12 }}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/CryptoRush%2Fcryptorush_logo.png?alt=media&token=28dd84d1-4d99-483e-b9f5-9048d867b480"
            alt="CryptoRush Logo"
            style={{ height: 32, width: "auto", display: "block" }}
          />
        </a>
        <nav className="nav__links">
          <button className="nav__link" onClick={() => go("products")}>
            Productos
          </button>
          <button className="nav__link" onClick={() => go("companies")}>
            Empresas
          </button>
          <button className="nav__link" onClick={() => go("team")}>
            Team Rush
          </button>
          <button className="nav__link" onClick={() => go("contact")}>
            Contacto
          </button>
        </nav>
      </div>
    </header>
  );
}
