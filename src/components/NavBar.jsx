import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const cloudWiggle = {
  hover: {
    x: [0, 10, -10, 10, -10, 10, 0],
    rotate: [0, 10, -10, 10, -10, 10, 0],
    transition: { duration: 1.8 },
  },
};

const NavBar = () => {
  return (
    <div className="NavContain">
      <nav className="BtnNavContain">
        <motion.div className="nav" variants={cloudWiggle} whileHover="hover">
          <NavLink className="nav" to="/">
            Accueil
          </NavLink>
        </motion.div>
        <motion.div className="nav" variants={cloudWiggle} whileHover="hover">
          <NavLink className="nav" to="/prestation">
            Prestation
          </NavLink>
        </motion.div>

        <motion.div className="nav" variants={cloudWiggle} whileHover="hover">
          <NavLink className="nav" to="/contact">
            Contact
          </NavLink>
        </motion.div>

        <motion.div className="nav" variants={cloudWiggle} whileHover="hover">
          <NavLink className="nav" to="/equipe">
            L'équipe
          </NavLink>
        </motion.div>
      </nav>
    </div>
  );
};

export default NavBar;
