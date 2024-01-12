import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="paddings innerWidth flexCenter footer-container">
        {/* left side */}
        <div className="flexColStart footer-left">
          <img src="./logo2.png" alt="logo2" width={120} />
          <span className="secondaryText">
            Our Mission is to make all people
            <br />
            the best place to live fpor them.
          </span>
        </div>
        {/* right span */}
        <div className="flexColStart footer-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">KUNST Ayeduase</span>
          <div className="flexCenter footer-menu">
            <span>Properties</span>
            <span>Services</span>
            <span>Products</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
