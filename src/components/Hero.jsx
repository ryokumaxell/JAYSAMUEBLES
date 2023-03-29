import React, { useState, useEffect } from "react";

export default function Carrusel() {
  const images = [
    "https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1588738892762-LVNCDRR4XH2EW882ZBZ7/fotogris.jpg",
    "https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1588739352961-YJYQTJWVSRRDH64CD29V/fotoverde.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-screen  pt-20 max-w-screen-xl mx-auto ">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Imagen del carrusel ${index + 1}`}
          className={`absolute w-full h-full transition-opacity duration-500 rounded-lg ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
