/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import { Heading } from './styles';

/**
 * Page Title Component
 *
 * Render a default page title heading to introduction of content of the pages
 *
 * @return {*}
 */
const PageTitle = (props) => (
  <Heading>
    <h1>{props.text}</h1>
  </Heading>
);

export default PageTitle;
