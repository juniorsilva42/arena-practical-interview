import { createReducer } from '../helpers';
import { doRequest } from '../../shared/utils/requestHandler';

/*
 * Action Types
 * */
export const Types = {
  REPOS_REQUESTED: 'REPOS/REQUESTED',
  REPOS_FETCHED: 'REPOS/FETCHED',
  REPOS_FAILED: 'REPOS/FAILED',
};

/*
 * Initial State
 * */
export const initialState = {
  data: [],
  isLoading: false,
};

/*
 * Reducer
 */
export default createReducer(initialState, {
  [Types.REPOS_REQUESTED]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [Types.REPOS_FETCHED]: (state, action) => ({
    ...state,
    data: action.payload.data,
    isLoading: false,
  }),
  [Types.REPOS_FAILED]: (state, action) => ({
    ...state,
    isLoading: false,
    error: action.payload,
  }),
});

/*
 * Action Creators
 * */
// Get Repos ACTION
export const getRepos = ({ data }) => (dispatch) => {
  dispatch({ type: Types.REPOS_REQUESTED });

  const { query, sortBy, page } = data;

  // Do request on Github API
  doRequest({
    method: 'GET',
    endpoint: 'search/repositories',
    params: {
      q: query,
      sort: sortBy,
      page,
    },
  })
    .then((response) => {
      dispatch({
        type: Types.REPOS_FETCHED,
        payload: {
          data: response.data,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: Types.REPOS_FAILED,
        payload: error,
        error: true,
      });
    });
};
