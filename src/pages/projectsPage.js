import React from "react"
import "normalize.css"
import "./projectsPage.css"
import ProjectsList from "../components/ProjectsList";
import projects from "../../data/projects-info";
import Button from "../components/Button";
import { Link } from 'gatsby'


const ProjectsPage = () => {
  return (
  	<div>
  	<div className="blueOverlay"></div>
	  	<div className="projectContainer">
		  	<div className="projectCards">
		      <ProjectsList projects={projects}/>
		    </div>
	    	<Link className="btnLink projectBtn" to={'/'}>
	    		<Button text="GO BACK" />
	    	</Link>
	    </div>
    </div>
  );
};

export default ProjectsPage;