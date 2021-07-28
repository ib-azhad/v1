import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/ib-azhad/v1/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork ib-azhad/v1 on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/ib-azhad/v1"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star ib-azhad/v1 on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
