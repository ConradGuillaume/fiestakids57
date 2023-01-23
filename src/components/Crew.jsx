import React from "react";
import tache2 from "../style/img/backpic/tache2.svg";
const Crew = () => {
  return (
    <div className="crewContainer">
      <h3>Des animations pour tout les ages !</h3>
      <article className="ages">
        <img src={tache2} alt="" />
        <p>
          Nous nous occupons aussi bien des tout petits que des plus grands pour
          vous offrir un maximum de sérénité ! ​ Nous prenons en charge les
          enfants de 0 à 12 ans !
        </p>
      </article>
      <article className="crew">
        <div className="theCrew">
          <img src={tache2} alt="" />
          <p className="crewTitle">Une équipe diplomée ! </p>
          <p>
            Les animatrices ont plusieurs années d’expérience dans le métier de
            l'animation et sont toutes diplômées ! BAFA, BAFD, CAP petite
            enfance, Master métier de l'enseignement et CRPE . Quoi de mieux ?
          </p>
        </div>
        <div className="cost">
          <img src={tache2} alt="" />
          <p className="crewTitle">Des tarifs compétitifs</p>
          <p>
            Nos tarifs sont accessibles et calculés en fonction de votre nombre
            d'enfants. Le plus c'est que vous n'avez rien à penser ! Nous nous
            occupons de tout et fournissons tout le matériel nécessaire !
          </p>
        </div>
      </article>
      <aside className="contactBtn ">
        <button className="contactUs">
          Suivez tout de notre actualité, c'est par ici
          <i class="fa-solid fa-hand-point-right"></i>
          <i id="fb" class="fa-brands fa-facebook"></i>
        </button>
      </aside>
    </div>
  );
};

export default Crew;
