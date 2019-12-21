/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import TopBarProgressIndicator from 'react-topbar-progress-indicator';

/**
 * BarProgressIndicator Component
 * 
 * Render a top progress bar on load page
 *
 * @param {Object} props component props.
 * 
 * @return {Object} component.
 */
const ProgressBarIndicator = (props) => {
  const { loading } = props;

  TopBarProgressIndicator.config({
    barColors: {
      0: '#9B53E8',
    },
    shadowBlur: 0,
    barThickness: 2,
  });

  return (
    <>
      {!loading && (
        <TopBarProgressIndicator />
      )}
    </>
  );
};

export default ProgressBarIndicator;
