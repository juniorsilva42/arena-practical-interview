import repoReducer, {
  initialState,
  reposRequestedState,
  reposFetchedState,
  reposFailedState,
  Types,
} from '../store/ducks/repos';

describe('Repos Reducer', () => {
  it('should return initial state null', () => {
    const state = initialState;

    expect(repoReducer(undefined, {})).toEqual(state);
  });

  it('must handle initialization of the request repositories action', () => {
    expect(repoReducer({ isLoading: true }, Types.REPOS_REQUESTED)).toEqual(reposRequestedState());
  });

  it('must handle initialization of the fetched repositories action', () => {
    const action = {
      payload: {
        data: { name: 'react' },
      },
    };

    const mockExpected = {
      data: { name: 'react' },
      isLoading: false,
    };

    const currentState = reposFetchedState({}, action);

    expect(repoReducer(mockExpected, Types.REPOS_FETCHED)).toEqual(currentState);
  });

  it('must handle initialization of the failed repositories action', () => {
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

    const currentState = reposFailedState({}, action);

    expect(repoReducer(mockExpected, Types.REPOS_FAILED)).toEqual(currentState);
  });
});
