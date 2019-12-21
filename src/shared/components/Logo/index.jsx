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
  <LogoContainer>
    <Figure>
      <LogoAvatar title="Arena.im" alt="Arena.im logo" />
    </Figure>

    <p>Practical Frontend Interview</p>
  </LogoContainer>
);

export default Logo;