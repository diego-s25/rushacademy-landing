import { useEffect, useRef, useState } from "react";

const NAV = [
  { id: "cursos", label: "Cursos" },
  { id: "maestrias", label: "Maestrías" },
  { id: "precios", label: "Precios" },
  { id: "empresas", label: "Empresas" },
  { id: "nosotros", label: "Nosotros" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const sheetRef = useRef(null);
  const firstLinkRef = useRef(null);

  const close = () => setOpen(false);
  const go = (id) => {
    close();
    requestAnimationFrame(() => {
      if (typeof window.__scrollToPanel === "function") {
        window.__scrollToPanel(id);
      } else {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  // lock body + focus first item when open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstLinkRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = prev || "";
    }
    return () => (document.body.style.overflow = prev || "");
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // swipe-down to close on mobile
  useEffect(() => {
    if (!open) return;
    const el = sheetRef.current;
    if (!el) return;
    let startY = 0,
      moved = 0;
    const onStart = (e) => {
      startY = e.touches?.[0]?.clientY ?? 0;
      moved = 0;
    };
    const onMove = (e) => {
      const y = e.touches?.[0]?.clientY ?? 0;
      moved = y - startY;
      if (moved > 0)
        el.style.transform = `translate3d(0, ${Math.min(moved, 80)}px, 0)`;
    };
    const onEnd = () => {
      el.style.transform = "";
      if (moved > 60) setOpen(false);
    };
    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: true });
    el.addEventListener("touchend", onEnd);
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onEnd);
    };
  }, [open]);

  return (
    <header className="nav">
      <div className="container nav__row">
        {/* Logo */}
        <a
          className="nav__brand"
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
          aria-label="Ir al inicio"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2Frush_academy_nav_logo.png?alt=media&token=646f545e-aecb-4218-ac7d-98f5f2e6a2a2"
            alt="RushAcademy"
            height="50"
          />
        </a>

        {/* Center menu (desktop) */}
        <nav className="nav__links nav__links--desktop" aria-label="Principal">
          {NAV.map((item) => (
            <button
              key={item.id}
              className="nav__link"
              onClick={() => go(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right actions (desktop) */}
        <div className="nav__actions">
          <a
            href="#login"
            className="btn btn--outline nav__auth"
            onClick={(e) => e.preventDefault()}
          >
            Inicia sesión
          </a>
          <a
            href="#signup"
            className="btn nav__auth" /* gradient brand purple via globals.scss */
            onClick={(e) => e.preventDefault()}
          >
            Empieza gratis
          </a>

          {/* Mobile hamburger */}
          <button
            className={`nav__burger ${open ? "is-open" : ""}`}
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="navsheet"
            onClick={() => setOpen(!open)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`navsheet ${open ? "is-open" : ""}`}
        id="navsheet"
        role="dialog"
        aria-modal="true"
        aria-label="Navegación"
      >
        <button
          className="navsheet__backdrop"
          aria-label="Cerrar"
          onClick={close}
        />
        <div className="navsheet__panel" ref={sheetRef}>
          <div className="navsheet__header container">
            <a
              className="nav__brand"
              href="/#"
              onClick={(e) => {
                e.preventDefault();
                go("home");
              }}
              aria-label="Ir al inicio"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2Frush_academy_nav_logo.png?alt=media&token=646f545e-aecb-4218-ac7d-98f5f2e6a2a2"
                alt="RushAcademy"
                height="50"
              />
            </a>
            <button
              className="navsheet__close"
              aria-label="Cerrar menú"
              onClick={close}
            >
              ✕
            </button>
          </div>

          <nav className="navsheet__links container" aria-label="Móvil">
            {NAV.map((item, i) => (
              <button
                key={item.id}
                ref={i === 0 ? firstLinkRef : undefined}
                className="navsheet__link"
                onClick={() => go(item.id)}
                type="button"
              >
                <span>{item.label}</span>
                <i className="navsheet__underline" />
              </button>
            ))}
          </nav>

          {/* Mobile actions */}
          <div
            className="container nav__mActions"
            style={{ padding: "1rem 0 1.25rem" }}
          >
            <a
              href="#login"
              className="btn btn--outline"
              onClick={(e) => e.preventDefault()}
            >
              Inicia sesión
            </a>
            <a
              href="#signup"
              className="btn"
              onClick={(e) => e.preventDefault()}
            >
              Empieza gratis
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
