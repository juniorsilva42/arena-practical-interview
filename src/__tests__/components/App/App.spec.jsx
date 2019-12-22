import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';

import App from '../../../App';

const mockStore = configureMockStore();
const store = mockStore({ data: [], isLoading: false });

describe('App', () => {
  it('should render the App Component correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
