import React from "react";
import nuage from "../style/img/Nav/nuage.png";
const NavBar = () => {
  return (
    <div className="NavContain">
      <nav className="BtnNavContain">
        <div className="btncontain">
          <button className="btnImg">Accueil</button>
          <img src={nuage} alt="nuage" />
        </div>
        <div className="btncontain">
          <button className="btnImg">Prestations</button>
          <img src={nuage} alt="nuage" />
        </div>
        <div className="btncontain">
          <button className="btnImg">Contact</button>
          <img src={nuage} alt="nuage" />
        </div>
        <div className="btncontain">
          <button className="btnImg">L'équipe </button>
          <img src={nuage} alt="nuage" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
