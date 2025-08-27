import React from "react";

export default function Modality() {
  return (
    <section className="modalitySection">
      <h2 className="sectionTitle">Modalidad Académica</h2>
      <p className="sectionSubtitle">Estudia como te funcione mejor</p>
      <div className="modalityCards">
        <div className="modalityCard">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2FModality%2Fmodality1.jpeg?alt=media&token=a914d54b-471f-4ca3-b1ff-8a88e084007f"
            alt="Presencial"
            className="modalityIcon"
          />
          <h3>Presencial</h3>
          <p>Sesiones en campus/centro aliado.</p>
        </div>

        <div className="modalityCard">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2FModality%2Fmodality2.jpeg?alt=media&token=476257aa-805f-4f74-807f-032a0a411982"
            alt="Online"
            className="modalityIcon"
          />
          <h3>Online</h3>
          <p>En vivo y on-demand con soporte.</p>
        </div>

        <div className="modalityCard">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/RushAcademy%2FModality%2Fmodality3.jpeg?alt=media&token=d0ccee7d-abd7-44b4-bd68-8c4b8840f4a0"
            alt="Híbrida"
            className="modalityIcon"
          />
          <h3>Híbrida</h3>
          <p>Combina lo mejor de ambos.</p>
        </div>
      </div>
    </section>
  );
}
