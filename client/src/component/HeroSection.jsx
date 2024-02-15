import React from "react";
import { Button } from "./Button";
import "../styles/HeroSection.css";
import art2 from "../img/art2.jpg";

function HeroSection() {
  return (
    <div className="hero-container">
      <img className="hero-img" src={art2} alt="art2" />
      <h1>Navigating the world through art</h1>
      <p>Exploring the boundless expressions of creativity</p>
    </div>
  );
}

export default HeroSection;
