import React from 'react';
import PropTypes from 'prop-types';

const ScheduleSectionDetailInfo = ({ title, description }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '68px', padding: '0 0 3px 0' }}>{title}</div>
      <div>{description}</div>
    </div>
  );
};

ScheduleSectionDetailInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ScheduleSectionDetailInfo;
