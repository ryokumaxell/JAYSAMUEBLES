import Line from "../components/SectionLine";
import NamOverPhot from "../components/NameOverPhoto";
import isotipoJaySA from "/public/ISOTIPO JAYSA.jpg";

const sectionContent = {
  mainTitle: "MODELOS OFICINA",
  mainDescription:
    "Mobiliario ergonómico de tendencia para espacios de trabajo,oficinas y ambientes ejecutivos de todo tipo. Variedad de sillas,mesas, escritorios, recepciones, sala de reuniones y espacios compartidos, todos pensados en la funcionalidad necesaria para los espacios corporativos actuales.",
    mainImage: "https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1662655441708-3N9AAX3DJR11TQ1KMS7C/DSC09779+Mesa+silla+verde+crop.jpg",
    isotipoImage: isotipoJaySA,
};



export default function Oficina(props) {
    return (
      <div className="px-20 pt-16 p-3 max-w-screen-xl mx-auto ">
      <Line  sectionContent={sectionContent} /> 

      

      <div className="grid grid-cols-3 justify-items-center ">

      <NamOverPhot
          src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1588254952733-WUUG3Z78SX5D9XMT84CV/CORE-BGA1.jpg"
          alt="silla blanca"
          title="silla blanca"
          text="SILLAS DE ESCRITORIO"
        />

<NamOverPhot
          src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1588255000095-4KBC89CQUW245OJ53LVZ/SIGHT-BN1.jpg"
          alt="silla blanca"
          title="silla blanca"
          text="TABURETE DE ESCRITORIO"
        />
        <NamOverPhot
          src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1588255060021-JYHX9U053CGI9BF8CY8W/03-.jpg?format=300w"
          alt="silla blanca"
          title="silla blanca"
          text="ESCRITORIO"
        />
        <NamOverPhot
          src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1588255103127-YMM3Q52TNNE7M5O7TE10/MWS103524X.GB.jpg"
          alt="silla blanca"
          title="silla blanca"
          text="MESA DE REUNIONES"
        />
        <NamOverPhot
          src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1588255226403-BOLT5PFOKNJMGCC9GRKG/arch.jpg"
          alt="silla blanca"
          title="silla blanca"
          text="ARCIVO"
        />
        <NamOverPhot
          src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1588255427291-EAAPH7KI4X804DG29JLW/MWJMRT120R.GB.jpg"
          alt="silla blanca"
          title="silla blanca"
          text="CREDENZA"
        />
        <NamOverPhot
          src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1588255445859-I435OI1NP707SYYEBSTO/MWJMESTA20L.GB.png"
          alt="silla blanca"
          title="silla blanca"
          text="ESTANTES"
        />
        <NamOverPhot
          src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1588255505800-SNXIWU4WM8B3E010JMMX/SISTEMAS%252BMODULARES.jpg"
          alt="silla blanca"
          title="silla blanca"
          text="SISTEMA MODULARES"
        />
        <NamOverPhot
          src="https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/ubi_organizers/ig_prd_ovw_ubi_organizers_09.jpg.rendition.480.480.jpg"
          alt="silla blanca"
          title="silla blanca"
          text="ACCESORIOS"
        />

      </div>

      
      </div>);
}