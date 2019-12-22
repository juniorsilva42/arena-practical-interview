/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import { CardItem, CardBody } from './styles';
import Icon from '../Icon';

const RepoCard = (props) => {
  const {
    title,
    description,
  } = props;

  return (
    <CardItem>
      <CardBody>
        <h1 className="list-title">{title}</h1>
        <h2 className="description">{description}</h2>

        <div>
          <Icon
            name={['fas', 'code-branch']}
            vendor="fa"
          />
        </div>
      </CardBody>
    </CardItem>
  );
};

export default RepoCard;
