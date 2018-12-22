import React from "react";
import "../css/projectCard.css";

const ProjectCard = props => (
  <div className="projectCard">
    <div className="grid">
      <img
        className="projectImage"
        src={props.image}
        alt="Thumbnail of the project"
      />
      <div className="textGrid">
        <a
          className="bckgr"
          style={{ backgroundColor: props.color }}
          href={props.url}
        >
        <div className="bckgr"></div>
        </a>
        <div className="footerColor" style={{ backgroundColor: props.color }}>
          <div className="projectTitle">{props.name}</div>
          <div className="links">
            <a className="projectSourceCode" href={props.sourceLink}>
              Source code
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
