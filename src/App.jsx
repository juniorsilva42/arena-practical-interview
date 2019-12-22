/**
 * External Dependencies
 */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import Header from './shared/components/Header';
import PageContainer from './shared/components/PageContainer';
import BarProgressIndicator from './shared/components/ProgressBarIndicator';
import RouterDispatcher from './shared/components/RouterDispatcher';

const App = () => {
  /*
   * Local state
  */
  const [isLoading, setIsLoading] = useState(false);

  const pageIsLoading = () => window.addEventListener('load', () => setIsLoading(true));

  useEffect(() => pageIsLoading());

  return (
    <>
      <BarProgressIndicator loading={isLoading} />

      <Header />

      <PageContainer>
        <Router>
          <RouterDispatcher />
        </Router>
      </PageContainer>
    </>
  );
};

export default App;
