import React from 'react';
import prevStaff from '../../../data/people/prevStaff.json';
import Profile from '../Profile';

function PrevStaff() {
  
  return (
      <div className="staffGrid">
          {prevStaff.sort((a, b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0)
            .map((staff, index) => (
              <Profile
              key={`prev-staff-${index}`}
              imgSrc={staff.image}
              name={staff.name}
              profileLink={staff.profileLink}
            />
          ))}
    </div>
  );
}

export default PrevStaff;
