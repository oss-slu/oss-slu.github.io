import React from 'react';
import currentTechLeads from '../../../data/people/currentTechLeads.json';
import Profile from '../Profile';

function CurrentTechLeads() {
  
  return (
      <div className="techLeadsGrid">
          {currentTechLeads.slice()
            .sort((a, b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0)
            .map((techLead, index) => (
              <Profile
              key={`current-tech-lead-${index}`}
              imgSrc={techLead.image}
              name={techLead.name}
              profileLink={techLead.profileLink}
              badges={techLead.badges}
            />
          ))}
    </div>
  );
}

export default CurrentTechLeads;
