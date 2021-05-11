import React from "react";
import "./About.css";
import imagen1 from "../../media/imagen1.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me: </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ut
          accusantium pariatur non, corrupti quia magnam eligendi commodi saepe
          id? Possimus molestias corrupti sed aliquam nam qui, eveniet magni
          cum.
        </p>
      </div>
      <div className="about-img">
        <img src={imagen1} alt="about" />
      </div>
    </div>
  );
};

export default About;
