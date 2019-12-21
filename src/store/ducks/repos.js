import { createReducer } from '../helpers';
import { doRequest } from '../../shared/utils/requestHandler';

/*
 * Action Types
 * */
export const Types = {
  REPOS_REQUEST: 'REPOS/REQUEST',
  REPOS_FETCHED: 'REPOS/SUCCESS',
  REPOS_FAILED: 'REPOS/FAILED',
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
  [Types.REPOS_REQUEST]: (state) => ({
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
  dispatch({ type: Types.REPOS_REQUEST });

  // Do request on Github API
  doRequest({
    method: 'GET',
    endpoint: 'search/repositories',
    params: {
      q: data.query,
      sort: data.sortBy,
      page: data.page,
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
