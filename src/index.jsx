/*
 * External Dependencies
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/*
 * Internal Dependencies
*/
import App from './App';
import store from './store';
import { GlobalStyle } from '../theme/core';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('app'),
);

serviceWorker.register();
