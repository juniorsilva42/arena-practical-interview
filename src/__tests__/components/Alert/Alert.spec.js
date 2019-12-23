import React from 'react';
import { shallow } from 'enzyme';

import Alert from '../../../shared/components/Alert';

describe('Alert Component', () => {
  it('should render the Alert Component correctly', () => {
    const wrapper = shallow(
      <Alert
        message='Message test'
        type="error"
      />
    );
    
    expect(wrapper).toMatchSnapshot();
  });
});
