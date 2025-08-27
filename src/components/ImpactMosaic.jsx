const impacts = [
  {
    title: "Ecosistema educativo",
    desc: "Crear un ecosistema educativo referente para El Salvador y LATAM en Web3.",
    icon: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2FImpacts%2FImpacts3.jpeg?alt=media&token=feb9c2ef-4d29-4b25-acec-8a1315c11bce",
  },
  {
    title: "Líderes que innovan",
    desc: "Formar líderes capaces de crear e innovar con tecnologías descentralizadas.",
    icon: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2FImpacts%2FImpacts4.jpeg?alt=media&token=4a16fd60-ce60-429f-92f0-7b7ecfe2a964",
  },
  {
    title: "Startups e infraestructura",
    desc: "Fomentar startups, soluciones empresariales, marcos legales e infraestructura blockchain.",
    icon: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2FImpacts%2FImpacts2.jpeg?alt=media&token=e5de1f51-4413-497e-986d-42b58d4d5346",
  },
  {
    title: "IA en Blockchain",
    desc: "Promover la integración de IA para escalabilidad, seguridad y eficiencia en blockchain.",
    icon: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2FImpacts%2FImpacts1.jpeg?alt=media&token=520963cb-895a-4a63-a2f6-919040101b17",
  },
];

export default function Impacts() {
  return (
    <section className="impacts">
      <div className="container">
        <h2 className="impacts__head">Impacto esperado</h2>
        <div className="impacts__grid">
          {impacts.map((item, i) => (
            <div key={i} className="impacts__card">
              <div className="impacts__iconWrap">
                <img src={item.icon} alt="" className="impacts__icon" />
              </div>
              <h3 className="impacts__title">{item.title}</h3>
              <p className="impacts__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
