import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <p className="testiTitle">Ils nous on fait confiance !</p>
      <div className="slideContainer">
        <Slider className="slide" {...settings}>
          <div class="review-block">
            <div class="reviewer-name">Fiona et Thomas ZILLIOX</div>
            <div className="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="review-comment">
              FiestaKids57 s'est chargé des animations enfants pour notre
              mariage. A en croire Les Échos des parents et des enfants
              concernés, cela s'est très bien passé et a été apprécié de tous!
              Nous avons même eu beaucoup de sculptures en ballons sur les
              photos de notre Photobooth!! Tout le monde était ravis. Nous
              recommandons pour leur sérieux et leur professionnalisme. Merci!
            </div>
            <div class="review-date">Visité en octobre 2022</div>
          </div>
          <div class="review-block">
            <div class="reviewer-name">Anne Mathieu</div>
            <div className="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="review-comment">
              Nous avons pris FiestaKids57 pour notre mariage, et cela s'est
              très bien passé. Les enfants étaient ravis des activités proposées
              et l'équipe est très sympa. Vraiment rien à dire une prestation
              parfaite. A recommander sans aucun doutes.
            </div>
            <div class="review-date">Visité en juillet 2022</div>
          </div>
          <div class="review-block">
            <div class="reviewer-name">Guillaume-Cosette Schleimer</div>
            <div className="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="review-comment">
              Superbe prestation de FiestKids qui s’est coupé des enfants de nos
              invités de manière discrète et efficace!
            </div>
            <div class="review-date">Visité en août 2022</div>
          </div>
          <div class="review-block">
            <div class="reviewer-name">gl amour</div>
            <div className="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="review-comment">
              Super équipe présente à un mariage il s’occupe très des enfants et
              personnel très souriante et disponible. Je recommande
            </div>
            <div class="review-date">il y a 4 ans</div>
          </div>
          <div class="review-block">
            <div class="reviewer-name">ouassil niki</div>
            <div className="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="review-comment"></div>
            <div class="review-date">il y a 3 ans</div>
          </div>
        </Slider>
        <div className="wavy2"></div>
      </div>
      <div className="contactBtn">
        <button className="contactUs">Contactez Nous ! </button>
      </div>
    </>
  );
};

export default Testimonial;
