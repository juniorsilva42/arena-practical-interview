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
 * Default action states
 */
export const reposRequestedState = state => ({
  ...state,
  isLoading: true,
});

export const reposFetchedState = (state, action) => ({
  ...state,
  data: action.payload.data,
  isLoading: false,
});

export const reposFailedState = (state, action) => ({
  ...state,
  isLoading: false,
  error: action.payload,
});

/*
 * Reducer
 */
export default createReducer(initialState, {
  [Types.REPOS_REQUESTED]: (state) => reposRequestedState(state),
  [Types.REPOS_FETCHED]: (state, action) => reposFetchedState(state, action),
  [Types.REPOS_FAILED]: (state, action) => reposFailedState(state, action),
});

// Action Creators

/**
 * Action creator to get repos of Github API
 *
 * @param {Object} data to manipulate request
 * @param {Function} dispatch to dispatch async action on store
 *
 * @return {*}
*/
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
          data: response.data.items,
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

/**
 * Action creator to get repos more repos on Github API and merge with old results
 *
 * @param {Object} data to manipulate request
 * @param {Function} dispatch to dispatch async action on store
 * @param {Object} getState contain current state on store
 *
 * @return {*}
*/
export const loadMore = ({ data }) => (dispatch, getState) => {
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
      const { data: oldData } = getState().repos;

      dispatch({
        type: Types.REPOS_FETCHED,
        payload: {
          data: [
            ...oldData,
            ...response.data.items,
          ],
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
