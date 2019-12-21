import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BarProgressIndicator from './shared/components/ProgressBarIndicator';
import { getRepos } from './store/ducks/repos';


const App = () => {
  /*
   * Redux store
  */
  const repos = useSelector(state => state.repos);
  const dispatcher = useDispatch();

  /*
   * Local state
  */  
  const [isLoading, setIsLoading] = useState(false);

  const pageIsLoading = () => window.addEventListener('load', () => setIsLoading(true));

  useEffect(() => pageIsLoading());

  const dispatchAndGetRepos = () => {
    dispatcher(
      getRepos({
        data: {
          query: 'language:Javascript',
          sortBy: 'stars',
          page: 1,
        }
      })
    );
  };

  return (
    <>
      <BarProgressIndicator loading={isLoading} />

      <p onClick={() => dispatchAndGetRepos()}>Hello world from app</p>
    </>
  );
};

export default App;
