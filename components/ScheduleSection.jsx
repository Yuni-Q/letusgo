import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color } from '../common/color';
import ScheduleSectionDetail from './ScheduleSectionDetail';

const StyledScheduleSession = styled.div`
  padding: 20px 0;
  margin: 8px 0;
  background-color: ${color.littleWhite};
  @media (max-width: 950px) {
    margin: 8px 16px;
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
}) => {
  const [track, setTrack] = useState(false);
  return (
    <StyledScheduleSession onClick={() => setTrack(!track)}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
            <div style={{ fontWeight: 'bold', fontSize: '20px' }}>{title}</div>
            <div style={{ fontSize: '16px' }}>{name}</div>
          </div>
        </div>
        <div
          style={{
            margin: '0 24px 0 0',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {track ? (
            <img src="/static/icon_arrow_up_black.svg" alt="" />
          ) : (
            <img src="/static/icon_arrow_down_black.svg" alt="" />
          )}
        </div>
      </div>
      <ScheduleSectionDetail
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
};

export default ScheduleSession;
