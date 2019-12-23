/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import { AlertContainer } from './styles/index';

/**
 * Alert Component
 *
 * @description to render a alert div for messages
 *
 * @param {Object} props props of component
 *
 * @return {*} component.
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
