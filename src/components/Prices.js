import React from "react";

const Prices = () => {
  return (
    <div className="prices-main" id="section3">
      <div className="container">
        <div className="prices-content">
          <h2 className="section-title">Services</h2>
          <div className="prices-grid">
            <div className="prices-section">
              <h3 data-head="Haircut">Haircut</h3>
              <p>€14</p>
              <div className="seperator"></div>
            </div>
            <div className="prices-section">
              <h3 data-head="Beard">Beard</h3>
              <p>€10</p>
              <div className="seperator"></div>
            </div>
            <div className="prices-section">
              <h3 data-head="Buzzcut">Buzzcut</h3>
              <p>€8</p>
            </div>
          </div>
        </div>
      </div>
      <div className="opening-hours-div">
        <div className="opening-hours-content">
          <h4>Monday - Friday >> 09:00 - 18:00</h4>
          <h4>Saturday - Sunday >> 12:00 - 15:00</h4>
        </div>
      </div>
    </div>
  );
};

export default Prices;
