// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__nav">
          <a href="#cursos">Cursos</a>
          <a href="#maestrias">Maestrías</a>
          <a href="#precios">Precios</a>
          <a href="#empresas">Empresas</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#ayuda">Ayuda</a>
        </nav>

        <nav className="footer__subnav">
          <a href="#privacidad">Privacidad</a>
          <a href="#terminos">Términos</a>
          <a href="#cookies">Cookies</a>
        </nav>

        <p className="footer__copy">© Crypto Rush Academy</p>
      </div>
    </footer>
  );
}
