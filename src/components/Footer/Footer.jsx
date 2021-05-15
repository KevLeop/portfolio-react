import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Kevin Valverde</h1>
        <p> Arequipa - Perú </p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p> And let's get down to work</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">
          <p>Design By: Kevin Valverde</p>
        </div>
        <div className="sns-links">
          <a
            href="https://www.linkedin.com/in/kevin-valverde-huilca/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://github.com/KevLeop" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
          <a
            href="https://www.facebook.com/kevin.valverde.12"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
