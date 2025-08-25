import { useEffect, useRef, useState, useCallback } from "react";

export default function HorizontalPager({ ids = [], children }) {
  const wrapRef = useRef(null);
  const [active, setActive] = useState(ids?.[0] || "");

  // Convert vertical wheel to horizontal scroll
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const onWheel = (e) => {
      // Allow native vertical scroll on mobile / fallback mode
      const isMobile = window.matchMedia("(max-width: 1024px)").matches;
      if (isMobile) return;

      // Horizontal paging with wheel
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Observe panels to update active link
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const panels = [...el.querySelectorAll("[data-panel-id]")];

    const io = new IntersectionObserver(
      (entries) => {
        // the most centered panel wins
        const viewportCenter = el.scrollLeft + el.clientWidth / 2;
        let best = { id: active, dist: Infinity };

        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const rect = entry.target.getBoundingClientRect();
          const center = rect.left + el.scrollLeft + rect.width / 2;
          const dist = Math.abs(center - viewportCenter);
          const id = entry.target.getAttribute("data-panel-id");
          if (dist < best.dist) best = { id, dist };
        });

        if (best.id && best.id !== active) setActive(best.id);
      },
      {
        root: el,
        threshold: 0.6, // panel must cover 60% to be considered
      }
    );

    panels.forEach((p) => io.observe(p));
    return () => io.disconnect();
  }, [active]);

  // Public scrollTo
  const scrollToId = useCallback((id) => {
    const el = wrapRef.current;
    if (!el) return;
    const target = el.querySelector(`[data-panel-id="${id}"]`);
    if (!target) return;
    el.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
  }, []);

  // Expose a global function the Nav can call (simple way)
  useEffect(() => {
    window.__scrollToPanel = scrollToId;
  }, [scrollToId]);

  return (
    <>
      <div ref={wrapRef} className="hscroll" id="hscroll">
        {children}
      </div>

      {/* Optional: dots indicator */}
      <div className="hscroll__dots" aria-hidden>
        {ids.map((id) => (
          <button
            key={id}
            className={`hscroll__dot ${active === id ? "is-active" : ""}`}
            onClick={() => scrollToId(id)}
            title={id}
          />
        ))}
      </div>
    </>
  );
}
