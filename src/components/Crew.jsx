import React from "react";
import { motion } from "framer-motion";
const appear = {
  hidden: { opacity: 0, x: "-20vw", rotate: 50 },
  visible: {
    transition: { delay: 0.4, duration: 0.5 },
    opacity: 1,
    x: 0,
    rotate: 0,
  },
  hidden1: { opacity: 0, y: 100 },
  visible1: { transition: { duration: 0.5 }, opacity: 1, y: 0 },
};
const appearl = {
  hidden: { opacity: 0, x: "20vw", rotate: -50 },
  visible: {
    transition: { delay: 0.4, duration: 0.5 },
    opacity: 1,
    x: 0,
    rotate: 0,
  },
};
const Crew = () => {
  return (
    <div className="crewContainer">
      <motion.h3
        variants={appear}
        initial="hidden1"
        whileInView="visible1"
        viewport={{ once: true, amount: 0.8 }}
      >
        Des animations pour tout les ages !
      </motion.h3>
      <article className="ages">
        <p className="text">
          Chez nous, tous les enfants sont les bienvenus! Du plus petit au plus
          grand, nous nous occupons de tous avec bienveillance pour vous offrir
          une sérénité maximale. Nous sommes là pour prendre soin des enfants de
          0 à 12 ans.
        </p>
      </article>
      <article className="crew">
        <motion.div
          class="card"
          variants={appear}
          initial="hidden"
          whileInView="visible"
        >
          <div class="circle"></div>
          <div class="circle"></div>
          <p className="title">Une équipe diplomée !</p>
          <p className="undertitle">
            Nos animatrices sont des professionnelles , avec plusieurs années
            d'expérience dans l'animation. Elles sont toutes diplômées avec des
            titres comme le BAFA, le BAFD, le CAP petite enfance, le Master
            métier de l'enseignement et le CRPE. Offrez à vos enfants les
            meilleures animations en toute confiance!
          </p>
          <div class="card-inner"></div>
        </motion.div>
        <motion.div
          class="card"
          variants={appearl}
          initial="hidden"
          whileInView="visible"
        >
          <div class="circle"></div>
          <div class="circle"></div>
          <p className="title">Des tarifs compétitifs</p>
          <p className="text">
            Chez nous, vous bénéficiez de tarifs abordables adaptés à votre
            nombre d'enfants. Et le plus , c'est que nous nous occupons de tout
            pour vous! Fini les soucis, nous fournissons tout le matériel
            nécessaire pour des moments de pur bonheur pour vos enfants.
          </p>
          <div class="card-inner"></div>
        </motion.div>
      </article>
      <aside className="contactBtn ">
        <button className="contactUs">
          Suivez nous
          <i class="fa-solid fa-hand-point-right"></i>
          <i id="fb" class="fa-brands fa-facebook"></i>
        </button>
      </aside>
    </div>
  );
};

export default Crew;
