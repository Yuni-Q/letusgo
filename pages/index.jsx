import React, { useState } from 'react';

import Menu from '../components/Menu';
import { color } from '../common/color';

const Index = () => {
  const [trackA1, setTrackA1] = useState(false);
  const [trackA2, setTrackA2] = useState(false);
  const [trackA3, setTrackA3] = useState(false);
  const [trackA4, setTrackA4] = useState(false);
  const [trackB1, setTrackB1] = useState(false);
  const [trackB2, setTrackB2] = useState(false);
  const [trackB3, setTrackB3] = useState(false);
  const [trackB4, setTrackB4] = useState(false);

  return (
    <div
      style={{
        width: '960px',
      }}
    >
      <Menu />
      <div
        style={{
          margin: '90px 0 20px 10px',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        [2018 Spring]
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ width: '460px', margin: '0 10px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid',
              margin: '0 0 20px 0',
            }}
          >
            <div
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                margin: '8px 0',
              }}
            >
              track A
            </div>
          </div>
          <div style={{}}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '18px 0 0 0',
                borderBottom: '1px solid',
                padding: '0 20px 14px 20px',
              }}
            >
              <div style={{ fontWeight: 'bold' }}>application</div>
              <div>100명</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '18px 0 0 0',
                borderBottom: '1px solid',
                padding: '0 20px 14px 20px',
              }}
            >
              <div style={{ fontWeight: 'bold' }}>venue</div>
              <div>코엑스 아트홀</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '18px 0 0 0',
                borderBottom: '1px solid',
                padding: '0 20px 14px 20px',
              }}
            >
              <div style={{ fontWeight: 'bold' }}>Entry fee</div>
              <div>일반 20,000원</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '18px 0 0 0',
                borderBottom: '1px solid',
                padding: '0 20px 14px 20px',
              }}
            >
              <div>&nbsp;</div>
              <div>학생 10,000원</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '8px 16px 13px 0 ',
              }}
            >
              <div>&nbsp;</div>
              <div>(장소 대여 및 간단한 다과)</div>
            </div>
          </div>
          <div
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              margin: '0 0 20px 0',
            }}
          >
            schedule
          </div>
          <div
            style={{
              display: 'flex',
              borderBottom: '1px solid',
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
              <hr />
            </div>
            <div>Now</div>
          </div>
          <div
            onClick={() => setTrackA1(!trackA1)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid',
              padding: '24px 0',
            }}
          >
            <div style={{ display: 'flex' }}>
              <div style={{ margin: '0 24px', lineHeight: '20px' }}>
                <div>12:30</div>
                <div>01:20</div>
              </div>
              <div
                style={{
                  width: '174px',
                  margin: '0 24px 0 0',
                  lineHeight: '20px',
                }}
              >
                <div style={{ fontWeight: 'bold' }}>Speker name!!!</div>
                <div>Section TITLE</div>
              </div>
            </div>
            <div
              style={{
                margin: '0 10px 0 0',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {trackA1 ? (
                <img src="/static/icon_arrow_up_black.svg" alt="" />
              ) : (
                <img src="/static/icon_arrow_down_black.svg" alt="" />
              )}
            </div>
          </div>
          <div
            onClick={() => setTrackA2(!trackA2)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid',
              padding: '24px 0',
            }}
          >
            <div style={{ display: 'flex' }}>
              <div style={{ margin: '0 24px', lineHeight: '20px' }}>
                <div>12:30</div>
                <div>01:20</div>
              </div>
              <div
                style={{
                  width: '174px',
                  margin: '0 24px 0 0',
                  lineHeight: '20px',
                }}
              >
                <div style={{ fontWeight: 'bold' }}>Speker name</div>
                <div>Section TITLE</div>
              </div>
            </div>
            <div
              style={{
                margin: '0 10px 0 0',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {trackA2 ? (
                <img src="/static/icon_arrow_up_black.svg" alt="" />
              ) : (
                <img src="/static/icon_arrow_down_black.svg" alt="" />
              )}
            </div>
          </div>
          <div
            onClick={() => setTrackA3(!trackA3)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid',
              padding: '24px 0',
            }}
          >
            <div style={{ display: 'flex' }}>
              <div style={{ margin: '0 24px', lineHeight: '20px' }}>
                <div>12:30</div>
                <div>01:20</div>
              </div>
              <div
                style={{
                  width: '174px',
                  margin: '0 24px 0 0',
                  lineHeight: '20px',
                }}
              >
                <div style={{ fontWeight: 'bold' }}>Speker name</div>
                <div>Section TITLE</div>
              </div>
            </div>
            <div
              style={{
                margin: '0 10px 0 0',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {trackA3 ? (
                <img src="/static/icon_arrow_up_black.svg" alt="" />
              ) : (
                <img src="/static/icon_arrow_down_black.svg" alt="" />
              )}
            </div>
          </div>
          <div
            onClick={() => setTrackA4(!trackA4)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid',
              padding: '24px 0',
            }}
          >
            <div style={{ display: 'flex' }}>
              <div style={{ margin: '0 24px', lineHeight: '20px' }}>
                <div>12:30</div>
                <div>01:20</div>
              </div>
              <div
                style={{
                  width: '174px',
                  margin: '0 24px 0 0',
                  lineHeight: '20px',
                }}
              >
                <div style={{ fontWeight: 'bold' }}>Speker name</div>
                <div>Section TITLE</div>
              </div>
            </div>
            <div
              style={{
                margin: '0 10px 0 0',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {trackA4 ? (
                <img src="/static/icon_arrow_up_black.svg" alt="" />
              ) : (
                <img src="/static/icon_arrow_down_black.svg" alt="" />
              )}
            </div>
          </div>
        </div>
        <div style={{ width: '460px', margin: '0 10px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: `1px solid ${color.electricBlue}`,
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
              track B
            </div>
          </div>
          <div style={{}}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '18px 0 0 0',
                borderBottom: '1px solid',
                padding: '0 20px 14px 20px',
              }}
            >
              <div style={{ fontWeight: 'bold', color: color.electricBlue }}>
                application
              </div>
              <div>100명</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '18px 0 0 0',
                borderBottom: '1px solid',
                padding: '0 20px 14px 20px',
              }}
            >
              <div style={{ fontWeight: 'bold', color: color.electricBlue }}>
                venue
              </div>
              <div>코엑스 아트홀</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '18px 0 0 0',
                borderBottom: '1px solid',
                padding: '0 20px 14px 20px',
              }}
            >
              <div style={{ fontWeight: 'bold', color: color.electricBlue }}>
                Entry fee
              </div>
              <div>일반 20,000원</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '18px 0 0 0',
                borderBottom: '1px solid',
                padding: '0 20px 14px 20px',
              }}
            >
              <div>&nbsp;</div>
              <div>학생 10,000원</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '8px 16px 13px 0 ',
              }}
            >
              <div>&nbsp;</div>
              <div>(장소 대여 및 간단한 다과)</div>
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
            schedule
          </div>
          <div
            style={{
              display: 'flex',
              borderBottom: '1px solid',
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
              <hr />
            </div>
            <div>Now</div>
          </div>
          <div
            onClick={() => setTrackB1(!trackB1)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid',
              padding: '24px 0',
            }}
          >
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  margin: '0 24px',
                  color: color.electricBlue,
                  lineHeight: '20px',
                }}
              >
                <div>12:30</div>
                <div>01:20</div>
              </div>
              <div
                style={{
                  width: '174px',
                  margin: '0 24px 0 0',
                  lineHeight: '20px',
                }}
              >
                <div style={{ fontWeight: 'bold' }}>Speker name</div>
                <div>Section TITLE</div>
              </div>
            </div>
            <div
              style={{
                margin: '0 10px 0 0',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {trackB1 ? (
                <img src="/static/icon_arrow_up_blue.svg" alt="" />
              ) : (
                <img src="/static/icon_arrow_down_blue.svg" alt="" />
              )}
            </div>
          </div>
          <div
            onClick={() => setTrackB2(!trackB2)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid',
              padding: '24px 0',
            }}
          >
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  margin: '0 24px',
                  color: color.electricBlue,
                  lineHeight: '20px',
                }}
              >
                <div>12:30</div>
                <div>01:20</div>
              </div>
              <div
                style={{
                  width: '174px',
                  margin: '0 24px 0 0',
                  lineHeight: '20px',
                }}
              >
                <div style={{ fontWeight: 'bold' }}>Speker name</div>
                <div>Section TITLE</div>
              </div>
            </div>
            <div
              style={{
                margin: '0 10px 0 0',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {trackB2 ? (
                <img src="/static/icon_arrow_up_blue.svg" alt="" />
              ) : (
                <img src="/static/icon_arrow_down_blue.svg" alt="" />
              )}
            </div>
          </div>
          <div
            onClick={() => setTrackB3(!trackB3)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid',
              padding: '24px 0',
            }}
          >
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  margin: '0 24px',
                  color: color.electricBlue,
                  lineHeight: '20px',
                }}
              >
                <div>12:30</div>
                <div>01:20</div>
              </div>
              <div
                style={{
                  width: '174px',
                  margin: '0 24px 0 0',
                  lineHeight: '20px',
                }}
              >
                <div style={{ fontWeight: 'bold' }}>Speker name</div>
                <div>Section TITLE</div>
              </div>
            </div>
            <div
              style={{
                margin: '0 10px 0 0',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {trackB3 ? (
                <img src="/static/icon_arrow_up_blue.svg" alt="" />
              ) : (
                <img src="/static/icon_arrow_down_blue.svg" alt="" />
              )}
            </div>
          </div>
          <div
            onClick={() => setTrackB4(!trackB4)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid',
              padding: '24px 0',
            }}
          >
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  margin: '0 24px',
                  color: color.electricBlue,
                  lineHeight: '20px',
                }}
              >
                <div>12:30</div>
                <div>01:20</div>
              </div>
              <div
                style={{
                  width: '174px',
                  margin: '0 24px 0 0',
                  lineHeight: '20px',
                }}
              >
                <div style={{ fontWeight: 'bold' }}>Speker name</div>
                <div>Section TITLE</div>
              </div>
            </div>
            <div
              style={{
                margin: '0 10px 0 0',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {trackB4 ? (
                <img src="/static/icon_arrow_up_blue.svg" alt="" />
              ) : (
                <img src="/static/icon_arrow_down_blue.svg" alt="" />
              )}
            </div>
          </div>
        </div>
      </div>
      <img src="https://pbs.twimg.com/media/DuqiMgCUYAEhDDw.jpg" alt="" />
    </div>
  );
};

export default Index;
