import React from 'react';
import prevDevelopers from '../../../data/people/prevDevelopers.json';
import Profile from '../Profile';

function PrevDevelopers() {

  return (
      <div className="techLeadsGrid">
          {prevDevelopers.slice()
            .sort((a, b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0)
            .map((developer, index) => (
                <Profile
                key={`prev-developer-${index}`}
                imgSrc={developer.image}
                name={developer.name}
                profileLink={developer.profileLink}
                badges={developer.badges}
            />
          ))}
    </div>
  );
}

export default PrevDevelopers;
