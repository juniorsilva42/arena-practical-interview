/**
 * External Dependencies
 */
import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

/**
 * Internal Dependencies
 */
import { breakWords, formatNumber } from '../../utils/helpers';
import {
  CardItem,
  CardBody,
  Stats,
  StatItem,
  User,
  UserPhoto,
  UserInfo,
} from './styles';
import Icon from '../Icon';

/**
 * RepoCard Component
 *
 * @description render a card of repository
 *
 * @param {Object} props props of component
 *
 * @return {*} component.
 */
const RepoCard = (props) => {
  /*
   * Local store
  */
  const [redirect, setIsRedirect] = useState({});

  /*
   * Function to redirect to pull requests page
  */
  const goToPullsPage = (linkPath) => setIsRedirect({ redirecting: true, link: linkPath });

  // Extract all props
  const {
    title,
    forksNumber,
    starsNumber,
    user,
    link,
    isLoading,
  } = props;

  // Segment any properties to avoid errors of null cases
  const description = props.description ? props.description : 'no description';

  let username;
  let type;
  let avatar_url;

  if (user) {
    username = user.username;
    type = user.type;
    avatar_url = user.avatar_url;
  }

  return (
    <>
      {redirect.redirecting && <Redirect to={redirect.link} />}

      <CardItem title="View repo details" onClick={() => goToPullsPage(link)}>
        <CardBody>
          <h1 className="list-title">
            {isLoading ? (
              <Skeleton count={1} duration={2} />
            ) : title}
          </h1>

          <h2 className="description">
            {isLoading ? (
              <Skeleton count={4} duration={2} />
            ) : breakWords({ text: description, toCharLimit: 85 })}
          </h2>


          <Stats>
            {isLoading ? (
              <span style={{ marginRight: '3px' }}>
                <Skeleton width={50} duration={2} />
              </span>
            ) : (
              <StatItem title={`${forksNumber} forks`}>
                <Icon name={['fas', 'code-branch']} vendor="fa" />

                <span className="number-stat">
                  {formatNumber(forksNumber)}
                </span>
              </StatItem>
            )}

            {isLoading ? (
              <Skeleton width={60} duration={2} />
            ) : (
              <StatItem title={`${starsNumber} stars`}>
                <Icon name={['fas', 'star']} vendor="fa" />

                <span className="number-stat">
                  {formatNumber(starsNumber)}
                </span>
              </StatItem>
            )}
          </Stats>

          <User>
            <UserPhoto>
              {isLoading && !avatar_url ? (
                <Skeleton circle width={30} height={30} duration={2} />
              ) : <img src={avatar_url} alt="User" />}
            </UserPhoto>

            <UserInfo>
              <p className="user-fullname">
                {isLoading && !username ? (
                  <Skeleton count={1} duration={2} />
                ) : username }
              </p>

              <p className="user-username">
                {isLoading && !type ? (
                  <Skeleton count={1} duration={2} />
                ) : type }
              </p>
            </UserInfo>
          </User>

        </CardBody>
      </CardItem>
    </>
  );
};

export default RepoCard;
