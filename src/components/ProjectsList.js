import React from 'react'
import ProjectCard from "../components/ProjectCard"


const ProjectsList = (props) => {
	return props.projects.map((project, index) => (
		<ProjectCard
		name={project.name}
		image={project.image}
		url={project.url}
		sourceLink={project.sourceLink}
		color={project.color}
		/> 
	))
}

export default ProjectsList;