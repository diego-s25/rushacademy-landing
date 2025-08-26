import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 6);
    onS();
    window.addEventListener("scroll", onS);
    return () => window.removeEventListener("scroll", onS);
  }, []);

  return (
    <header
      className="nav"
      style={{ background: scrolled ? "rgba(0,0,0,.45)" : "rgba(0,0,0,.30)" }}
    >
      <div className="container nav__row">
        <a
          href="#top"
          style={{ display: "flex", alignItems: "center", gap: 12 }}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/CryptoRush%2Fcryptorush_logo.png?alt=media&token=28dd84d1-4d99-483e-b9f5-9048d867b480"
            alt="CryptoRush logo"
            style={{ height: 28 }}
          />
          {/* <strong style={{ color: "#fff" }}>CryptoRush</strong> */}
        </a>

        <nav className="nav__links">
          <a href="#products">Productos &amp; Servicios</a>
          <a href="#companies">Empresas</a>
          <a href="#academy">Academy</a>
          <a href="#team">Team Rush</a>
          <a href="#contact">Contacto</a>
        </nav>

        <a
          href="#contact"
          className="btn btn--primary"
          style={{ display: "none" }}
          aria-hidden
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
