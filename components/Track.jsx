import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ScheduleSession from './ScheduleSection';
import { color } from '../common/color';
// import TrackInfo from './TrackInfo';
const StyledTrack = styled.div`
  width: 100vw;
  margin: 0 10px 60px 10px;
  maxwidth: 460px;
  @media (max-width: 950px) {
    margin: 0 0 60px;
  }
`;

const StyledSchedule = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 8px 0 20px 0;
  color: ${color.grapefruit};
  @media (max-width: 950px) {
    margin: 24px 0 20px 0;
    padding: 0 0 0 24px;
  }
`;

const StyledTrackInfo1 = styled.div`
  background-color: ${color.littleWhite};
  display: flex;
  max-height: 113px;
  justify-content: space-between;
  @media (max-width: 950px) {
    margin: 0 16px;
    max-height: none;
  }
`;

const StyledTrackInfo2 = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 950px) {
    margin: 0 16px;
  }
`;

const StyledSplitCard = styled.div`
  background-color: ${color.littleWhite};
  width: calc(50vw - 4px);
  max-width: 226px;
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 950px) {
    max-width: 950px;
  }
`;

const Track = ({ title, schedule, trackInfo, pay }) => {
  return (
    <StyledTrack>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // borderBottom: `2px solid ${color.grapefruit}`,
          margin: '0 0 20px 0',
        }}
      >
        <div
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            margin: '8px 0',
            color: color.grapefruit,
          }}
        >
          {title}
        </div>
      </div>
      <div>
        <StyledTrackInfo1>
          <div
            style={{
              margin: '18px 20px 35px 18px',
              lineHeight: '20px',
            }}
          >
            <div>참가비</div>
            <div>
              <pre
                style={{
                  fontSize: '13px',
                  color: color.warmGrey,
                }}
              >
                {trackInfo.description}
              </pre>
            </div>
          </div>
          <div style={{ margin: '44px 16px 14px 0', lineHeight: '24px' }}>
            <div>{`학생 |  ${pay.student}`}</div>
            <div>{`일반 |  ${pay.nonStudent}`}</div>
          </div>
        </StyledTrackInfo1>
        <StyledTrackInfo2>
          <StyledSplitCard
            style={{
              margin: '8px 8px 8px 0',
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
          </StyledSplitCard>
          <StyledSplitCard>
            <div
              style={{
                margin: '10px 0 54px 16px',
              }}
            >
              Venue
            </div>
            <pre
              style={{
                margin: '46px 16px 15px 0 ',
                lineHeight: '24px',
              }}
            >
              {trackInfo.location}
            </pre>
          </StyledSplitCard>
        </StyledTrackInfo2>
        {/* {trackInfo.map((info, idx) => {
          return (
            <TrackInfo
              key={idx}
              title={info.title}
              description={info.description}
            />
          );
        })} */}
      </div>
      <StyledSchedule>Schedule</StyledSchedule>
      <div
        style={{
          display: 'flex',
          // borderBottom: `2px solid ${color.grapefruit}`,
          padding: '0 0 12px 24px',
        }}
      >
        <div>08.03</div>
        <div
          style={{
            width: '88px',
            margin: '0 24px',
          }}
        >
          <hr style={{ border: `solid 1px ${color.grapefruit}` }} />
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
    </StyledTrack>
  );
};

Track.propTypes = {
  title: PropTypes.string.isRequired,
  schedule: PropTypes.array.isRequired,
  trackInfo: PropTypes.object.isRequired,
  pay: PropTypes.object.isRequired,
};
export default Track;
