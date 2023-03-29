export default function Content(props) {
  return (
    <section className=" relative md:px-20 max-w-screen-xl mx-auto">
      

      <div className="py-5 flex justify-between items-center">
        <p className="font-rubik font-light text-6xl p-2 tracking-wider leading-relaxed uppercase">
          {props.data.title}
        </p>
        <p className="font-rubik font-light text-base tracking-wider leading-6">
          {props.data.description}
        </p>
      </div>

      <div className="py-5">{props.data.image}</div>

      

      <div className="flex justify-between px-3 py-5">
        <div className="w-1/3 relative">
          {props.data.imagecontent[0]}
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold text-center">
            SILLAS
          </p>
        </div>

        <div className="w-1/3 relative">
          {props.data.imagecontent[1]}
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold text-center">
            ESCRITORIOS
          </p>
        </div>

        <div className="w-1/3 relative">
          {props.data.imagecontent[2]}
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold text-center">
            SISTEMAS MODULARES
          </p>
        </div>
      </div>
    </section>
  );
}
