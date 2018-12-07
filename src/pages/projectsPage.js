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
		    	<Link className="btnLink btn mainBtn" to={'/'}>
		    	<Button text="Go back" />
		    	</Link>
	    </div>
    </div>
  );
};

export default ProjectsPage;