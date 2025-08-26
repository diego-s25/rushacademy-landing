import { useEffect, useRef, useState, useCallback } from "react";

export default function HorizontalPager({ ids = [], children }) {
  const wrapRef = useRef(null);
  const [active, setActive] = useState(ids?.[0] || "");

  const onWheel = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    // Allow native vertical scroll on mobile
    const isMobile = window.matchMedia("(max-width: 1024px)").matches;
    if (isMobile) return;

    // If the wheel is over a panel that can scroll vertically in this direction,
    // let it handle the event (don't convert to horizontal).
    const panel = e.target.closest(".panel");
    if (panel) {
      const canScrollY = panel.scrollHeight > panel.clientHeight;
      if (canScrollY) {
        const atTop = panel.scrollTop <= 0;
        const atBottom =
          panel.scrollTop + panel.clientHeight >= panel.scrollHeight - 1;
        const goingUp = e.deltaY < 0;
        const goingDown = e.deltaY > 0;
        // When not at an edge in the direction we're going, let the panel scroll.
        if ((goingUp && !atTop) || (goingDown && !atBottom)) {
          return; // do not preventDefault; native vertical scroll proceeds
        }
      }
    }

    // Otherwise, translate vertical wheel into horizontal paging.
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }
  };

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
      <div ref={wrapRef} className="hscroll" id="hscroll" onWheel={onWheel}>
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
