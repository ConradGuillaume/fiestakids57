import React from "react";

const Crew = () => {
  return (
    <div className="crewContainer">
      <h3>Des animations pour tout les ages !</h3>
      <article className="ages">
        <p className="text">
          Nous nous occupons aussi bien des tout petits que des plus grands pour
          vous offrir un maximum de sérénité ! ​ Nous prenons en charge les
          enfants de 0 à 12 ans !
        </p>
      </article>
      <article className="crew">
        <div class="card">
          <div class="circle"></div>
          <div class="circle"></div>
          <p className="title">Une équipe diplomée !</p>
          <p className="undertitle">
            Les animatrices ont plusieurs années d’expérience dans le métier de
            l'animation et sont toutes diplômées ! BAFA, BAFD, CAP petite
            enfance, Master métier de l'enseignement et CRPE . Quoi de mieux ?
          </p>
          <div class="card-inner"></div>
        </div>
        <div class="card">
          <div class="circle"></div>
          <div class="circle"></div>
          <p className="title">Des tarifs compétitifs</p>
          <p className="text">
            Nos tarifs sont accessibles et calculés en fonction de votre nombre
            d'enfants. Le plus c'est que vous n'avez rien à penser ! Nous nous
            occupons de tout et fournissons tout le matériel nécessaire !
          </p>
          <div class="card-inner"></div>
        </div>
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
