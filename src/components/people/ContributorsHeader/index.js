import React from 'react';
import Link from '@docusaurus/Link';
import prevDevelopers from '../../../data/people/prevDevelopers.json';
import prevTechLeads from '../../../data/people/prevTechLeads.json';
import prevStaff from '../../../data/people/prevStaff.json';
import currentDevelopers from '../../../data/people/currentDevelopers.json';
import currentTechLeads from '../../../data/people/currentTechLeads.json';
import currentStaff from '../../../data/people/currentStaff.json';

export default function ContributorsHeader() {
  const alumni = prevDevelopers.length + prevTechLeads.length + prevStaff.length;
  const current = currentDevelopers.length + currentTechLeads.length + currentStaff.length;
  const total = alumni + current;

  return (
    <div className="stats-header">
      <div className="stats-row">
        <div className="stat-item stat-item--total">
          <span className="stat-number">{total}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{prevStaff.length}</span>
          <span className="stat-label">Staff</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{prevTechLeads.length}</span>
          <span className="stat-label">Tech Leads</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{prevDevelopers.length}</span>
          <span className="stat-label">Developers</span>
        </div>
        <Link className="stat-item stat-item--divider" to="/people/staff">
          <span className="stat-number">{current}</span>
          <span className="stat-label">Active Now</span>
        </Link>
      </div>
    </div>
  );
}
