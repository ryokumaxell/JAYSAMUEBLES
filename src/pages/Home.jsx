import React from "react";
import Content from "../components/Content";
import Carrusel from "../components/Hero";

const contentData = [
  //primera seccion del contedido de la web
  {
    image: 
      <img
        src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1662655441708-3N9AAX3DJR11TQ1KMS7C/DSC09779+Mesa+silla+verde+crop.jpg"
        atl="Mesa silla verde crop"
        title="Mesa silla verde crop"
      />
    ,
    title: "LÍNEA OFFICE",
    description:
      "Mobiliario ergonómico de tendencia para espacios de trabajo,oficinas y ambientes ejecutivos de todo tipo. Variedad de sillas,mesas, escritorios, recepciones, sala de reuniones y espacios compartidos, todos pensados en la funcionalidad necesaria para los espacios corporativos actuales.",
    imagecontent: [
      <img
        src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1603938240291-QUTS561YKK05AVE04C79/black+mesh.jpg?format=300w"
        alt="SILLAS DE ESCRITORIO"
      />,
      <img
        src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1662574927773-OBTQ59SZMZBBZLSWVZLO/DSC00260.JPG?format=500w"
        alt="ESCRITORIOs"
      />,
      <img
        src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1662574747810-DVCK29S57X475CZR6JNR/DSC00276.jpg?format=500w"
        alt="SISTEMAS MODULARES"
      />,
    ],
  },
  //siguiente seccion
  {
    image: (
      <img
        src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/5b17c9b4-59cd-4345-8865-244ad5a9eea2/SKY+LOUNGE+crop.jpg"
        atl="Mesa silla blanca ext"
        title="Mesa silla blanca ext"
      />
    ),
    title: "LÍNEA CONTRACT",
    description:
      "Amplia línea que incluye sillas, taburetes, tumbonas y mesas, todos diseñados para ser multifuncionales y con un estilo auténtico, moderno y novedoso.  Fabricados con materiales de tendencia como el policarbonato transparente, y resistentes a condiciones medioambientales usuales.",
    imagecontent: [
      <img
        src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1662576537788-68IGY6E1XXLARBTYMLAN/new_contract_gallery_498_air_ailesi%25402x.jpg"
        alt="SILLAS"
      />,
      <img
        src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1662575980884-XGZW9YQDWUJ8RPQFUDBJ/500_air_air140.jpg"
        alt="MESAS"
      />,
      <img
        src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1662576593646-DGT31UA0VYEY9RNOY0O6/image-small-1578294193-7068.jpg"
        alt="TUMBONAS Y LOUNGES"
      />,
    ],
  },
];

export default function Home() {
  return (
    <>
    <Carrusel/>
      <Content data={contentData[0]} />
      <Content data={contentData[1]} />
    </>
  );
}
