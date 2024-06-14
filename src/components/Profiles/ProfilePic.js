import React from 'react';

const ProfilePic = ({ githubUrl, imgSrc, altText, name }) => {
  const src = imgSrc || `${githubUrl}.png`;

  return (
    <div className="techLead">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={altText} className="teamLeadImage" />
        <p>{name}</p>
      </a>
    </div>
  );
};

export default ProfilePic;
