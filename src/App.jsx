/**
 * External Dependencies
 */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';
import PageContainer from './shared/components/PageContainer';
import BarProgressIndicator from './shared/components/ProgressBarIndicator';
import RouterDispatcher from './shared/components/RouterDispatcher';
import { GlobalStyle } from './shared/theme/core';

const App = () => {
  /*
   * Local state
  */
  const [isLoading, setIsLoading] = useState(false);

  const pageIsLoading = () => window.addEventListener('load', () => setIsLoading(true));

  useEffect(() => pageIsLoading());

  return (
    <>
      <GlobalStyle />

      <BarProgressIndicator loading={isLoading} />

      <Header />

      <PageContainer>
        <Router>
          <RouterDispatcher />
        </Router>
      </PageContainer>

      <Footer />
    </>
  );
};

export default App;
