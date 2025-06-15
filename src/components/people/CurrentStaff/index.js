import React from 'react';
import currentStaff from '../../../data/people/currentStaff.json';
import Profile from '../Profile';

function CurrentStaff() {
  
  return (
      <div className="staffGrid">
          {currentStaff.slice()
            .sort((a, b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0)
            .map((staff, index) => (
              <Profile
              key={`current-staff-${index}`}
              imgSrc={staff.image}
              name={staff.name}
              profileLink={staff.profileLink}
              bio={staff.bio}
            />
          ))}
    </div>
  );
}

export default CurrentStaff;
