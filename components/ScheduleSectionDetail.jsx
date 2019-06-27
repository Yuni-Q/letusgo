import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ScheduleSectionDetailInfo from './ScheduleSectionDetailInfo';

const StyledScheduleSectionDetail = styled.div`
  animation-name: slide-up;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  // animation-iteration-count: infinite;
  overflow: scroll;
  @keyframes slide-up {
    0% {
      height: 0px;
    }
    100% {
      height: 250px;
    }
  }
`;

const ScheduleSectionDetail = ({ show, infos, image, description }) => {
  return (
    !!show && (
      <StyledScheduleSectionDetail
        style={{
          padding: '15px 0 0 16px',
          borderTop: '1px solid',
          margin: '24px 0 0 96px',
          maxwidth: '100vw',
        }}
      >
        <div
          style={{
            padding: '0 0 16px 0',
          }}
        >
          <img
            src={image}
            alt=""
            style={{
              width: '100vw',
              maxwidth: '100vw',
              maxWidth: '151px',
              height: '151px',
              padding: '0 0 16px 0',
            }}
          />
        </div>
        <div style={{ padding: '0 0 16px 0' }}>{description}</div>
        {infos.map((info, idx) => {
          return (
            <ScheduleSectionDetailInfo
              key={idx}
              title={info.title}
              description={info.description}
            />
          );
        })}
      </StyledScheduleSectionDetail>
    )
  );
};

ScheduleSectionDetail.propTypes = {
  show: PropTypes.bool.isRequired,
  infos: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ScheduleSectionDetail;
