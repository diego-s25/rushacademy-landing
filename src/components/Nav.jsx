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
        {/* Logo */}
        <a
          href="#top"
          className="nav__logo"
          style={{ display: "flex", alignItems: "center", gap: 12 }}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/CryptoRush%2Fcryptorush_logo.png?alt=media&token=28dd84d1-4d99-483e-b9f5-9048d867b480"
            alt="CryptoRush"
            height={28}
            style={{ display: "block", height: 28, width: "auto" }}
            loading="lazy"
            decoding="async"
          />
        </a>

        {/* Links */}
        <nav className="nav__links">
          <a href="#products">Productos</a>
          <a href="#companies">Empresas</a>
          <a href="#team">Team Rush</a>
          <a href="#contact">Contacto</a>
        </nav>

        {/* (Hidden) CTA */}
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
