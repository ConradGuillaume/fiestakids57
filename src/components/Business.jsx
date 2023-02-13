import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const appear = {
  hidden: { opacity: 0 },
  visible: { transition: { delay: 0.4, duration: 0.5 }, opacity: 1 },
  hidden1: { opacity: 0, y: 100 },
  visible1: { transition: { duration: 0.5 }, opacity: 1, y: 0 },
};

const Business = () => {
  return (
    <div className="businessContain">
      <motion.h1
        variants={appear}
        initial="hidden1"
        whileInView="visible1"
        viewport={{ once: true, amount: 0.8 }}
      >
        Votre équipe d'animation pour vos enfants en Moselle!
      </motion.h1>
      <h2>Mariage,Anniversaire,Soirée... Que la fête commence !</h2>
      <article className="resume">
        <div className="wave">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnsSvgjs="http://svgjs.dev/svgjs"
            viewBox="0 0 2400 800"
            opacity="1"
          >
            <g
              fill="#ffffea"
              transform="matrix(1,0,0,1,4.3314208984375,339.5083999633789)"
            >
              <path
                d="M-10,10C92.08333333333334,18.75,277.9166666666667,64.29166666666667,480,52C682.0833333333333,39.70833333333333,760,-47.541666666666664,960,-49C1160,-50.458333333333336,1240,43.541666666666664,1440,45C1640,46.458333333333336,1720,-43.666666666666664,1920,-42C2120,-40.333333333333336,2247.9166666666665,-39.08333333333334,2400,53C2552.0833333333335,145.08333333333334,3254.1666666666665,223.54166666666669,2650,400C2045.8333333333335,576.4583333333333,156.25,795.8333333333334,-500,900"
                transform="matrix(1,0,0,1,0,35)"
                opacity="NaN"
              ></path>
            </g>
          </svg>
        </div>
        <div className="mark"></div>
        <AnimatePresence>
          <motion.div
            className="pixWrapper"
            variants={appear}
            initial="hidden"
            whileInView="visible"
          >
            <div className="pix"></div>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            variants={appear}
            className="txtWrapper"
            initial="hidden"
            whileInView="visible"
          >
            <p className="entreprise">
              Fiestakids57 ! Faites nous confiance pour occuper vos enfants lors
              de vos Mariages, anniversaires ou toutes autres occasions ! Nous
              nous chargeons de tout pour que votre évènement soit inoubliable:
              Maquillages,sculptures de ballons, barbe à papa, mascotes grands
              jeux, activités... Notre expérience vous garantira sérénité et
              tranquillité pour profiter au maximum, vous et vos convives !
              FiestaKids57 est une sociétée d'entrepreneurs diplômés et
              qualifiés!
            </p>
          </motion.div>
        </AnimatePresence>
      </article>
    </div>
  );
};

export default Business;
