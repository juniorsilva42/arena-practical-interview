import React from 'react';
import { mount } from 'enzyme';

import ProgressBarIndicator from '../../../shared/components/ProgressBarIndicator';

describe('ProgressBarIndicator Component', () => {
  it('should render the ProgressBarIndicator Component correctly if the page is loading', () => {
    const wrapper = mount(<ProgressBarIndicator loading={true} />);
    
    expect(wrapper).toMatchSnapshot();
  });
});
