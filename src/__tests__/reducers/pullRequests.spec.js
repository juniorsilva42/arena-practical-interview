import pullRequestReducer, {
  initialState,
  pullRequestsRequestedState,
  pullRequestsFetchedState,
  pullRequestsFailedState,
  Types,
} from '../../store/ducks/pullRequests';

describe('Pull Requests Reducer', () => {
  it('should return initial state null', () => {
    const state = initialState;

    expect(pullRequestReducer(undefined, {})).toEqual(state);
  });

  it('must handle initialization of the requested action pull requests', () => {
    const currentState = pullRequestsRequestedState();

    const mockExpected = { isLoading: true };

    expect(pullRequestReducer(mockExpected, Types.PULL_REQUESTS_REQUESTED)).toEqual(currentState);
  });

  it('must handle initialization of the fetched action pull requests', () => {
    const action = {
      payload: {
        data: { title: 'pull request title' },
      },
    };

    const mockExpected = {
      data: { title: 'pull request title' },
      isLoading: false,
    };

    const currentState = pullRequestsFetchedState({}, action);

    expect(pullRequestReducer(mockExpected, Types.PULL_REQUESTS_FETCHED)).toEqual(currentState);
  });

  it('must handle initialization of the failed action of pull requests', () => {
    const action = {
      payload: {
        error: true,
      },
    };

    const mockExpected = {
      isLoading: false,
      error: {
        error: true
      },
    };

    const currentState = pullRequestsFailedState({}, action);

    expect(pullRequestReducer(mockExpected, Types.PULL_REQUESTS_FAILED)).toEqual(currentState);
  });  
});
