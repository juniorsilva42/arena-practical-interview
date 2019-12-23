/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import { Container } from './styles';

/**
 * Page Container Component
 *
 * @description Render a default container to content of pages
 *
 * @return {*} component
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
