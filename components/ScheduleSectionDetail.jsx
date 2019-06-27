import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ScheduleSectionDetailInfo from './ScheduleSectionDetailInfo';

const StyledScheduleSectionDetail = styled.div`
  height: 430px;
  animation-name: slide-up;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  // animation-iteration-count: infinite;
  overflow: hidden;
  @keyframes slide-up {
    0% {
      height: 0px;
    }
    100% {
      height: 430px;
    }
  }
`;

const ScheduleSectionDetail = ({ show, infos }) => {
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
          <div
            style={{
              width: '100vw',
              maxwidth: '100vw',
              maxWidth: '151px',
              height: '151px',
              background: 'gray',
              padding: '0 0 16px 0',
            }}
          />
        </div>
        <div style={{ padding: '0 0 16px 0' }}>설명</div>
        {infos.map((info, idx) => {
          return (
            <ScheduleSectionDetailInfo
              key={idx}
              title={info.title}
              description={info.description}
            />
          );
        })}

        <div style={{ display: 'flex' }}>
          <div style={{ width: '68px', padding: '0 0 3px 0' }}>email</div>
          <div>abc@naver.com</div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '68px', padding: '0 0 3px 0' }}>email</div>
          <div>abc@naver.com</div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '68px', padding: '0 0 3px 0' }}>email</div>
          <div>abc@naver.com</div>
        </div>
      </StyledScheduleSectionDetail>
    )
  );
};

ScheduleSectionDetail.propTypes = {
  show: PropTypes.bool.isRequired,
  infos: PropTypes.array.isRequired,
};

export default ScheduleSectionDetail;
