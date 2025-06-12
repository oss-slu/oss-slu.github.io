import React from 'react';
import badgeIcons from '../../../data/people/badgeIcons.json';

function Profile({ imgSrc, name, profileLink, bio, description, badges }) {
  const githubUsername = profileLink.split('/').pop();
  const githubImgSrc = `https://github.com/${githubUsername}.png`;

  // Process badges (handle empty/null values safely)
  const badgeList = badges 
    ? badges.split(',').map(b => b.trim().toLowerCase())
    : [];

  const renderBadges = () => (
    <div className="badge-container">
      {badgeList.map((badge, index) => {
        const badgeInfo = badgeIcons[badge];
        if (!badgeInfo) return null;
        return (
          <div className="badge" key={index} title={badgeInfo.label}>
            <img src={badgeInfo.icon} alt={badgeInfo.label} />
          </div>
        );
      })}
    </div>
  );

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
          <a href={profileLink}><h4>{name}</h4></a>
          <p>{bio}</p>
          {renderBadges()}
        </div>
      </div>
      : 
      <div className="techLead">
        <a href={profileLink}>
          <img src={imgSrc || githubImgSrc} alt={name} className="teamLeadImage"/>
          <p>{name}</p>
        </a>
        {renderBadges()}
      </div>
      }
    </>
  );
}

export default Profile;
