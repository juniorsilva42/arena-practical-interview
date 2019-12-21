import { combineReducers } from 'redux';

import repos from './ducks/repos';
import pullRequests from './ducks/pullRequests';

export default combineReducers({
  repos,
  pullRequests,
});
