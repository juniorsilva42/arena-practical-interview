/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import { breakWords } from '../../utils/helpers';
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
    forksNumber,
    starsNumber,
    user,
  } = props;

  const {
    username,
    type,
    avatar_url,
  } = user;

  return (
    <CardItem title="View repo details">
      <CardBody>
        <h1 className="list-title">{title}</h1>
        <h2 className="description">{breakWords({ text: description, toCharLimit: 85 })}</h2>

        <Stats>
          <StatItem title={`${forksNumber} forks`}>
            <Icon name={['fas', 'code-branch']} vendor="fa" />
            <span className="number-stat">{forksNumber}</span>
          </StatItem>

          <StatItem title={`${starsNumber} stars`}>
            <Icon name={['fas', 'star']} vendor="fa" />
            <span className="number-stat">{starsNumber}</span>
          </StatItem>
        </Stats>

        <User>
          <UserPhoto>
            <img src={avatar_url} alt={username} />
          </UserPhoto>

          <UserInfo>
            <p className="user-fullname">{username}</p>
            <p className="user-username">{type}</p>
          </UserInfo>
        </User>

      </CardBody>
    </CardItem>
  );
};

export default RepoCard;
