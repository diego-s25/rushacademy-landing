import { useEffect, useRef, useState } from "react";

const NAV = [
  { id: "products", label: "Productos & Servicios" },
  { id: "companies", label: "Empresas" },
  { id: "academy", label: "Academy" },
  { id: "team", label: "Team Rush" },
  { id: "contact", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const sheetRef = useRef(null);
  const firstLinkRef = useRef(null);

  const close = () => setOpen(false);
  const go = (id) => {
    close();
    // Give the sheet time to close before scrolling
    requestAnimationFrame(() => {
      if (typeof window.__scrollToPanel === "function") {
        window.__scrollToPanel(id);
      } else {
        // fallback — anchor within the section
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  // Lock body scroll when open + focus trap
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) {
      document.body.style.overflow = "hidden";
      // move focus to first link for a11y
      setTimeout(() => firstLinkRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = prev || "";
    }
    return () => (document.body.style.overflow = prev || "");
  }, [open]);

  // ESC to close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Swipe-down to close (nice-to-have)
  useEffect(() => {
    if (!open) return;
    const el = sheetRef.current;
    if (!el) return;
    let startY = 0;
    let moved = 0;

    const onStart = (e) => {
      startY = e.touches?.[0]?.clientY ?? 0;
      moved = 0;
    };
    const onMove = (e) => {
      const y = e.touches?.[0]?.clientY ?? 0;
      moved = y - startY;
      // Pull sheet down slightly for feedback
      if (moved > 0) {
        el.style.transform = `translate3d(0, ${Math.min(moved, 80)}px, 0)`;
      }
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
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/CryptoRush%2Fcryptorush_logo.png?alt=media&token=28dd84d1-4d99-483e-b9f5-9048d867b480"
            alt="CryptoRush"
            height="28"
          />
        </a>

        {/* Desktop links */}
        <nav className="nav__links nav__links--desktop" aria-label="Primary">
          {NAV.map((item) => (
            <button
              key={item.id}
              className="nav__link"
              onClick={() => go(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="navsheet"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
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
          aria-label="Close"
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
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/CryptoRush%2Fcryptorush_logo.png?alt=media&token=28dd84d1-4d99-483e-b9f5-9048d867b480"
                alt="CryptoRush"
                height="28"
              />
            </a>
            <button
              className="navsheet__close"
              aria-label="Close menu"
              onClick={close}
            >
              ✕
            </button>
          </div>

          <nav className="navsheet__links container" aria-label="Mobile">
            {NAV.map((item, i) => (
              <button
                key={item.id}
                ref={i === 0 ? firstLinkRef : undefined}
                className="navsheet__link"
                onClick={() => go(item.id)}
              >
                <span>{item.label}</span>
                <i className="navsheet__underline" />
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
