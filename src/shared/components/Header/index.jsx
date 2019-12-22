/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import Logo from '../Logo';
import { HeaderBox } from './styles';

/**
 * Component Header
 * Render default header of pages
 *
 * @return {*} component
 */
const Header = () => (
  <HeaderBox>
    <Logo />
  </HeaderBox>
);

export default Header;
