import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledScheduleSectionDetailInfo = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const ScheduleSectionDetailInfo = ({ title, description }) => {
  return (
    <StyledScheduleSectionDetailInfo>
      <div style={{ width: '65px', padding: '0 0 3px 0', flexShrink: 0 }}>
        {title}
      </div>
      <div style={{ wordBreak: 'break-all' }}>{description}</div>
    </StyledScheduleSectionDetailInfo>
  );
};

ScheduleSectionDetailInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ScheduleSectionDetailInfo;
