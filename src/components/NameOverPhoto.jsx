//construccion de componente

{/* <NamOverPhot 
  src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1662574747810-DVCK29S57X475CZR6JNR/DSC00276.jpg"
  alt="Mesa silla blanca ext"
  title="Mesa silla blanca ext"
  text="SISTEMAS MODULARES"
/> */}


export default function NamOverPhot(props) {
  const { src, alt, title, text } = props;
  return (
    <div className="w-1/2 relative my-auto p-2">
      <img src={src} alt={alt} title={title} />
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold text-center">
        {text}
      </p>
    </div>
  );
}
