import React from "react";

const Crew = () => {
  return (
    <div className="crewContainer">
      <h3>Des animations pour tout les ages !</h3>
      <article className="ages">
        <p className="text">
          Chez nous, tous les enfants sont les bienvenus! Du plus petit au plus
          grand, nous nous occupons de tous avec bienveillance pour vous offrir
          une sérénité maximale. Nous sommes là pour prendre soin des enfants de
          0 à 12 ans.
        </p>
      </article>
      <article className="crew">
        <div class="card">
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
        </div>
        <div class="card">
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
