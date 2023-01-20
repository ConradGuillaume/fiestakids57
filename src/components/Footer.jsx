import React from "react";
import guillaume from "../style/img/logo/guillaumeconrad.png";
import logo from "../style/img/logo/fiestakid.png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <img className="OurLogo" src={logo} alt="" />
      <div className="mention">
        <div class="contact-block">
          <h4>Contact</h4>
          <ul>
            <li>
              <i class="fas fa-phone"></i>
              <a href="tel:+1234567890">+123 456 7890</a>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <a href="mailto:contact@example.com">contact@example.com</a>
            </li>
          </ul>
        </div>
        <div class="partners-block">
          <h4>Nos partenaires</h4>
          <ul>
            <li>
              <a href="facebook.com">
                <i class="fa-solid fa-store"></i>
                <span>Partenaire 1</span>
              </a>
            </li>
            <li>
              <a href="facebook.com">
                <i class="fa-solid fa-store"></i>
                <span>Partenaire 2</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="legal-block">
          <h4>Mentions légales</h4>
          <ul>
            <li>
              <a href="facebook.com">
                <i class="fas fa-at"></i>
                <span>Politique de confidentialité</span>
              </a>
            </li>
            <li>
              <a href="facebook.com">
                <i class="fas fa-at"></i>
                <span>Conditions d'utilisation</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="builder">
        <h6>Edité par: </h6>
        <a href="facebook.com">
          <img src={guillaume} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
