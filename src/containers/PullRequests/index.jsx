/**
 * External Dependencies
 */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/**
 * Internal Dependencies
 */
import Alert from '../../shared/components/Alert';
import PullRequestCard from '../../shared/components/PullRequestCard';
import { getPullRequests } from '../../store/ducks/pullRequests';
import {
  PullRequestsContainer,
  PullRequestHeader,
} from './styles/index';

/**
 * PullRequests Container
 *
 * @description connect with global redux store and render the Pull Requests page
 *
 * @param {Object} props component props.
 * @return {*} component.
 */
const PullRequests = (props) => {
  /*
   * Redux store
  */
  const { pullRequests } = useSelector((state) => state);
  const dispatcher = useDispatch();

  /*
   * Local store
  */
  const [creator, setCreator] = useState('');
  const [repo, setRepo] = useState('');

  /*
  * Dispatch action to pull request a given user and repo
  */
  const dispatchAndGetPullRequests = ({ creator, repo }) => {
    dispatcher(
      getPullRequests({
        data: {
          creator,
          repo,
          state: 'all',
        },
      }),
    );
  };

  /*
   * Get pull requests of a given creator and repo passed on url
  */
  useEffect(() => {
    const { creator, repo } = props.match.params;

    setCreator(creator);
    setRepo(repo);

    // Get pull requests
    dispatchAndGetPullRequests({ creator, repo });
  }, []);

  /*
   * Prepare and show each pull request result
  */
  const mountPullRequests = () => {
    if (pullRequests) {
      const { data, error } = pullRequests;

      if (error) {
        return (
          <span style={{ position: 'relative', top: '15px' }}>
            <Alert
              type="error"
              message="There was an error trying to get the pull requests. Probably this repo doesn't exist."
            />
          </span>
        );
      }

      if (data && data.length > 0) {
        return data.map((pull) => {
          const {
            id,
            html_url,
            body,
            number,
            state,
            title,
            user,
            created_at,
          } = pull;

          // Render by simple functional card
          return (
            <PullRequestCard
              id={id}
              title={title}
              number={number}
              user={user}
              date={created_at}
              link={html_url}
              body={body}
              state={state}
            />
          );
        });
      }
    }
  };

  /*
   * Get general info of pulls: items with state open and closed
  */
  const getPullRequestsGeneralInfo = () => {
    if (pullRequests) {
      const { data } = pullRequests;

      return {
        opened: data.filter((pull) => pull.state === 'open').length,
        closed: data.filter((pull) => pull.state === 'closed').length,
      };
    }
  };

  return (
    <PullRequestsContainer>
      <PullRequestHeader>
        Pull Requests of <b>{`${creator} / ${repo}`}</b>

        <span className="pull-status-info">
          {getPullRequestsGeneralInfo().opened} open / {getPullRequestsGeneralInfo().closed} closed
        </span>
      </PullRequestHeader>

      {mountPullRequests()}

      {pullRequests.isLoading ? (
        <>
          <PullRequestCard isLoading={pullRequests.isLoading} />
          <PullRequestCard isLoading={pullRequests.isLoading} />
          <PullRequestCard isLoading={pullRequests.isLoading} />
          <PullRequestCard isLoading={pullRequests.isLoading} />
        </>
      ) : ''}
    </PullRequestsContainer>
  );
};

export default PullRequests;
