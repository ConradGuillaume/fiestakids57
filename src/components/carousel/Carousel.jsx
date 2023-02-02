import React from "react";
import { useState, useEffect } from "react";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const images = [
    { src: "../../style/img/backpic/chateau.jpg", alt: "Image 1" },
    { src: "../../style/img/backpic/fille_ballon.jpg", alt: "Image 2" },
    { src: "../../style/img/backpic/peinture.webp", alt: "Image 3" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel">
      {images.map((image, i) => (
        <div
          key={i}
          className="slide"
          style={{ display: i === index ? "flex" : "none" }}
        >
          <img src={image.src} alt={image.alt} />
        </div>
      ))}

    </div>
  );
};

export default Carousel;
