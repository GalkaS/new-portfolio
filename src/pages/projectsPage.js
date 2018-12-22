import React from "react"
import "normalize.css"
import "./projectsPage.css"
import ProjectsList from "../components/ProjectsList";
import projects from "../../data/projects-info";
import Button from "../components/Button";


const ProjectsPage = () => {
  return (
  	<div>
  	<div className="blueOverlay"></div>
	  	<div className="projectContainer">
		  	<div className="projectCards">
		      <ProjectsList projects={projects}/>
		    </div>
	    	<div className="btnLink projectBtn">
	    		<Button 
	    		text="GO BACK"
	    		path="/"
	    		/>
	    	</div>
	    </div>
    </div>
  );
};

export default ProjectsPage;