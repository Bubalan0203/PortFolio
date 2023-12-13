// ProjectDisplay.js
import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const aboutPoints = project.about.split('\n');

  return (
    <div className="project">
      <br></br>
      <br></br>
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Tech Stack:</b>{" "}
        <span className="tech-stack">{project.skills}</span>
      </p>
      <p>
        <b>About this project</b>
      </p>
      <ul>
        {aboutPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <a
        href="https://github.com/Bubalan0203"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
