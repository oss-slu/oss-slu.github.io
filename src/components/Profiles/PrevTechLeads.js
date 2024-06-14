import React from 'react';
import ProfilePic from './ProfilePic';

const prevDevelopers = [
    {
        name: 'Greih Murray',
        githubUrl: "https://github.com/GreihMurray",
        imgSrc: "/img/greih.jpg",
        altText: "Greih Murray - Previous Graduate Assistant Team Lead"
    },
    {
        name: 'Halima Malik',
        githubUrl: "https://github.com/HalimaMalik",
        imgSrc: "/img/halima.jpg",
        altText: "Halima Malik - Previous Graduate Assistant Team Lead"
    },
    {
        name: 'Omar Al Akkad',
        githubUrl: "https://github.com/OmarAlAkkad",
        imgSrc: "/img/Omar.jpg",
        altText: "Omar Al Akkad - Previous Graduate Assistant Team Lead"
    },
    {
        name: 'Uday Prasad Aitha',
        githubUrl: "https://github.com/aithaprasad",
        imgSrc: "/img/uday.jpg",
        altText: "Uday Prasad Aitha - Previous Graduate Assistant Team Lead"
    },
]

const PrevTechLeads = () => {
  return (
    <div className="techLeadsGrid">
      {prevDevelopers.map((lead, index) => (
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

export default PrevTechLeads;
