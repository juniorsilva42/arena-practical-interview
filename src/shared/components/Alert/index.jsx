/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import { AlertContainer } from './styles/index';

/**
 * Component Alert
 *
 * Render Alert
 * @return {*}
 */
const Alert = (props) => {
  const {
    type,
    message,
  } = props;

  return (
    <AlertContainer type={type}>
      {message}
    </AlertContainer>
  );
};

export default Alert;
