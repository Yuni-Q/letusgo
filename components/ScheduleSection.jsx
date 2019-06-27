import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { color } from '../common/color';
import ScheduleSectionDetail from './ScheduleSectionDetail';

const ScheduleSession = ({ start, end, title, name, infos }) => {
  const [track, setTrack] = useState(false);
  return (
    <div
      onClick={() => setTrack(!track)}
      style={{
        // borderBottom: '1px solid',
        padding: '20px 0',
        margin: '8px 12px',
        backgroundColor: color.white,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              margin: '0 24px',
              lineHeight: '22px',
            }}
          >
            <div style={{ color: color.electricBlue }}>{start}</div>
            <div style={{ color: color.electricBlue }}>{end}</div>
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
            margin: '0 10px 0 0',
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
      <ScheduleSectionDetail show={!!track} infos={infos} />
    </div>
  );
};

ScheduleSession.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  infos: PropTypes.array.isRequired,
};

export default ScheduleSession;
