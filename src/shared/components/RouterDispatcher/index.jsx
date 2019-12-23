import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LazyImport from '../../utils/lazyImport';

/**
 * Pass component to lazy loading dynamic imports
 */
const PullRequestsPage = LazyImport({
  loader: () => import('../../../containers/PullRequests' /* webpackChunkName: 'app-chunk-pullrequests-page' */),
});

const ReposPage = LazyImport({
  loader: () => import('../../../containers/Repos' /* webpackChunkName: 'app-chunk-repos-page' */),
});

/**
 * @description Dispatch Switch Router controller
 *
 * @return {*} component.
 */
export default (() => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ReposPage} />
        <Route exact path="/pulls/:creator/:repo" component={PullRequestsPage} />
      </Switch>
    </>
  );
});