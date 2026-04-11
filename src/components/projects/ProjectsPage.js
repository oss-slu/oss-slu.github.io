import React from 'react';
import projects from '../../data/projects/Projects.json';
import ProjectCard from './ProjectCard';
import '../../css/ProjectsPage.css';

const highlights = [
    {
      title: "Technologies We Use",
      items: [
        { icon: "🧠", text: "AI/ML" },
        { icon: "⚙️", text: "IoT" },
        { icon: "🌐", text: "Web Development" },
        { icon: "📊", text: "Data Visualization" },
        { icon: "🎤", text: "Speech Processing" },
        { icon: "📈", text: "ETL Pipelines" },
      ],
    },
    {
      title: "Industries Served",
      items: [
        { icon: "🏥", text: "Healthcare" },
        { icon: "🧪", text: "Research" },
        { icon: "🎓", text: "Education" },
        { icon: "✈️", text: "Aerospace" },
        { icon: "🧬", text: "Bioinformatics" },
        { icon: "📚", text: "Digital Humanities" },
      ],
    },
    {
      title: "Core Capabilities",
      items: [
        { icon: "🔎", text: "Data Processing" },
        { icon: "🖼️", text: "Image Recognition" },
        { icon: "🗣️", text: "Speech Evaluation" },
        { icon: "📱", text: "Mobile Apps" },
        { icon: "🔬", text: "Scientific Visualization" },
      ],
    },
  ];
  
  const Highlights = () => {
    return (
      <div className="highlights-container">
        <div className="highlights-grid">
          {highlights.map((section, idx) => (
            <div key={idx} className="highlights-card">
              <h3 className="highlights-title">{section.title}</h3>
              <ul className="highlights-list">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="highlights-item">
                    <span className="highlights-icon">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default function ProjectsPage() {
  const sections = [
    { title: "Current Open Source with SLU Product Development", key: "current" },
    { title: "Stable & Supported Products", key: "stable" },
    { title: "Completed & Inactive Products", key: "completed" }
  ];

  return (
    <>
      {/* <Highlights /> */}
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
