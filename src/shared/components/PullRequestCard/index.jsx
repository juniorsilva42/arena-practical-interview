/**
 * External Dependencies
 */
import React from 'react';
import Skeleton from 'react-loading-skeleton';

/**
 * Internal Dependencies
 */
import Icon from '../Icon';
import { formatDate } from '../../utils/helpers';
import {
  PullRequestItem,
  PullRequestItemTitle,
  PullRequestItemMetadata,
  PullRequestUser,
} from './styles/index';

/**
 * PullRequestCard Component
 *
 * @description render a card of pull request
 *
 * @param {Object} props props of component
 *
 * @return {*} component.
 */
const PullRequestCard = (props) => {
  // Extract all props
  const {
    id,
    title,
    number,
    user,
    link,
    date,
    state,
    isLoading,
  } = props;

  // Segment any properties to avoid errors of null cases
  const body = props.body ? props.body : 'no description';

  let username;
  let avatar_url;

  if (user) {
    username = user.login;
    avatar_url = user.avatar_url;
  }

  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer" key={id}>
        <PullRequestItem>
          <PullRequestItemTitle>
            <span>
              {isLoading ? (
                <span style={{ marginRight: '10px' }}>
                  <Skeleton width={30} height={15} />
                </span>
              ) : (
                <Icon
                  className="icon"
                  name={['fas', 'code-branch']}
                  vendor="fa"
                  color={state === 'open' ? '#40A745' : '#CB2431'}
                  title={state}
                />
              )}

              {isLoading ? (
                <Skeleton width={640} height={15} />
              ) : <span>#{number} {title}</span>}
            </span>
          </PullRequestItemTitle>

          <PullRequestItemMetadata>
            {isLoading ? (
              <Skeleton count={5} />
            ) : body}
          </PullRequestItemMetadata>

          <PullRequestUser>
            <span className="user-photo">
              {isLoading ? (
                <Skeleton circle width={20} height={20} />
              ) : <img src={avatar_url} alt="User" />}
            </span>

            <span className="metadata-text-info">
              {isLoading ? (
                <Skeleton width={300} height={15} />
              ) : (
                <>
                  <b className="username">{username}</b>
                  <span className="date"> — {formatDate(date)}</span>
                </>
              )}
            </span>
          </PullRequestUser>
        </PullRequestItem>
      </a>
    </>
  );
};

export default PullRequestCard;
