import React from 'react';
import currentDeveloper from '../../../data/people/currentDevelopers.json';
import Profile from '../Profile';

function CurrentDeveloper() {
  
  return (
      <div className="techLeadsGrid">
          {currentDeveloper.slice()
            .sort((a, b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0)
            .map((Developer, index) => (
              <Profile
              key={`current-developer-${index}`}
              imgSrc={Developer.image}
              name={Developer.name}
              profileLink={Developer.profileLink}
              badges={Developer.badges}
            />
          ))}
    </div>
  );
}

export default CurrentDeveloper;
