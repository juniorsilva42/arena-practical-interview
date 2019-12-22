import React from 'react';
import { shallow } from 'enzyme';

import RouterDispatcher from '../../../shared/components/RouterDispatcher';

describe('RouterDispatcher Component', () => {
  it('should render the switch router correctly', () => {
    const wrapper = shallow(<RouterDispatcher />);
    
    expect(wrapper).toMatchSnapshot();
  });
});
