import React from 'react';
import '../../css/ProjectsPage.css';  // You will design styles here

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        {/* Uncomment the below once you have images */}
        {/* <div className="project-card-image">
          <img src={project.image} alt={project.name} />
        </div> */}
        <h3>{project.name}</h3>
      </a>
      <p>{project.description}</p>
    </div>
  );
}
