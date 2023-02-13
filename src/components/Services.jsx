import React from "react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import image1 from "../style/img/backpic/chateau.jpg";
import image2 from "../style/img/backpic/fille_ballon.jpg";
import image3 from "../style/img/backpic/peinture.webp";
const appear = {
  hidden: { opacity: 0, x: "-20vw" },
  visible: { transition: { delay: 0.4, duration: 0.5 }, opacity: 1, x: 0 },
  hidden1: { opacity: 0, y: 100 },
  visible1: { transition: { duration: 0.5 }, opacity: 1, y: 0 },
};
const appearl = {
  hidden: { opacity: 0, x: "20vw" },
  visible: { transition: { delay: 0.4, duration: 0.5 }, opacity: 1, x: 0 },
};

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
  }, [images.length]);
  return (
    <div className="serviceContainer">
      <motion.h2
        variants={appear}
        initial="hidden1"
        whileInView="visible1"
        viewport={{ once: true, amount: 0.8 }}
      >
        Nos Animations !
      </motion.h2>
      <div className="servicesContain_1">
        <ul>
          <AnimatePresence>
            <motion.li variants={appear} initial="hidden" whileInView="visible">
              Maquillage
            </motion.li>
            <motion.li variants={appear} initial="hidden" whileInView="visible">
              Peinture
            </motion.li>
            <motion.li variants={appear} initial="hidden" whileInView="visible">
              Sculpture de ballons{" "}
            </motion.li>
          </AnimatePresence>
        </ul>
      </div>
      <div className="servicesContain_3">
        <ul>
          <motion.li variants={appearl} initial="hidden" whileInView="visible">
            Barbe à papa
          </motion.li>
          <motion.li variants={appearl} initial="hidden" whileInView="visible">
            mascotes
          </motion.li>
          <motion.li variants={appearl} initial="hidden" whileInView="visible">
            Boom
          </motion.li>
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
          <motion.li variants={appearl} initial="hidden" whileInView="visible">
            Barbe à papa
          </motion.li>
          <motion.li variants={appearl} initial="hidden" whileInView="visible">
            mascotes
          </motion.li>
          <motion.li variants={appearl} initial="hidden" whileInView="visible">
            Boom
          </motion.li>
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
