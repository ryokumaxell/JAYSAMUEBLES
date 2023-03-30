export default function Footer() {
  return (
    <footer className="px-20 pt-5 p-3 max-w-screen-xl mx-auto">
      <hr className="border-1 border-black" />

      <div className="flex ">
        <figure className="">
          <img src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1588662722248-JHNN6NNL3LGD2XGMDGE6/icons-03.jpg" />
          <figcaption className="  -translate-x-1/2 -translate-y-1/2  text-lg  text-center">
            <strong>TRANSPORTE DISPONIBLE</strong>
            <p>
              Servicio a domicilio GRATIS en la zona metropolitana de Santo
              Domingo.
            </p>
          </figcaption>
        </figure>

        <figure className="">
          <img src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1588662853736-JPK9SVLUTFBMKPXTK0F3/icons-05.jpg" />
          <figcaption className="  -translate-x-1/2 -translate-y-1/2  text-lg  text-center">
            <strong>PAGOS ELECTRÓNICOS</strong>
            <p>
              Realice sus pagos en línea con tarjetas de crédito vía{" "}
              <em>CARDNET</em> o por transferencia bancaria.
            </p>
          </figcaption>
        </figure>

        <figure className="">
          <img src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1588662794744-OXSVZC7IBMMAVJIYKRO8/icons-02.jpg" />
          <figcaption className="  -translate-x-1/2 -translate-y-1/2  text-lg  text-center">
            <strong>ATENCIÓN AL CLIENTE</strong>
            <p>Escríbanos a nuestro Webchat, <a href="https://wa.me/message/5HN4GQU3IHBYN1">WhatsApp</a>, llámenos al <a href="tel:8095657491">809.565.7491</a> o envíenos un correo a <a href="mailto:servicio@jaysa.com">servicio@jaysa.com</a></p>
          </figcaption>
        </figure>
      </div>
      <hr className="border-1 border-black" />
    </footer>
  );
}
