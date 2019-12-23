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
 * Header Component
 *
 * @description Render default header of pages
 *
 * @return {*} component
 */
const Header = () => (
  <HeaderBox>
    <Logo />
  </HeaderBox>
);

export default Header;
