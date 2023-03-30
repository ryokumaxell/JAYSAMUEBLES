import React from "react";

import Carrusel from "../components/Hero";

export default function Home() {
  return (
    <>
      <Carrusel />
      <section className=" relative md:px-20 max-w-screen-xl mx-auto">
        <div className="py-5 flex justify-between items-center">
          <p className="font-rubik font-light text-6xl p-2 tracking-wider leading-relaxed uppercase">
             MODELOS OFICINA
          </p>
          <p className="font-rubik font-light p-2 text-base tracking-wider leading-6">
            Mobiliario ergonómico de tendencia para espacios de trabajo,oficinas
            y ambientes ejecutivos de todo tipo. Variedad de sillas,mesas,
            escritorios, recepciones, sala de reuniones y espacios compartidos,
            todos pensados en la funcionalidad necesaria para los espacios
            corporativos actuales.
          </p>
        </div>

        <div className="py-5">
          <img
            src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1662655441708-3N9AAX3DJR11TQ1KMS7C/DSC09779+Mesa+silla+verde+crop.jpg"
            atl="Mesa silla verde crop"
            title="Mesa silla verde crop"
          />
        </div>

        <div className="flex justify-between px-3 py-5">
          <div className="w-1/3 relative">
          <img
        src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1603938240291-QUTS561YKK05AVE04C79/black+mesh.jpg"
        alt="SILLAS DE ESCRITORIO"
      />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold text-center">
              SILLAS
            </p>
          </div>

          <div className="w-1/3 relative">
          <img
        src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1662574927773-OBTQ59SZMZBBZLSWVZLO/DSC00260.JPG"
        alt="ESCRITORIOs"
      />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold text-center">
              ESCRITORIOS
            </p>
          </div>

          <div className="w-1/3 relative">
          <img
        src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1662574747810-DVCK29S57X475CZR6JNR/DSC00276.jpg"
        atl="Mesa silla blanca ext"
        title="Mesa silla blanca ext"
      />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold text-center">
              SISTEMAS MODULARES
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
