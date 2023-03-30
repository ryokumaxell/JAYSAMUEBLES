import isotipoJaySA from "/public/ISOTIPO JAYSA.jpg";

const sectionContent = {
  mainTitle: "",
  mainDescription: "",
  mainImage: "",
  isotipoImage: isotipoJaySA,
};

export default function Line(props) {
  return (
    <>
      <div className="py-5 flex justify-between items-center max-w-screen-xl">
        <p className="font-rubik font-light text-6xl p-2 tracking-wider leading-relaxed uppercase">
          {props.sectionContent.mainTitle}
        </p>
        
        <img className="w-1/4" src={props.sectionContent.isotipoImage} alt="" />
      

        <p className="font-rubik font-light p-2 text-base tracking-wider leading-6">
          {props.sectionContent.mainDescription}
        </p>
      </div>

      <div className="py-5 max-w-screen-xl">
        <img
          src={props.sectionContent.mainImage}
          alt="Mesa silla verde crop"
          title="Mesa silla verde crop"
        />
      </div>
    </>
  );
}
