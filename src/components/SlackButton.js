import React from 'react';

function SlackButton({ className }) {
  return (
    <a className={className} title={"Open link to Slack channel in a new tab"} onClick={() => {
      window.open('https://join.slack.com/t/oswslu/shared_invite/zt-24f0qhjbo-NkSfQ4LOg5wXxBdxP4vzfA', '_blank').focus()
    }}>Contribute</a>
  )
}

export default SlackButton;