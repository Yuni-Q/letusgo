import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AnimatedMount from '../common/AnimatedMount';
import ScheduleSectionDetailInfo from './ScheduleSectionDetailInfo';
import { color } from '../common/color';

const StyledScheduleSectionDetail = styled.div`
  ${props => {
    if (props.show) {
      return `
        animation: scale-up-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        @keyframes scale-up-top {
          0% {
            transform: scale(0);
            transform-origin: 25% 0%;
          }
          100% {
            transform: scale(1);
            transform-origin: 25% 0%;
          }
        }    
      `;
    }
    return `
      animation: scale-down-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      @keyframes scale-down-top {
        0% {
          transform: scale(1);
          transform-origin: 25% 0%;
        }
        100% {
          transform: scale(0);
          transform-origin: 25% 0%;
        }
      }    
    `;
  }}
`;

const ScheduleSectionDetail = ({ show, infos, image, description }) => {
  return (
    <StyledScheduleSectionDetail
      show={show}
      style={{
        padding: '15px 0 0 16px',
        borderTop: `1px solid ${color.veryLightPink}`,
        margin: '24px 16px 0 80px',
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
      <div style={{ padding: '0 0 16px 0', lineHeight: '22px' }}>
        {description}
      </div>
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
  );
};

ScheduleSectionDetail.propTypes = {
  show: PropTypes.bool.isRequired,
  infos: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AnimatedMount(ScheduleSectionDetail);
