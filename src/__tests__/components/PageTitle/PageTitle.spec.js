import React from 'react';
import { shallow } from 'enzyme';

import PageTitle from '../../../shared/components/PageTitle';

describe('PageTitle Component', () => {
  it('should render a h1 with a title passed by props', () => {
    const wrapper = shallow(
      <PageTitle text="Arena Platform" />
    );
    
    expect(wrapper).toMatchSnapshot();
  });
});
