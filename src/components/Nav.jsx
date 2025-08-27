import { useEffect, useRef, useState } from "react";

import clsx from "clsx";

import { createPortal } from "react-dom";

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

  useEffect(() => {
    // lock/unlock body scroll while the sheet is open
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
            className="nav__burger"
            aria-expanded={open}
            aria-controls="nav-sheet"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {createPortal(
        <>
          <div
            className={clsx("nav__overlay", { "is-open": open })}
            onClick={() => setOpen(false)}
          />
          <div
            className={clsx("nav__sheet", { "is-open": open })}
            role="dialog"
            aria-modal="true"
          >
            {/* NEW: sticky sheet header with close */}
            <div className="nav__sheetHeader">
              <span />{" "}
              {/* spacer to balance layout; keep empty or put small brand if you want */}
              <button
                className="nav__close"
                aria-label="Cerrar"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="nav__sheetInner">
              <button className="nav__mLink" onClick={() => go("cursos")}>
                Cursos
              </button>
              <button className="nav__mLink" onClick={() => go("maestrias")}>
                Maestrías
              </button>
              <button className="nav__mLink" onClick={() => go("precios")}>
                Precios
              </button>
              <button className="nav__mLink" onClick={() => go("empresas")}>
                Empresas
              </button>
              <button className="nav__mLink" onClick={() => go("nosotros")}>
                Nosotros
              </button>
            </div>

            <div className="nav__mActions">
              <a href="/#" className="btn btn--outline">
                Inicia sesión
              </a>
              <a href="/#" className="btn">
                Empieza gratis
              </a>
            </div>
          </div>
        </>,
        document.body
      )}
    </header>
  );
}
