/**
 * External Dependencies
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { pascalCase } from 'change-case';
import * as FeatherIcons from 'react-feather';
import * as far from '@fortawesome/free-regular-svg-icons';
import * as fas from '@fortawesome/free-solid-svg-icons';
import * as fab from '@fortawesome/free-brands-svg-icons';

const faLib = {
  far,
  fas,
  fab,
};

/**
 * Icon Component
 *
 * @description Render a passed icon with props
 *
 * @param {Object} props component props.
 *
 * @return {*} component
*/
const Icon = (props) => {
  const {
    vendor = 'feather',
  } = props;

  let { name } = props;

  let result = '';

  const opts = { ...props };
  delete opts.vendor;

  opts.className = `${(opts.className || '')} arena-icon`;

  // Feather.
  if (vendor === 'feather') {
    name = pascalCase(name);

    if (!FeatherIcons[name]) {
      name = 'AlertTriangle';
    }

    const RenderIcon = FeatherIcons[name];

    result = <RenderIcon {...opts} strokeWidth="1.5" />;
  }

  // FontAwesome.
  if (vendor === 'fa') {
    let icon = '';
    let lib = 'far';

    if (Array.isArray(name)) {
      lib = name[0];
      name = name[1];
    }

    name = `fa${pascalCase(name)}`;

    if (faLib[lib] && faLib[lib][name]) {
      icon = faLib[lib][name];
    }

    result = icon ? <FontAwesomeIcon {...opts} icon={icon} /> : '';
  }

  return result;
};

export default Icon;
