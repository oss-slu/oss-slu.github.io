import React from 'react';
import { Link } from 'react-router-dom';

function SlackButton({ className }) {
  return (
    <Link
      className={className + ' button button--secondary button--lg'}
      title={"Open link to Slack channel in a new tab"}
      to='/connect_with/community'
    >
      Contribute
    </Link>
  )
}

export default SlackButton;