import React from 'react';

function Profile({ imgSrc, name, profileLink,bio, description }) {
  const githubUsername = profileLink.split('/').pop();
  const githubImgSrc = `https://github.com/${githubUsername}.png`;

  return (
    <>
    {bio ? 
    <div className="lead-container">
      <div className="lead-image">
        <a href={profileLink}>
          <img src={imgSrc || githubImgSrc} alt={name} />
        </a>
      </div>
      <div className="lead-description">
        <a href={profileLink}>
          <h4>{name}</h4>
        </a>
        <p>{bio}</p>
      </div>
    </div>
     : 
     <div className="techLead">
      <a href={profileLink}>
        <img src={imgSrc || githubImgSrc} alt={name} className="teamLeadImage"/>
        <p>{name}</p>
      </a>
    </div>
     }
    </>
  );
  
}

export default Profile;
