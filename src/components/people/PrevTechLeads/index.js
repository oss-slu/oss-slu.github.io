import React from 'react';
import prevTechLeads from '../../../data/people/prevTechLeads.json';
import Profile from '../Profile';

function PrevTechLeads() {

  return (
      <div className="techLeadsGrid">
          {prevTechLeads.slice()
            .sort((a, b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0)
            .map((techLead, index) => (
                <Profile
                key={`prev-tech-lead-${index}`}
                imgSrc={techLead.image}
                name={techLead.name}
                profileLink={techLead.profileLink}
                badges={techLead.badges}
            />
          ))}
    </div>
  );
}

export default PrevTechLeads;
