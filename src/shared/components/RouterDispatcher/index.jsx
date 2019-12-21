import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LazyImport from '../../utils/lazyImport';

const ReposPage = LazyImport({
  loader: () => import('../../../containers/Repos' /* webpackChunkName: 'app-chunk-repos-page' */),
});

export default (() => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ReposPage} />
      </Switch>
    </>
  );
});