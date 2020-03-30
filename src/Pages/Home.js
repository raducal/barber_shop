import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Prices from "../components/Prices";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Prices />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;
