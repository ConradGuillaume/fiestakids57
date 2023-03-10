import React from "react";
import BurgerNav from "../components/BurgerNav";
import Business from "../components/Business";
import Crew from "../components/Crew";
import Footer from "../components/Footer";
import LandingPage from "../components/LandingPage";

import NavBar from "../components/NavBar";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div className="homeContainer">
      <NavBar />
      <BurgerNav />
      <LandingPage />
      <Business />
      <Services />
      <Crew />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
