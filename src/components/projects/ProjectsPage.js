import React from 'react';
import projects from '../../data/projects/Projects.json';
import { kindLabels, domainLabels } from '../../data/projects/productTypes';
import ProjectCard from './ProjectCard';
import '../../css/ProjectsPage.css';

const statusLabels = {
  current: 'Active',
  stable: 'Stable & Supported',
  completed: 'Completed',
};

function PortfolioHeader() {
  const total = projects.length;
  const researchCount = projects.filter(p => p.research).length;
  const counts = {};
  for (const p of projects) {
    counts[p.status] = (counts[p.status] || 0) + 1;
  }

  // Derive the sets of kinds and domains actually present in the data.
  const kinds = [...new Set(projects.map(p => p.kind))];
  const kindList = kinds
    .map(k => kindLabels[k] || k)
    .sort()
    .join(' \u00b7 ');

  const domains = [...new Set(projects.flatMap(p => p.domain || []))];
  const domainList = domains
    .map(d => domainLabels[d] || d)
    .sort()
    .join(' \u00b7 ');

  return (
    <div className="stats-header">
      <div className="stats-row">
        <div className="stat-item stat-item--total">
          <span className="stat-number">{total}</span>
          <span className="stat-label">Total</span>
        </div>
        {Object.entries(statusLabels).map(([key, label]) => (
          <div key={key} className="stat-item">
            <span className="stat-number">{counts[key] || 0}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
        <div className="stat-item stat-item--divider">
          <span className="stat-number">{researchCount}</span>
          <span className="stat-label">Research</span>
        </div>
      </div>
      <p className="stats-subtitle">
        <strong>Product types:</strong> {kindList}
      </p>
      <p className="stats-subtitle">
        <strong>Domains:</strong> {domainList}
      </p>
    </div>
  );
}

export default function ProjectsPage() {
  const sections = [
    { title: "Current Open Source with SLU Product Development", key: "current" },
    { title: "Stable & Supported Products", key: "stable" },
    { title: "Completed & Inactive Products", key: "completed" }
  ];

  return (
    <>
      <PortfolioHeader />
      <div className="projects-page">
        {sections.map(section => (
          <div key={section.key}>
            <h2>{section.title}</h2>
            <div className="projects-grid">
              {projects
                .filter(p => p.status === section.key)
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(project => (
                  <ProjectCard key={project.name} project={project} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
