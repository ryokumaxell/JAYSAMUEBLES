import Line from "../components/SectionLine";
import NamOverPhot from "../components/NameOverPhoto";
import Carrusel from "../components/Hero";


const sectionContent = {
  mainTitle: "MODELOS OFICINA",
  mainDescription:
    "Mobiliario ergonómico de tendencia para espacios de trabajo,oficinas y ambientes ejecutivos de todo tipo. Variedad de sillas,mesas, escritorios, recepciones, sala de reuniones y espacios compartidos, todos pensados en la funcionalidad necesaria para los espacios corporativos actuales.",
    mainImage: "https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1662655441708-3N9AAX3DJR11TQ1KMS7C/DSC09779+Mesa+silla+verde+crop.jpg"
};

const sectionContent1 = {
  mainTitle: "MODELOS EXTERIOR",
  mainDescription:
    "Amplia línea que incluye sillas, taburetes, tumbonas y mesas, todos diseñados para ser multifuncionales y con un estilo auténtico, moderno y novedoso.  Fabricados con materiales de tendencia como el policarbonato transparente, y resistentes a condiciones medioambientales usuales.",
    mainImage: "https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/5b17c9b4-59cd-4345-8865-244ad5a9eea2/SKY+LOUNGE+crop.jpg"
};

export default function Home(props) {
  return (
    <>
      <Carrusel />

      {/* seccion de mobiliario oficina  */}
    <section className="px-20 pt-5 p-3 max-w-screen-xl mx-auto ">
      <Line sectionContent={sectionContent} />

      <div className="flex ">
        <NamOverPhot
          src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1603938240291-QUTS561YKK05AVE04C79/black+mesh.jpg"
          alt="silla blanca"
          title="silla blanca"
          text="SILLAS DE ESCRITORIO"
        />

        <NamOverPhot
          src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1662574927773-OBTQ59SZMZBBZLSWVZLO/DSC00260.JPG"
          alt="silla blanca"
          title="silla blanca"
          text="SILLAS DE ESCRITORIO"
        />

        <NamOverPhot
          src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1662574747810-DVCK29S57X475CZR6JNR/DSC00276.jpg"
          alt="silla blanca"
          title="silla blanca"
          text="SILLAS DE ESCRITORIO"
        />
      </div>
      
      </section>
      
      {/* seccion de mobiliario exterio  */}

      <section  className="px-20 pt-5 p-3 max-w-screen-xl mx-auto " >
      <Line sectionContent={sectionContent1} />

      <div className="flex max-w-screen-xl">
        <NamOverPhot
          src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1662576537788-68IGY6E1XXLARBTYMLAN/new_contract_gallery_498_air_ailesi%25402x.jpg"
          alt="silla blanca"
          title="silla blanca"
          text="SILLAS DE ESCRITORIO"
        />

        <NamOverPhot
          src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1662575980884-XGZW9YQDWUJ8RPQFUDBJ/500_air_air140.jpg"
          alt="silla blanca"
          title="silla blanca"
          text="SILLAS DE ESCRITORIO"
        />

        <NamOverPhot
          src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1662576593646-DGT31UA0VYEY9RNOY0O6/image-small-1578294193-7068.jpg"
          alt="silla blanca"
          title="silla blanca"
          text="SILLAS DE ESCRITORIO"
        />
      </div>
      </section>
    </>
  );
}
