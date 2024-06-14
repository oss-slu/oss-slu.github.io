import React from 'react';
import ProfilePic from './ProfilePic';

const developers = [
    {
        name: 'Raju Karmuri',
        githubUrl: "https://github.com/rkarmuri",
        imgSrc: "/img/raju_avatar.jpeg",
        altText: "Raju Karmuri - Individual Developer"
    },
    {
        name: "Chintak Joshi",
        githubUrl: "https://github.com/chintakjoshi",
        imgSrc: "/img/chintak_avatar1.JPG",
        altText: "Chintak Joshi - Individual Developer"     
    }
]

const IndDevs = () => {
  return (
    <div className="techLeadsGrid">
      {developers.map((lead, index) => (
        <ProfilePic
          key={index}
          githubUrl={lead.githubUrl}
          imgSrc={lead.imgSrc}
          altText={lead.altText}
          name={lead.name}
        />
      ))}
    </div>
  );
}

export default IndDevs;
