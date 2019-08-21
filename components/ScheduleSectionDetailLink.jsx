import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledScheduleSectionDetailLink = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const ScheduleSectionDetailLink = ({ title, description }) => {
  const gotoLink = event => {
    event.preventDefault();
    event.stopPropagation();
    window.open(description, '_black');
  };
  return (
    <StyledScheduleSectionDetailLink onClick={gotoLink}>
      <div style={{ width: '65px', padding: '0 0 3px 0', flexShrink: 0 }}>
        {title}
      </div>
      <div style={{ wordBreak: 'break-all', color: 'blue' }}>{description}</div>
    </StyledScheduleSectionDetailLink>
  );
};

ScheduleSectionDetailLink.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ScheduleSectionDetailLink;
