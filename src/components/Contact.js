import React from "react";

const Contact = () => {
  return (
    <div className="contact-section" id="section4">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="contact-text">
          Contact us today to book an appointment with one of our experienced
          barbers
        </p>
        <div className="contact-subsection">
          <div className="contact-content">
            <div className="contact-locations">
              <h4>Location 1</h4>
              <h4>Location 2</h4>
              <div className="seperator top-seperator"></div>
            </div>
            <div className="contact-numbers">
              <h4>0983773783</h4>
              <h4>05987557588</h4>
            </div>
          </div>
          <div className="contact-map"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
