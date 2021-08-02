import "../../App.css";
import HeroSection from "./../heroSection/HeroSection";

import React from "react";
import Cards from "../cardItem/Cards";
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer/>
    </>
  );
};

export default Home;
