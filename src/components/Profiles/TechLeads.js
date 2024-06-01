import React from 'react';

const techLeads = [
  {
    name: "Abhilash Kotha",
    githubUrl: "https://github.com/AbhilashKotha",
    imgSrc: "/img/abhilash_avatar.jpg",
    altText: "Abhilash Kotha - Graduate Assistant Team Lead"
  },
  {
    name: "Logan Wyas",
    githubUrl: "https://github.com/loganwyas",
    imgSrc: "/img/logan_avatar.jpg",
    altText: "Logan Wyas - Graduate Assistant Team Lead"
  },
  {
    name: "Ruthvik Manneem",
    githubUrl: "https://github.com/ruthvikm",
    imgSrc: "/img/ruthvik_avatar.png",
    altText: "Ruthvik Mannem- Graduate Assistant Team Lead"
  },
  {
    name: "Sailikhita Pulijala",
    githubUrl: "https://github.com/LikhitaPulijala",
    imgSrc: "/img/likhita-avatar.jpg",
    altText: "Sailikhita Pulijala - Graduate Assistant Team Lead"
  },
  {
    name: "Siri Chandana Garimella",
    githubUrl: "https://github.com/SiriChandanaGarimella",
    imgSrc: "/img/siri_avatar.jpg",
    altText: "Siri Chandana Garimella - Graduate Assistant Team Lead"
  },
  {
    name: "Yash Kamal Bhatia",
    githubUrl: "https://yashb196.github.io/yashb196/",
    imgSrc: "/img/yash_avatar1.jpg",
    altText: "Yash Kamal Bhatia - Graduate Assistant Team Lead"
  },
  {
    name: "Yashaswini Shivalingaiah",
    githubUrl: "https://github.com/yashaswini-slu",
    imgSrc: "/img/yashaswini_avatar.jpg",
    altText: "Yashaswini Shivalingaiah - Graduate Assistant Team Lead"
  }
];

const TechLeads = () => {
  return (
    <div className="techLeadsGrid">
      {techLeads.map((lead, index) => {
        const imgSrc = lead.imgSrc || `${lead.githubUrl}.png`;

        return (
          <div className="techLead" key={index}>
            <a href={lead.githubUrl} target="_blank" rel="noopener noreferrer">
              <img src={imgSrc} alt={lead.altText} className="teamLeadImage"/>
              <p>{lead.name}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default TechLeads;
