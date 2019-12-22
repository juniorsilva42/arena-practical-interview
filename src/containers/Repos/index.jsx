/**
 * External Dependencies
 */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

/**
 * Internal Dependencies
 */
import { CardWrapper } from '../../shared/components/RepoCard/styles';
import { getRepos } from '../../store/ducks/repos';
import { getPullRequests } from '../../store/ducks/pullRequests';
import RepoCard from '../../shared/components/RepoCard';

const Repos = () => {
  /*
   * Redux store
  */
  const { repos, pullRequests } = useSelector((state) => state);
  const dispatcher = useDispatch();

  /*
   * Dispatch action to get all repos
  */
  const dispatchAndGetRepos = ({ page }) => {
    dispatcher(
      getRepos({
        data: {
          query: 'language:Javascript',
          sortBy: 'stars',
          page,
        },
      }),
    );
  };

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
    <>
      <CardWrapper>
        <RepoCard title="bitcoin" description="Bitcoin Core integration/staging tree" />
      </CardWrapper>
    </>
  );
};

export default Repos;
