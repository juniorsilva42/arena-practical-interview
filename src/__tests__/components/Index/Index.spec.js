import React from 'react';
import { render } from 'react-dom';

import Root from '../../../index';

const mockStore = configureMockStore();
const store = mockStore({ data: [], isLoading: false });

describe('App', () => {
  it('should render the app without crashing', () => {
    const div = document.createElement('div');
    render(<Root />, div)
  });
});
