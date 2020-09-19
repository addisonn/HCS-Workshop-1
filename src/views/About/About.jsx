import React from "react";
import "./About.css";
import CutePic from "../../assets/selfie.jpg";

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={CutePic} className="intro-picture" />
        </div>
        <div className="intro-item">
          <h1>Short. Inspiring. Words.</h1>
          <h2>CS @ Harvard, 2023</h2>
          <p>These pretzels are making me thirsty!</p>
        </div>
      </div>
    </div>
  );
}
