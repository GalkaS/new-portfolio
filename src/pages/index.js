import React from "react"
import "normalize.css"
import "./index.css"
import { Link } from 'gatsby'
import Header from "../components/Header";
import Description from "../components/Description";
import Button from "../components/Button";


const Home = () => {
  return (
    <div className="background">
  	<div className="container">
      <div className="header">
        <Header text="HI. I'M GALA." />
        <Description text="I'm cool!"/>
      </div>
      <div className="button">
        <Link className="buttonLink" to={'/projectsPage'}>
        	<Button text="CHECK OUT MY PROJECTS" />
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Home;