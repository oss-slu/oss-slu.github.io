import React from 'react';
import affiliationsData from '../../../data/people/affiliations.json'

function AffiliationCard({ name, image, url, description }) {
  return (
    <div className="affiliation-card">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="logo-container">
          <img src={image} alt={name} />
        </div>
        <h4>{name}</h4>
      </a>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Affiliations() {
  return (
    <>
      <h2>Sponsorships</h2>
      <div className="affiliations-grid">
        {affiliationsData.sponsorships.map((item, idx) => (
          <AffiliationCard key={`sponsor-${idx}`} {...item} />
        ))}
      </div>

      <h2>Partnerships</h2>
      <div className="affiliations-grid">
        {affiliationsData.partnerships.map((item, idx) => (
          <AffiliationCard key={`partner-${idx}`} {...item} />
        ))}
      </div>

      <h2>Memberships</h2>
      <div className="affiliations-grid">
        {affiliationsData.memberships.map((item, idx) => (
          <AffiliationCard key={`member-${idx}`} {...item} />
        ))}
      </div>
    </>
  );
}
