import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-section">
      <h4>Barber Shop</h4>
      <ul className="footer-socials">
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
  );
};

export default Footer;
