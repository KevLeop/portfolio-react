import React from "react";
import "./About.css";
import imagen1 from "../../media/imagen1.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me: </h3>
        <p>
          I'm 27 years old and I love programming, and seeing that projects turn
          out the way you want them. I am a graduate in Computer Science in the
          San Agustín National University of Arequipa-Peru. <br />
          Actually I have a certified specialization in FullStack web
          development, Superior Technological Institute TECSUP.
        </p>
      </div>
      <div className="about-img">
        <img src={imagen1} alt="about" />
      </div>
    </div>
  );
};

export default About;
