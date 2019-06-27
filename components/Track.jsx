import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

import ScheduleSession from './ScheduleSection';
import { color } from '../common/color';
// import TrackInfo from './TrackInfo';

const Track = ({ title, schedule, trackInfo }) => {
  return (
    <div style={{ width: '100vw', margin: '0 10px', maxWidth: '460px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottom: `2px solid ${color.electricBlue}`,
          margin: '0 0 20px 0',
        }}
      >
        <div
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            margin: '8px 0',
            color: color.electricBlue,
          }}
        >
          {title}
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundColor: color.white,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ margin: '18px 20px 35px 18px', lineHeight: '20px' }}>
            <div>참가비</div>
            <div>
              <div style={{ fontSize: '13px', color: color.warmGrey }}>
                (장소 대여 및 간단한 다과)
              </div>
              <div style={{ fontSize: '13px', color: color.warmGrey }}>
                * a트랙은 b트랙도 참가 가능
              </div>
            </div>
          </div>
          <div style={{ margin: '30px 16px 14px 0', lineHeight: '24px' }}>
            <div>학생 | 10,000원</div>
            <div>일반 | 20,000원</div>
          </div>
        </div>
        <div
          style={{
            margin: '8px 0',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              backgroundColor: color.white,
              width: 'calc(50vw - 4px)',
              maxWidth: '226px',
              margin: '8px 8px 8px 0',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                margin: '10px 0 54px 16px',
              }}
            >
              Application
            </div>
            <div
              style={{
                margin: '46px 16px 15px 0 ',
              }}
            >
              {trackInfo.application}
            </div>
          </div>
          <div
            style={{
              backgroundColor: color.white,
              width: 'calc(50vw - 4px)',
              maxWidth: '226px',
              margin: '8px 8px 8px 0',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                margin: '10px 0 54px 16px',
              }}
            >
              Venue
            </div>
            <div
              style={{
                margin: '46px 16px 15px 0 ',
              }}
            >
              {trackInfo.location}
            </div>
          </div>
        </div>
        {/* {trackInfo.map((info, idx) => {
          return (
            <TrackInfo
              key={idx}
              title={info.title}
              description={info.description}
            />
          );
        })} */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '8px 16px 13px 0 ',
          }}
        >
          <div>&nbsp;</div>
          <div style={{ fontSize: '13px', color: color.brownGrey }}>
            (장소 대여 및 간단한 다과)
          </div>
        </div>
      </div>
      <div
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          margin: '0 0 20px 0',
          color: color.electricBlue,
        }}
      >
        Schedule
      </div>
      <div
        style={{
          display: 'flex',
          // borderBottom: `2px solid ${color.electricBlue}`,
          padding: '0 0 12px 24px',
        }}
      >
        <div>05.03</div>
        <div
          style={{
            width: '88px',
            margin: '0 24px',
          }}
        >
          <hr style={{ border: `solid 1px ${color.electricBlue}` }} />
        </div>
        <div>Now</div>
      </div>
      {schedule.map((info, idx) => {
        return (
          <ScheduleSession
            key={`ScheduleSession${idx}`}
            start={info.start}
            end={info.end}
            title={info.title}
            name={info.name}
            description={info.description}
            image={info.image}
            infos={info.infos}
          />
        );
      })}
    </div>
  );
};

Track.propTypes = {
  title: PropTypes.string.isRequired,
  schedule: PropTypes.array.isRequired,
  trackInfo: PropTypes.object.isRequired,
};
export default Track;
