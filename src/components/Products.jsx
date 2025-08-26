// src/components/Products.jsx
// NOTE: Uses only the customer-provided titles. No descriptions are added.

const ITEMS = [
  // Keep exactly what you already have (titles/kinds from the “new bible” doc)
  // Examples:
  { kind: "Producto", title: "WRush Wallet" },
  { kind: "Producto", title: "Tokenización de Activos Físicos" },
  { kind: "Servicio", title: "SaaS (Software as a Service)" },
  {
    kind: "Servicio",
    title: "Desarrollo y posicionamiento de productos blockchain",
  },
  {
    kind: "Servicio",
    title: "Asesoria y consultoria técnica de productos blockchain",
  },
  {
    kind: "Servicio",
    title: "Asesoria y consultoria legal de productos blockchain",
  },
  {
    kind: "Servicio",
    title: "Asesoria y consultoria de mercadeo de productos blockchain",
  },
  // …include the rest of your customer-provided items here
];

export default function Products() {
  return (
    <section id="products" className="container">
      <h2 className="heading-xl">Productos &amp; Servicios</h2>

      <div className="products">
        {ITEMS.map((item) => (
          <article className="product-card" key={item.title}>
            {item.kind && (
              <span className="product-kind" aria-label="Tipo">
                {item.kind}
              </span>
            )}
            <h3 className="product-title">{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
