import React from "react";
import BurgerNav from "../components/BurgerNav";
import NavBar from "../components/NavBar";
import team from "../style/img/backpic/team.jpeg";

const Team = () => {
  return (
    <div className="team_container">
      <BurgerNav />
      <NavBar />
      <article>
        <div className="content">
          {" "}
          <h3>Notre equipe d'animation</h3>
          <div className="profil-container">
            <div className="card">
              <p className="prenom">Fanny</p>
              <p className="profession">
                Directrice de périscolaire et de centre aéré
              </p>
              <p className="titre">
                Brevet d'aptitude aux fonctions de directeur
              </p>
            </div>
            <div className="card">
              <p className="prenom">Milène</p>
              <p className="profession">Enseignante</p>
              <p className="titre">
                Brevet d'aptitude aux fonctions d'animateur en accueils
                collectifs
              </p>
            </div>
          </div>
          <h4>
            Nous travaillon avec des animatrices toutes diplômées <br /> et avec
            de l'expérience dans l'animation !
          </h4>
        </div>
      </article>
      <aside>
        <img src={team} alt="" />
      </aside>
    </div>
  );
};

export default Team;
