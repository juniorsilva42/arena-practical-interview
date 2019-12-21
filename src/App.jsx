import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Logo from './shared/components/Logo';
import Footer from './shared/components/Footer';
import BarProgressIndicator from './shared/components/ProgressBarIndicator';
import { getRepos } from './store/ducks/repos';
import { getPullRequests } from './store/ducks/pullRequests';
import { GlobalStyle } from './shared/theme/core';

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
      <GlobalStyle />

      <Logo />
      <Footer />

      <BarProgressIndicator loading={isLoading} />

      <p 
        onClick={() => dispatchAndGetRepos({ page: 1 })}>
          Hello world from app
      </p>
    </>
  );
};

export default App;
