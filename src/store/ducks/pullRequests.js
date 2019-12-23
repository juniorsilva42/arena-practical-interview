import { createReducer } from '../helpers';
import { doRequest } from '../../shared/utils/requestHandler';

/*
 * Action Types
 * */
export const Types = {
  PULL_REQUESTS_REQUESTED: 'PULLREQUESTS/REQUESTED',
  PULL_REQUESTS_FETCHED: 'PULLREQUESTS/FETCHED',
  PULL_REQUESTS_FAILED: 'PULLREQUESTS/FAILED',
};

/*
 * Initial State
 * */
const initialState = {
  data: [],
  isLoading: false,
};

/*
 * Reducer
 */
export default createReducer(initialState, {
  [Types.PULL_REQUESTS_REQUESTED]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [Types.PULL_REQUESTS_FETCHED]: (state, action) => ({
    ...state,
    data: action.payload.data,
    isLoading: false,
  }),
  [Types.PULL_REQUESTS_FAILED]: (state, action) => ({
    ...state,
    isLoading: false,
    error: action.payload,
  }),
});

// Action Creators

/**
 * Action creator to get all pull requests
 *
 * @param {Object} data to manipulate request
 * @param {Function} dispatch to dispatch async action on store
 *
 * @return {*}
*/
export const getPullRequests = ({ data }) => (dispatch) => {
  dispatch({ type: Types.PULL_REQUESTS_REQUESTED });

  const { creator, repo, state } = data;

  // Do request on Github API
  doRequest({
    method: 'GET',
    endpoint: `repos/${creator}/${repo}/pulls`,
    params: {
      state,
    },
  })
    .then((response) => {
      dispatch({
        type: Types.PULL_REQUESTS_FETCHED,
        payload: {
          data: response.data,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: Types.PULL_REQUESTS_FAILED,
        payload: error,
        error: true,
      });
    });
};
