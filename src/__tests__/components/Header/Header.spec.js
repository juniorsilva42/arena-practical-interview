import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../../shared/components/Header';
import Logo from '../../../shared/components/Logo';

describe('Header Component', () => {
  it('should render the header container with the Logo component as a children', () => {
    const wrapper = shallow(
      <Header>
        <Logo />
      </Header>
    );
    
    expect(wrapper).toMatchSnapshot();
  });
});
