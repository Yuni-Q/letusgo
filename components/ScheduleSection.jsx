import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color } from '../common/color';
import ScheduleSectionDetail from './ScheduleSectionDetail';

const StyledMainInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledScheduleSession = styled.div`
  position: relative;
  box-sizing: border-box;
  height: auto;
  align-items: center;
  padding: ${props => {
    if (props.scale) {
      return '90px 0 0';
    }
    return '35px 0 0';
  }};
  margin: 8px 0;
  min-height: ${props => {
    if (props.track) {
      return 'auto';
    }
    if (props.scale) {
      return '228px';
    }
    return '110px';
  }};
  background-color: ${color.littleWhite};
  @media (max-width: 950px) {
    margin: 8px 16px;
    height: auto;
    padding: 20px 0;
  }
`;

const ScheduleSession = ({
  start,
  end,
  title,
  name,
  infos,
  image,
  description,
  scale,
}) => {
  const [track, setTrack] = useState(false);
  const ref = useRef('');
  function collapseSection(element) {
    const sectionHeight = element.scrollHeight;

    const elementTransition = element.style.transition;

    // eslint-disable-next-line no-param-reassign
    element.style.transition = '';
    requestAnimationFrame(() => {
      // eslint-disable-next-line no-param-reassign
      element.style.height = `${sectionHeight}px`;
      // eslint-disable-next-line no-param-reassign
      element.style.transition = elementTransition;
      requestAnimationFrame(() => {
        // eslint-disable-next-line no-param-reassign
        element.style.height = `${0}px`;
      });
    });
  }

  function expandSection(element) {
    const sectionHeight = element.scrollHeight;
    // eslint-disable-next-line no-param-reassign
    element.style.height = `${sectionHeight}px`;
  }
  const onClick = () => {
    if (!track && description) {
      expandSection(ref.current);
      setTrack(!track);
    } else if (description) {
      collapseSection(ref.current);
      setTrack(!track);
    }
  };
  return (
    <StyledScheduleSession onClick={onClick} scale={scale} track={track}>
      <StyledMainInfo track={track}>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              margin: '0 24px',
              lineHeight: '22px',
            }}
          >
            <div style={{ color: color.grapefruit }}>{start}</div>
            <div style={{ color: color.grapefruit }}>{end}</div>
          </div>
          <div
            style={{
              maxmaxWidth: '174px',
              margin: '0 24px 0 0',
              lineHeight: '22px',
            }}
          >
            <div
              style={{
                fontWeight: 'bold',
                fontSize: '20px',
                whiteSpace: 'nowrap',
              }}
            >
              {title}
            </div>
            <div style={{ fontSize: '16px' }}>{name}</div>
          </div>
        </div>
        {description.length > 0 && (
          <div
            style={{
              margin: '0 24px 0 0',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {track ? (
              <img
                src="https://letusgo-front.s3.ap-northeast-2.amazonaws.com/icon_arrow_up_black.svg"
                alt=""
              />
            ) : (
              <img
                src="https://letusgo-front.s3.ap-northeast-2.amazonaws.com/icon_arrow_down_black.svg"
                alt=""
              />
            )}
          </div>
        )}
      </StyledMainInfo>
      <ScheduleSectionDetail
        ref={ref}
        delayTime={500}
        isMounted={!!track}
        show={!!track}
        infos={infos}
        image={image}
        description={description}
      />
    </StyledScheduleSession>
  );
};

ScheduleSession.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  infos: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  scale: PropTypes.number,
};

ScheduleSession.defaultProps = { scale: 0 };

export default ScheduleSession;
