import React, { useState, useEffect } from 'react';

import BarProgressIndicator from './shared/components/ProgressBarIndicator';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  const pageIsLoading = () => window.addEventListener('load', () => setIsLoading(true));

  useEffect(() => pageIsLoading());

  return (
    <>
      <BarProgressIndicator loading={isLoading} />

      <p>Hello world from app</p>
    </>
  );
};

export default App;
