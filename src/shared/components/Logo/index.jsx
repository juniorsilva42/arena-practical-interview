/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import { LogoContainer, Figure, LogoAvatar } from './styles/index';

/**
 * Logo Component
 *
 * @description Render default logo of Arena Co
 *
 * @return {*} component
*/
const Logo = () => (
  <a href="/" title="Arena.im">
    <LogoContainer>
      <Figure>
        <LogoAvatar alt="Arena.im logo" />
      </Figure>

      <p>Practical Frontend Interview</p>
    </LogoContainer>
  </a>
);

export default Logo;
