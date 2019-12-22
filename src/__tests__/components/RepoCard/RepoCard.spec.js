import React from 'react';
import { shallow } from 'enzyme';

import RepoCard from '../../../shared/components/RepoCard';

describe('RepoCard Component', () => {
  it('should render a Repo Card correctly', () => {
    const wrapper = shallow(
      <RepoCard
        key={1}
        title="react"
        description="A declarative, efficient, and flexible JavaScript library for building user interfaces."
        starsNumber={141000}
        forksNumber={27000}
        user={{ username: 'facebook', type: 'Organization', avatar_url: 'https://avatars2.githubusercontent.com/u/69631?s=200&v=4' }}
      />,
    );
    
    expect(wrapper).toMatchSnapshot();
  });
});
