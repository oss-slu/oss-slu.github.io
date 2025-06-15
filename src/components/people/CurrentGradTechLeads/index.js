import React from 'react';
import currentGradTechLeads from '../../../data/people/currentGradTechLeads.json';
import Profile from '../Profile';

function CurrentGradTechLeads() {
  
  return (
      <div className="techLeadsGrid">
          {currentGradTechLeads.slice()
            .sort((a, b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0)
            .map((techLead, index) => (
              <Profile
              key={`current-grad-tech-lead-${index}`}
              imgSrc={techLead.image}
              name={techLead.name}
              profileLink={techLead.profileLink}
              badges={techLead.badges}
            />
          ))}
    </div>
  );
}

export default CurrentGradTechLeads;
