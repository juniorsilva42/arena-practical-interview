import React from 'react';
import { shallow } from 'enzyme';

import ProgressBarIndicator from '../../../shared/components/ProgressBarIndicator';

describe('ProgressBarIndicator Component', () => {
  it('should render the ProgressBarIndicator Component correctly', () => {
    const wrapper = shallow(<ProgressBarIndicator />);
    
    expect(wrapper).toMatchSnapshot();
  });
});
