import React from 'react';
import styles from '../pages/index.module.css';

function SlackButton() {
  return (
    <button className='button button--secondary button--lg' title={"Open link to Slack channel in a new tab"} onClick={() => {
      window.open('https://join.slack.com/t/oswslu/shared_invite/zt-24f0qhjbo-NkSfQ4LOg5wXxBdxP4vzfA', '_blank').focus()
    }}>Contribute</button>
  )
}

export default SlackButton;