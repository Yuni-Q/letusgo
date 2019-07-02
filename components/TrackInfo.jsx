import React from 'react';
import PropTypes from 'prop-types';

import { color } from '../common/color';

const TrackInfo = ({ title, description }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '18px 8px',
        // borderBottom: '1px solid',
        padding: '14px 12px',
        backgroundColor: color.littleWhite,
      }}
    >
      <div style={{ fontWeight: 'bold', color: color.grapefruit }}>{title}</div>
      <div>{description}</div>
    </div>
  );
};

TrackInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TrackInfo;
