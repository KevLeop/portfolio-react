import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-title">
        <h2>Skills</h2>
      </div>
      <div className="skills">
        <div className="skills-det">
          <h4>Web Development</h4>
          <div className="skills-det-body">
            <ul>
              <li>
                <p>HTML</p>
                <i className="fab fa-html5 html5-icon"></i>
              </li>
              <li>
                <p>CSS</p>
                <i className="fab fa-css3-alt css-icon"></i>
              </li>
              <li>
                <p>JavaScript</p>
                <i className="fab fa-js-square js-icon"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="skills-det">
          <h4>FrontEnd Frameworks</h4>

          <div className="skills-det-body">
            <ul>
              <li>
                <p>React</p>
                <i className="fab fa-react react-icon"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="skills-det">
          <h4>BackEnd Frameworks</h4>
          <div className="skills-det-body">
            <ul>
              <li>
                <p>Django</p>
                <i className="fab fa-python python-icon"></i>
              </li>
              <li>
                <p>Express</p>
                <i className="fab fa-node-js node-icon"></i>
              </li>
              <li>
                <p>Flask</p>
                <i className="fab fa-python python-icon"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="skills-det">
          <h4>Databases</h4>
          <div className="skills-det-body">
            <ul>
              <li>
                <p>MySQL</p>
                <i className="fas fa-database db-icon"></i>
              </li>
              <li>
                <p>SQLite</p>
                <i className="fas fa-database db-icon"></i>
              </li>
              <li>
                <p>MongoDB</p>
                <i className="fas fa-database db-icon"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
