import React from 'react';
import Link from '@docusaurus/Link';
import currentDevelopers from '../../../data/people/currentDevelopers.json';
import currentTechLeads from '../../../data/people/currentTechLeads.json';
import currentStaff from '../../../data/people/currentStaff.json';
import prevDevelopers from '../../../data/people/prevDevelopers.json';
import prevTechLeads from '../../../data/people/prevTechLeads.json';
import prevStaff from '../../../data/people/prevStaff.json';

export default function CurrentTeamHeader() {
  const total = currentDevelopers.length + currentTechLeads.length + currentStaff.length;
  const alumni = prevDevelopers.length + prevTechLeads.length + prevStaff.length;

  return (
    <div className="stats-header">
      <div className="stats-row">
        <div className="stat-item stat-item--total">
          <span className="stat-number">{total}</span>
          <span className="stat-label">Current Team</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{currentStaff.length}</span>
          <span className="stat-label">Staff</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{currentTechLeads.length}</span>
          <span className="stat-label">Tech Leads</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{currentDevelopers.length}</span>
          <span className="stat-label">Developers</span>
        </div>
        <Link className="stat-item stat-item--divider" to="/people/contributors">
          <span className="stat-number">{alumni}</span>
          <span className="stat-label">Alumni</span>
        </Link>
      </div>
    </div>
  );
}
