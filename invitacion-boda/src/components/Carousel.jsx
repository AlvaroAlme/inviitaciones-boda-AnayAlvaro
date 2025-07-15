// src/components/Carousel.jsx
import { useState, useEffect } from "react";

const images = [
  "/img/slide1.jpg",
  "/img/slide2.jpg",
  "/img/slide3.jpg",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Capa oscura para legibilidad del texto */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
}
