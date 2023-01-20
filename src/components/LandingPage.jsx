import React from "react";
import back from "../style/img/backpic/ballons.webp";
import fiestkids from "../style/img/logo/fiestakid.png";

const LandingPage = () => {
  return (
    <div className="imgTitleContain">
      <img className="backpic" src={back} alt="" />
      <div className="wrapper">
        <img className="fiesta" src={fiestkids} alt="FiestaKids logo" />
        <div className="text">
          <p className="beforeSlogan">Quel que soit votre événement,</p>
          <p className="slogan">NOUS NOUS OCCUPONS DE VOS ENFANTS !!</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
