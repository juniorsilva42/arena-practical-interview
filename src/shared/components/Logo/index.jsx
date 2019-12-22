/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import { LogoContainer, Figure, LogoAvatar } from './styles/index';

/**
 * Component Logo
 *
 * Render Logo of Arena Co
 * @return {*}
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