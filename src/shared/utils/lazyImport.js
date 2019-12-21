import React from 'react';
import Loadable from 'react-loadable';

const LoadingComponent = () => <span></span>;

const LazyImport = (opts) => Loadable({
  ...opts,
  loading: LoadingComponent,
});

export default LazyImport;
