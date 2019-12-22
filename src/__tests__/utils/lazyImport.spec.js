import React from 'react';

import { shallow } from 'enzyme';

import LazyImport from '../../shared/utils/lazyImport';

describe('Lazy Import Helper Util', () => {
  it('should return a wrapper of loading component of the requested component chunk', () => {
    const ReposPage = LazyImport({
      loader: () => import('../../containers/PullRequests' /* webpackChunkName: 'app-chunk-repos-page' */),
    });

    const wrapper = shallow(<ReposPage />);

    expect(wrapper).toMatchSnapshot();
  });
});