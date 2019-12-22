/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import { Heading } from './styles';

/**
 * Component Page Container
 *
 * Render a default container to content of pages
 * @return {*}
 */
const PageTitle = (props) => (
  <Heading>
    <h1>{props.text}</h1>
  </Heading>
);

export default PageTitle;
