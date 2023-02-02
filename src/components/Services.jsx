import React from "react";
import { useState, useEffect } from "react";
import image1 from "../style/img/backpic/chateau.jpg";
import image2 from "../style/img/backpic/fille_ballon.jpg";
import image3 from "../style/img/backpic/peinture.webp";

const Services = () => {
  const [index, setIndex] = useState(0);
  const images = [
    { src: image1, alt: "Image 1" },
    { src: image2, alt: "Image 2" },
    { src: image3, alt: "Image 3" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="serviceContainer">
      <h2>Nos Animations !</h2>
      <div className="servicesContain_1">
        <ul>
          <li>Maquillage</li>
          <li>Peinture</li>
          <li>Sculpture de ballons </li>
        </ul>
      </div>
      <div className="servicesContain_3">
        <ul>
          <li>Barbe à papa</li>
          <li>mascotes</li>
          <li>Boom</li>
        </ul>
      </div>
      <div className="carousel">
        {images.map((image, i) => (
          <div key={i} className={`slide ${i === index ? "active" : ""}`}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <div className="servicesContain_2">
        <ul>
          <li>Barbe à papa</li>
          <li>mascotes</li>
          <li>Boom</li>
        </ul>
      </div>
      <aside>
        <p>Et bien plus encore !</p>
        <button className="button">Découvrez nos prestations </button>
      </aside>
    </div>
  );
};

export default Services;
