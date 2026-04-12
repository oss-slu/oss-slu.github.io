import React from 'react';
import Link from '@docusaurus/Link';
import projects from '../../data/projects/Projects.json';
import currentDevelopers from '../../data/people/currentDevelopers.json';
import currentTechLeads from '../../data/people/currentTechLeads.json';
import currentStaff from '../../data/people/currentStaff.json';
import prevDevelopers from '../../data/people/prevDevelopers.json';
import prevTechLeads from '../../data/people/prevTechLeads.json';
import prevStaff from '../../data/people/prevStaff.json';
import styles from './styles.module.css';

export default function HomepageStats() {
  const current = currentDevelopers.length + currentTechLeads.length + currentStaff.length;
  const alumni = prevDevelopers.length + prevTechLeads.length + prevStaff.length;
  const totalPeople = current + alumni;

  const totalProjects = projects.length;
  const researchCount = projects.filter(p => p.research).length;
  const projectCounts = {};
  for (const p of projects) {
    projectCounts[p.status] = (projectCounts[p.status] || 0) + 1;
  }

  const domainCount = new Set(projects.flatMap(p => p.domain || [])).size;

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsRow}>
        {/* Portfolio stats: wider, left — mirrors the text column above */}
        <div className={`stats-header ${styles.portfolioCard}`}>
          <h3 className={styles.cardTitle}>Projects</h3>
          <div className="stats-row">
            <div className="stat-item stat-item--total">
              <span className="stat-number">{totalProjects}</span>
              <span className="stat-label">Total</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{projectCounts.current || 0}</span>
              <span className="stat-label">Active</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{projectCounts.stable || 0}</span>
              <span className="stat-label">Stable</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{projectCounts.completed || 0}</span>
              <span className="stat-label">Completed</span>
            </div>
            <div className="stat-item stat-item--divider">
              <span className="stat-number">{researchCount}</span>
              <span className="stat-label">Research</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{domainCount}</span>
              <span className="stat-label">Domains</span>
            </div>
          </div>
          <Link className={styles.cardLink} to="/projects/portfolio">
            View portfolio &rarr;
          </Link>
        </div>

        {/* Contributors stats: narrower, right — mirrors the carousel column above */}
        <div className={`stats-header ${styles.contributorsCard}`}>
          <h3 className={styles.cardTitle}>Contributors</h3>
          <div className="stats-row">
            <div className="stat-item stat-item--total">
              <span className="stat-number">{totalPeople}</span>
              <span className="stat-label">Total</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{currentStaff.length + prevStaff.length}</span>
              <span className="stat-label">Staff</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{currentTechLeads.length + prevTechLeads.length}</span>
              <span className="stat-label">Tech Leads</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{currentDevelopers.length + prevDevelopers.length}</span>
              <span className="stat-label">Developers</span>
            </div>
          </div>
          <Link className={styles.cardLink} to="/people/staff">
            Meet the current team &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
