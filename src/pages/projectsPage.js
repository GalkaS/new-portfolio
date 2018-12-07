import React from "react"
import "normalize.css"
import "./projectsPage.css"
import ProjectsList from "../components/ProjectsList";
import projects from "../../data/projects-info";
import Button from "../components/Button";
import { Link } from 'gatsby'


const ProjectsPage = () => {
  return (
  	<div className="projectBackground">
	  	<div className="projectContainer">
		  	<div className="projectCards">
		      <ProjectsList projects={projects}/>
		    </div>
		    <div className="btn">
		    	<Link className="btnLink" to={'/'}>
		    		<Button text="GO BACK"/>
		    	</Link>
		    </div>
	    </div>
    </div>
  );
};

export default ProjectsPage;