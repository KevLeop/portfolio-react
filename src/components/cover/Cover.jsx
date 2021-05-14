import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo3.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Kevin Valverde</h1>
      <p>Developer | Frontend | Backend</p>
    </div>
  );
};

export default Cover;
