import React from 'react';
import { shallow } from 'enzyme';

import PageContainer from '../../../shared/components/PageContainer';

describe('PageContainer Component', () => {
  it('should render a Page Container with content as children correctly', () => {
    const wrapper = shallow(
      <PageContainer>
        <p>Real-time content platform</p>
      </PageContainer>,
    );
    
    expect(wrapper).toMatchSnapshot();
  });
});
