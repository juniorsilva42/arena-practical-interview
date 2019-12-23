/**
 * External Dependencies
 */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PullRequestCard from '../../shared/components/PullRequestCard';
import {
  PullRequestsContainer,
  PullRequestHeader,
} from './styles/index';
import { getPullRequests } from '../../store/ducks/pullRequests';

const PullRequests = (props) => {
  /*
   * Redux store
  */
  const { pullRequests } = useSelector((state) => state);
  const dispatcher = useDispatch();

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

  useEffect(() => {
    const { creator, repo } = props.match.params;

    setCreator(creator);
    setRepo(repo);

    dispatchAndGetPullRequests({ creator, repo });
  }, []);

  const mountPullRequests = () => {
    if (pullRequests) {
      const { data } = pullRequests;

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
