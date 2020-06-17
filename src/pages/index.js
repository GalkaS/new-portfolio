import React from "react"
import "normalize.css"
import "./index.css"
import Header from "../components/Header";
import Description from "../components/Description";
import Button from "../components/Button";


const Home = () => {
  return (
    <div>
      <div className="redOverlay"></div>
    	<div className="container">
        <div className="header">
          <Header text="HI. I'M GALA." />
        </div>
        <div className="descr">
          <Description />
        </div>
        <div className="buttonLink button">
        	<Button
          text="CHECK OUT MY PROJECTS"
          path="/projectsPage" />
          </div>
      </div>
    </div>
  );
};

export default Home;