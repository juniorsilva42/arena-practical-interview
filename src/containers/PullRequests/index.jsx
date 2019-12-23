/**
 * External Dependencies
 */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icon from '../../shared/components/Icon';
import {
  PullRequestsContainer,
  PullRequestItem,
  PullRequestHeader,
  PullRequestItemTitle,
  PullRequestItemMetadata,
  PullRequestUser,
} from './styles/index';
import { getPullRequests } from '../../store/ducks/pullRequests';
import { formatDate } from '../../shared/utils/helpers';

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
            <a href={html_url} target="_blank" rel="noopener noreferrer" key={id}>
              <PullRequestItem>
                <PullRequestItemTitle>
                  <Icon
                    className="icon"
                    name={['fas', 'code-branch']}
                    vendor="fa"
                    color={state === 'open' ? '#40A745' : '#CB2431'}
                    title={state}
                  />
                  #{number} {title}
                </PullRequestItemTitle>

                <PullRequestItemMetadata>
                  {body}
                </PullRequestItemMetadata>

                <PullRequestUser>
                  <span className="user-photo">
                    <img src={user.avatar_url} alt="" />
                  </span>

                  <span className="metadata-text-info">
                    <b className="username">{user.login}</b> <span className="date">at {formatDate(created_at)}</span>
                  </span>
                </PullRequestUser>
              </PullRequestItem>
            </a>
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
    </PullRequestsContainer>
  );
};

export default PullRequests;
