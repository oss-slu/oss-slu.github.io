import React from 'react';
import projects from '../../data/projects/Projects.json';
import ProjectCard from './ProjectCard';
import '../../css/ProjectsPage.css';

export default function ProjectsPage() {
  const sections = [
    { title: "Current Open Source with SLU Products", key: "current" },
    { title: "External Partnership Projects & Products", key: "external" },
    { title: "Completed & Inactive Projects", key: "completed" }
  ];

  return (
    <div className="projects-page">
      {sections.map(section => (
        <>
          <h2>{section.title}</h2>
          <div className="projects-grid">
            {projects.filter(p => p.status === section.key).map(project => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
