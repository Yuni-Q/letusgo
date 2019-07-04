import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import AnimatedMount from '../common/AnimatedMount';
import ScheduleSectionDetailInfo from './ScheduleSectionDetailInfo';
import { color } from '../common/color';

const StyledScheduleSectionDetail = styled.div`
  overflow: hidden;
  transition: height 0.3s ease-out;
  height: 0px;
`;

const ScheduleSectionDetail = React.forwardRef(
  ({ show, infos, image, description }, ref) => {
    return (
      description.length > 0 && (
        <StyledScheduleSectionDetail
          ref={ref}
          show={show}
          style={{
            padding: '15px 16px 0 96px',
            borderTop: show ? `1px solid ${color.veryLightPink}` : 0,
            margin: '24px 0 0 0 ',
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
          <pre
            style={{
              padding: '0 0 16px 0',
              lineHeight: '22px',
              whiteSpace: 'pre-wrap',
            }}
          >
            {description}
          </pre>
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
  },
);

ScheduleSectionDetail.propTypes = {
  show: PropTypes.bool.isRequired,
  infos: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// export default AnimatedMount(ScheduleSectionDetail);
export default ScheduleSectionDetail;
