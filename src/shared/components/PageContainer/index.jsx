/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import { Container } from './styles';

/**
 * Component Page Container
 *
 * Render a default container to content of pages
 * @return {*}
 */
const PageContainer = (props) => {
  const divProps = { ...props };

  // page content
  let content = (
    <Container>
      <div {...divProps} />
    </Container>
  );

  return (
    <>
      <div className="arena-fixed-container">
        {content}
      </div>
    </>
  );
};

export default PageContainer;