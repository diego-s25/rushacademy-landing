export default function Contact() {
  const hours = [
    ["Mon", "09:00 — 17:00"],
    ["Tue", "09:00 — 17:00"],
    ["Wed", "09:00 — 17:00"],
    ["Thu", "09:00 — 17:00"],
    ["Fri", "09:00 — 17:00"],
    ["Sat", "09:00 — 17:00"],
    ["Sun", "Closed"],
  ];
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="heading-lg">Contact</h2>
        <p className="lead" style={{ marginTop: 12 }}>
          Write to us or visit during office hours.
        </p>

        <div
          className="grid grid-2"
          style={{ marginTop: 26, alignItems: "start" }}
        >
          <form className="form" style={{ display: "grid", gap: 14 }}>
            <input placeholder="Name" />
            <input placeholder="Email" />
            <textarea placeholder="Message" rows={8} />
            <button className="btn btn--primary" type="button">
              Send
            </button>
            <p className="subtle" style={{ fontSize: 12, marginTop: 4 }}>
              Protected by reCAPTCHA. Privacy & Terms apply.
            </p>
          </form>

          <div style={{ paddingLeft: 0 }}>
            <h3 className="heading-md" style={{ marginTop: 0 }}>
              Or come visit us
            </h3>
            <p className="subtle" style={{ marginTop: 10 }}>
              We love to meet clients — stop by during office hours.
            </p>
            <a
              href="https://wa.me/50368534129"
              className="btn btn--primary"
              style={{ marginTop: 12 }}
            >
              WhatsApp
            </a>

            <div
              className="grid"
              style={{ gridTemplateColumns: "1fr 1fr", gap: 28, marginTop: 22 }}
            >
              <div>
                <h4 className="heading-md" style={{ fontSize: 16 }}>
                  CryptoRush
                </h4>
                <a
                  href="tel:+50368534129"
                  style={{ color: "var(--brand-a)", textDecoration: "none" }}
                >
                  +503 6853 4129
                </a>
              </div>
              <div>
                <h4 className="heading-md" style={{ fontSize: 16 }}>
                  Hours
                </h4>
                <dl
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: "6px 20px",
                    marginTop: 8,
                  }}
                >
                  {hours.map(([d, v]) => (
                    <div key={d} style={{ display: "contents" }}>
                      <dt className="subtle">{d}</dt>
                      <dd className="subtle" style={{ opacity: 0.9 }}>
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
