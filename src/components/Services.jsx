import React from "react";

const Services = () => {
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
      <div className="caroussel"></div>
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
