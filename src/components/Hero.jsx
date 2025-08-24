import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="section hero">
      <div className="hero__bg" />
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: "center", gap: 28 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center px-4">
                <h1 className="heading-xl text-gradient">
                  Expertos en Soluciones Blockchain Personalizadas
                </h1>

                <p className="lead" style={{ marginTop: 10 }}>
                  Expertos en Proyectos Web3 Personalizados.
                </p>

                <div style={{ marginTop: 18 }}>
                  <a href="#productos" className="btn btn--primary">
                    Explora nuestros productos
                  </a>
                  <span style={{ display: "inline-block", width: 10 }} />
                  <a href="#contacto" className="btn btn--ghost">
                    Contáctanos
                  </a>
                </div>

                <p className="subtle" style={{ marginTop: 10 }}>
                  Lidera el futuro digital bajo un marco regulatorio sólido.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="card" style={{ position: "relative", padding: 24 }}>
              <div
                style={{
                  aspectRatio: "4 / 3",
                  borderRadius: 12,
                  background:
                    "linear-gradient(135deg, rgba(34,211,238,.20), rgba(79,70,229,.20))",
                  border: "1px solid var(--ring)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: -6,
                  borderRadius: 16,
                  filter: "blur(24px)",
                  opacity: 0.2,
                  background:
                    "linear-gradient(90deg,var(--brand-a),var(--brand-b))",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
