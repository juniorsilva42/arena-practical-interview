import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BarProgressIndicator from './shared/components/ProgressBarIndicator';

import { getRepos } from './store/ducks/repos';
import { getPullRequests } from './store/ducks/pullRequests';

const App = () => {
  /*
   * Redux store
  */
  const { repos, pullRequests } = useSelector((state) => state);
  const dispatcher = useDispatch();

  /*
   * Local state
  */
  const [isLoading, setIsLoading] = useState(false);

  const pageIsLoading = () => window.addEventListener('load', () => setIsLoading(true));

  useEffect(() => pageIsLoading());

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
  };

  useEffect(() => {
    // dispatchAndGetPullRequests({ creator: 'stationfy', repo: 'desafio-web' })}
    console.log(repos);
  }, [repos]);

  return (
    <>
      <BarProgressIndicator loading={isLoading} />

      <p 
        onClick={() => dispatchAndGetRepos({ page: 1 })}>
          Hello world from app
      </p>
    </>
  );
};

export default App;
