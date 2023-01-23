import React from "react";
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
      <LandingPage />
      <Business />
      <Services />
      <Crew />
      <Footer />
    </div>
  );
};

export default Home;
