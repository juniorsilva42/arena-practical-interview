import React from 'react';
import { shallow } from 'enzyme';

import Logo from '../../../shared/components/Logo';

describe('Logo Component', () => {
  it('should render the Arena Company Logo correctly', () => {
    const wrapper = shallow(<Logo />);
    
    expect(wrapper).toMatchSnapshot();
  });
});
