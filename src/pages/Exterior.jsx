import Line from "../components/SectionLine";
import NamOverPhot from "../components/NameOverPhoto";
import isotipoJaySA from "/public/siesta_exclusive_logo_black.jpg";

const sectionContent = {
  mainTitle: "modelos exterior",
  mainDescription:
    "Mobiliario ergonómico de tendencia para espacios de trabajo,oficinas y ambientes ejecutivos de todo tipo. Variedad de sillas,mesas, escritorios, recepciones, sala de reuniones y espacios compartidos, todos pensados en la funcionalidad necesaria para los espacios corporativos actuales.",
    mainImage: "https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/5b17c9b4-59cd-4345-8865-244ad5a9eea2/SKY+LOUNGE+crop.jpg",
    isotipoImage: isotipoJaySA,
};

export default function Exterior() {
    return (
      <div className="px-20 pt-16 p-3 max-w-screen-xl mx-auto ">
      <Line  sectionContent={sectionContent} /> 

      <div className="grid grid-cols-3 justify-items-center  ">

      <NamOverPhot
          src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1593451395895-TN2E20YULUSF2EKLM3LP/thumb_new_contract_gallery_339_air%402x.jpg"
          alt="silla blanca"
          title="silla blanca"
          text="SILLAS"
        />

<NamOverPhot
          src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1595024785631-ONNK07URBM5O5GU327PV/new_contract_gallery_373_air_65%402x.jpg"
          alt="silla blanca"
          title="silla blanca"
          text="TABURETE"
        />
        <NamOverPhot
          src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1595601639468-XH34X74DSQ7RNG2S2GJV/image-thumb-1540283087-9004.jpg"
          alt="silla blanca"
          title="silla blanca"
          text="MESA"
        />
        <NamOverPhot
          src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1595605161860-B85L62JVFM52S9WJZF6T/thumb_new_rattan_gallery_003_fiji_ml_sidetable%402x.jpg"
          alt="silla blanca"
          title="silla blanca"
          text="TUMBONAS"
        />
        <NamOverPhot
          src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1595605310032-WWQZBII2NLAZ7O3LJSU7/thumb_new_rattan_gallery_129_ml_set%402.jpg"
          alt="silla blanca"
          title="silla blanca"
          text="LOUNGE"
        />
        <NamOverPhot
          src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1568147576629-7OC0D7V3DLM035IMJS62/new_rattan_gallery_138_hawaii%402.jpg"
          alt="silla blanca"
          title="silla blanca"
          text="COLUMPIO"
        />
        

      </div>

      
      </div>);
}