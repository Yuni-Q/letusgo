import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledScheduleSectionDetailInfo = styled.div`
  display: 'flex';
`;

const ScheduleSectionDetailInfo = ({ title, description }) => {
  return (
    <StyledScheduleSectionDetailInfo>
      <div style={{ width: '68px', padding: '0 0 3px 0' }}>{title}</div>
      <div>{description}</div>
    </StyledScheduleSectionDetailInfo>
  );
};

ScheduleSectionDetailInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ScheduleSectionDetailInfo;
