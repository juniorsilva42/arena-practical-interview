/**
 * External Dependencies
 */
import React, { useEffect } from 'react';

const PullRequests = (props) => {
  useEffect(() => {
    const { creator, repo } = props.match.params;

    console.log({ creator, repo });
  }, []);

  /*
  * Dispatch action to pull request a given user and repo
  */
  const dispatchAndGetPullRequests = ({ creator, repo }) => {
    dispatcher(
      getPullRequests({
        data: {
          creator,
          repo,
        },
      }),
    );

    // dispatchAndGetPullRequests({ creator: 'stationfy', repo: 'desafio-web' })} 
  };

  return (
    <p>
      pull requests works!
    </p>
  );
};

export default PullRequests;
