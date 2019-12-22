/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
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

const RepoCard = (props) => {
  const {
    title,
    description,
  } = props;

  return (
    <CardItem title="View repo details">
      <CardBody>
        <h1 className="list-title">{title}</h1>
        <h2 className="description">{description}</h2>

        <Stats>
          <StatItem title="14 forks">
            <Icon name={['fas', 'code-branch']} vendor="fa" />
            <span className="number-stat">14</span>
          </StatItem>

          <StatItem title="1.5k stars">
            <Icon name={['fas', 'star']} vendor="fa" />
            <span className="number-stat">1.5k</span>
          </StatItem>
        </Stats>

        <User>
          <UserPhoto />

          <UserInfo>
            <p className="user-fullname">Junior Silva</p>
            <p className="user-username">jsiilva1</p>
          </UserInfo>
        </User>

      </CardBody>
    </CardItem>
  );
};

export default RepoCard;
