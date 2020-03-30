import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import { AppointmentButton } from "../stylesComponents/Styles";

const Hero = () => {
  return (
    <div className="hero-main" id="section1">
      <div className="hero-container">
        <div className="hero-content">
          <h3 className="hero-text" data-text="Barber Shop">
            Barber Shop
          </h3>
          <AppointmentButton>Book Now</AppointmentButton>
          <div className="hero-img"></div>
        </div>
      </div>
      <div className="social-icons">
        <ul className="social-icon-list">
          <li>
            {" "}
            <a href="">
              <FaFacebook />
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="">
              <FaInstagram />
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="">
              <FaTwitter />
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
