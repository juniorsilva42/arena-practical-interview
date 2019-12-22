import React from 'react';
import { shallow } from 'enzyme';

import Icon from '../../../shared/components/Icon';

describe('Icon Component', () => {
  it('should render the Icon Component correctly', () => {
    const wrapper = shallow(
      <Icon
        name={['fas', 'check-circle']}
        vendor="fa"
      />
    );
    
    expect(wrapper).toMatchSnapshot();
  });
});
