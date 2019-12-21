import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BarProgressIndicator from './shared/components/ProgressBarIndicator';

import { getRepos } from './store/ducks/repos';
import { getPullRequests } from './store/ducks/pullRequests';

const App = () => {
  /*
   * Redux store
  */
  const { repos, pullRequests } = useSelector(state => state);
  const dispatcher = useDispatch();

  /*
   * Local state
  */  
  const [isLoading, setIsLoading] = useState(false);

  const pageIsLoading = () => window.addEventListener('load', () => setIsLoading(true));

  useEffect(() => pageIsLoading());

  const dispatchAndGetRepos = (page = 1) => {
    dispatcher(
      getRepos({
        data: {
          query: 'language:Javascript',
          sortBy: 'stars',
          page,
        }
      })
    );
  };

  const dispatchAndGetPullRequests = ({ creator, repo }) => {
    dispatcher(
      getPullRequests({
        data: {
          creator,
          repo,
        }
      })
    );
  };

  useEffect(() => {
    console.log(pullRequests);
  }, [pullRequests]);

  return (
    <>
      <BarProgressIndicator loading={isLoading} />

      <p onClick={() => dispatchAndGetPullRequests({ creator: 'stationfy', repo: 'desafio-web' })}>Hello world from app</p>
    </>
  );
};

export default App;
