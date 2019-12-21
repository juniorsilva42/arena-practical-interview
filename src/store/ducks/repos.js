import { createReducer } from '../helpers';

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
  repos: [],
  isLoading: false,
};

/*
 * Reducer
 */
export default createReducer(initialState, {
  [Types.REPOS_REQUEST]: (state, action) => ({
    ...state,
    isLoading: true,
  }),
  [Types.REPOS_FETCHED]: (state, action) => ({
    ...state,
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
export const getRepos = data => (dispatch, getState) => {
  dispatch({ type: Types.REPOS_REQUEST, payload: data });
};