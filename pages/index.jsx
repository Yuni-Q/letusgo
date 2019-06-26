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
          margin: '0 0 60px 0',
        }}
      >
        <div style={{ width: '460px', margin: '0 10px' }}>
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
              Track A
            </div>
          </div>
          <div style={{}}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '18px 8px',
                borderBottom: '1px solid',
                padding: '0 12px 14px 12px',
              }}
            >
              <div style={{ fontWeight: 'bold', color: color.electricBlue }}>
                Application
              </div>
              <div>100명</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '18px 8px',
                borderBottom: '1px solid',
                padding: '0 12px 14px 12px',
              }}
            >
              <div style={{ fontWeight: 'bold', color: color.electricBlue }}>
                Venue
              </div>
              <div>코엑스 아트홀</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '18px 8px',
                borderBottom: '1px solid',
                padding: '0 12px 14px 12px',
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
                margin: '18px 8px',
                borderBottom: '1px solid',
                padding: '0 12px 14px 12px',
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
              borderBottom: `2px solid ${color.electricBlue}`,
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
          <div
            onClick={() => setTrackA1(!trackA1)}
            style={{
              borderBottom: '1px solid',
              padding: '24px 0',
              margin: '0 12px',
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
                  <div style={{ color: color.electricBlue }}>12:30</div>
                  <div style={{ color: color.electricBlue }}>01:20</div>
                </div>
                <div
                  style={{
                    width: '174px',
                    margin: '0 24px 0 0',
                    lineHeight: '22px',
                  }}
                >
                  <div style={{ fontWeight: 'bold', fontSize: '20px' }}>
                    Speker name!!!
                  </div>
                  <div style={{ fontSize: '16px' }}>Section TITLE</div>
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
            {!!trackA1 && (
              <div
                style={{
                  padding: '15px 0 0 16px',
                  borderTop: '1px solid',
                  margin: '24px 0 0 96px',
                }}
              >
                <div
                  style={{
                    padding: '0 0 16px 0',
                  }}
                >
                  <div
                    style={{
                      width: '151px',
                      height: '151px',
                      background: 'gray',
                      padding: '0 0 16px 0',
                    }}
                  />
                </div>
                <div style={{ padding: '0 0 16px 0' }}>설명</div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
              </div>
            )}
          </div>

          <div
            onClick={() => setTrackA2(!trackA2)}
            style={{
              borderBottom: '1px solid',
              padding: '24px 0',
              margin: '0 12px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex' }}>
                <div style={{ margin: '0 24px', lineHeight: '20px' }}>
                  <div style={{ color: color.electricBlue }}>12:30</div>
                  <div style={{ color: color.electricBlue }}>01:20</div>
                </div>
                <div
                  style={{
                    width: '174px',
                    margin: '0 24px 0 0',
                    lineHeight: '22px',
                  }}
                >
                  <div style={{ fontWeight: 'bold', fontSize: '20px' }}>
                    Speker name!!!
                  </div>
                  <div style={{ fontSize: '16px' }}>Section TITLE</div>
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
            {!!trackA2 && (
              <div
                style={{
                  padding: '15px 0 0 16px',
                  borderTop: '1px solid',
                  margin: '24px 0 0 96px',
                }}
              >
                <div
                  style={{
                    padding: '0 0 16px 0',
                  }}
                >
                  <div
                    style={{
                      width: '151px',
                      height: '151px',
                      background: 'gray',
                      padding: '0 0 16px 0',
                    }}
                  />
                </div>
                <div style={{ padding: '0 0 16px 0' }}>설명</div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
              </div>
            )}
          </div>
          <div
            onClick={() => setTrackA3(!trackA3)}
            style={{
              borderBottom: '1px solid',
              padding: '24px 0',
              margin: '0 12px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex' }}>
                <div style={{ margin: '0 24px', lineHeight: '20px' }}>
                  <div style={{ color: color.electricBlue }}>12:30</div>
                  <div style={{ color: color.electricBlue }}>01:20</div>
                </div>
                <div
                  style={{
                    width: '174px',
                    margin: '0 24px 0 0',
                    lineHeight: '22px',
                  }}
                >
                  <div style={{ fontWeight: 'bold', fontSize: '20px' }}>
                    Speker name!!!
                  </div>
                  <div style={{ fontSize: '16px' }}>Section TITLE</div>
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
            {!!trackA3 && (
              <div
                style={{
                  padding: '15px 0 0 16px',
                  borderTop: '1px solid',
                  margin: '24px 0 0 96px',
                }}
              >
                <div
                  style={{
                    padding: '0 0 16px 0',
                  }}
                >
                  <div
                    style={{
                      width: '151px',
                      height: '151px',
                      background: 'gray',
                      padding: '0 0 16px 0',
                    }}
                  />
                </div>
                <div style={{ padding: '0 0 16px 0' }}>설명</div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
              </div>
            )}
          </div>
          <div
            onClick={() => setTrackA4(!trackA4)}
            style={{
              borderBottom: `2px solid ${color.electricBlue}`,
              padding: '24px 12px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex' }}>
                <div style={{ margin: '0 24px', lineHeight: '20px' }}>
                  <div style={{ color: color.electricBlue }}>12:30</div>
                  <div style={{ color: color.electricBlue }}>01:20</div>
                </div>
                <div
                  style={{
                    width: '174px',
                    margin: '0 24px 0 0',
                    lineHeight: '22px',
                  }}
                >
                  <div style={{ fontWeight: 'bold', fontSize: '20px' }}>
                    Speker name!!!
                  </div>
                  <div style={{ fontSize: '16px' }}>Section TITLE</div>
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
            {!!trackA4 && (
              <div
                style={{
                  padding: '15px 0 0 16px',
                  borderTop: '1px solid',
                  margin: '24px 0 0 96px',
                }}
              >
                <div
                  style={{
                    padding: '0 0 16px 0',
                  }}
                >
                  <div
                    style={{
                      width: '151px',
                      height: '151px',
                      background: 'gray',
                      padding: '0 0 16px 0',
                    }}
                  />
                </div>
                <div style={{ padding: '0 0 16px 0' }}>설명</div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div style={{ width: '460px', margin: '0 10px' }}>
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
              Track B
            </div>
          </div>
          <div style={{}}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '18px 8px',
                borderBottom: '1px solid',
                padding: '0 12px 14px 12px',
              }}
            >
              <div style={{ fontWeight: 'bold', color: color.electricBlue }}>
                Application
              </div>
              <div>100명</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '18px 8px',
                borderBottom: '1px solid',
                padding: '0 12px 14px 12px',
              }}
            >
              <div style={{ fontWeight: 'bold', color: color.electricBlue }}>
                Venue
              </div>
              <div>코엑스 아트홀</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '18px 8px',
                borderBottom: '1px solid',
                padding: '0 12px 14px 12px',
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
                margin: '18px 8px',
                borderBottom: '1px solid',
                padding: '0 12px 14px 12px',
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
              borderBottom: `2px solid ${color.electricBlue}`,
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
          <div
            onClick={() => setTrackB1(!trackB1)}
            style={{
              borderBottom: '1px solid',
              padding: '24px 0',
              margin: '0 12px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    margin: '0 24px',
                    color: color.electricBlue,
                    lineHeight: '22px',
                  }}
                >
                  <div style={{ color: color.electricBlue }}>12:30</div>
                  <div style={{ color: color.electricBlue }}>01:20</div>
                </div>
                <div
                  style={{
                    width: '174px',
                    margin: '0 24px 0 0',
                    lineHeight: '22px',
                  }}
                >
                  <div style={{ fontWeight: 'bold', fontSize: '20px' }}>
                    Speker name!!!
                  </div>
                  <div style={{ fontSize: '16px' }}>Section TITLE</div>
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
                  <img src="/static/icon_arrow_up_black.svg" alt="" />
                ) : (
                  <img src="/static/icon_arrow_down_black.svg" alt="" />
                )}
              </div>
            </div>
            {!!trackB1 && (
              <div
                style={{
                  padding: '15px 0 0 16px',
                  borderTop: '1px solid',
                  margin: '24px 0 0 96px',
                }}
              >
                <div
                  style={{
                    padding: '0 0 16px 0',
                  }}
                >
                  <div
                    style={{
                      width: '151px',
                      height: '151px',
                      background: 'gray',
                      padding: '0 0 16px 0',
                    }}
                  />
                </div>
                <div style={{ padding: '0 0 16px 0' }}>설명</div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
              </div>
            )}
          </div>
          <div
            onClick={() => setTrackB2(!trackB2)}
            style={{
              borderBottom: '1px solid',
              padding: '24px 0',
              margin: '0 12px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    margin: '0 24px',
                    color: color.electricBlue,
                    lineHeight: '22px',
                  }}
                >
                  <div style={{ color: color.electricBlue }}>12:30</div>
                  <div style={{ color: color.electricBlue }}>01:20</div>
                </div>
                <div
                  style={{
                    width: '174px',
                    margin: '0 24px 0 0',
                    lineHeight: '22px',
                  }}
                >
                  <div style={{ fontWeight: 'bold', fontSize: '20px' }}>
                    Speker name!!!
                  </div>
                  <div style={{ fontSize: '16px' }}>Section TITLE</div>
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
                  <img src="/static/icon_arrow_up_black.svg" alt="" />
                ) : (
                  <img src="/static/icon_arrow_down_black.svg" alt="" />
                )}
              </div>
            </div>
            {!!trackB2 && (
              <div
                style={{
                  padding: '15px 0 0 16px',
                  borderTop: '1px solid',
                  margin: '24px 0 0 96px',
                }}
              >
                <div
                  style={{
                    padding: '0 0 16px 0',
                  }}
                >
                  <div
                    style={{
                      width: '151px',
                      height: '151px',
                      background: 'gray',
                      padding: '0 0 16px 0',
                    }}
                  />
                </div>
                <div style={{ padding: '0 0 16px 0' }}>설명</div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
              </div>
            )}
          </div>
          <div
            onClick={() => setTrackB3(!trackB3)}
            style={{
              borderBottom: '1px solid',
              padding: '24px 0',
              margin: '0 12px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    margin: '0 24px',
                    color: color.electricBlue,
                    lineHeight: '22px',
                  }}
                >
                  <div style={{ color: color.electricBlue }}>12:30</div>
                  <div style={{ color: color.electricBlue }}>01:20</div>
                </div>
                <div
                  style={{
                    width: '174px',
                    margin: '0 24px 0 0',
                    lineHeight: '22px',
                  }}
                >
                  <div style={{ fontWeight: 'bold', fontSize: '20px' }}>
                    Speker name!!!
                  </div>
                  <div style={{ fontSize: '16px' }}>Section TITLE</div>
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
                  <img src="/static/icon_arrow_up_black.svg" alt="" />
                ) : (
                  <img src="/static/icon_arrow_down_black.svg" alt="" />
                )}
              </div>
            </div>
            {!!trackB3 && (
              <div
                style={{
                  padding: '15px 0 0 16px',
                  borderTop: '1px solid',
                  margin: '24px 0 0 96px',
                }}
              >
                <div
                  style={{
                    padding: '0 0 16px 0',
                  }}
                >
                  <div
                    style={{
                      width: '151px',
                      height: '151px',
                      background: 'gray',
                      padding: '0 0 16px 0',
                    }}
                  />
                </div>
                <div style={{ padding: '0 0 16px 0' }}>설명</div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
              </div>
            )}
          </div>
          <div
            onClick={() => setTrackB4(!trackB4)}
            style={{
              borderBottom: `2px solid ${color.electricBlue}`,
              padding: '24px 12px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    margin: '0 24px',
                    color: color.electricBlue,
                    lineHeight: '22px',
                  }}
                >
                  <div style={{ color: color.electricBlue }}>12:30</div>
                  <div style={{ color: color.electricBlue }}>01:20</div>
                </div>
                <div
                  style={{
                    width: '174px',
                    margin: '0 24px 0 0',
                    lineHeight: '22px',
                  }}
                >
                  <div style={{ fontWeight: 'bold', fontSize: '20px' }}>
                    Speker name!!!
                  </div>
                  <div style={{ fontSize: '16px' }}>Section TITLE</div>
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
                  <img src="/static/icon_arrow_up_black.svg" alt="" />
                ) : (
                  <img src="/static/icon_arrow_down_black.svg" alt="" />
                )}
              </div>
            </div>
            {!!trackB4 && (
              <div
                style={{
                  padding: '15px 0 0 16px',
                  borderTop: '1px solid',
                  margin: '24px 0 0 96px',
                }}
              >
                <div
                  style={{
                    padding: '0 0 16px 0',
                  }}
                >
                  <div
                    style={{
                      width: '151px',
                      height: '151px',
                      background: 'gray',
                      padding: '0 0 16px 0',
                    }}
                  />
                </div>
                <div style={{ padding: '0 0 16px 0' }}>설명</div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '68px', padding: '0 0 3px 0' }}>
                    email
                  </div>
                  <div>abc@naver.com</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          width: '960px',
          height: '70px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: color.black,
          borderRadius: '20px',
        }}
      >
        <input
          style={{
            border: '0px solid white',
            fontSize: '20px',
            color: 'white',
            backgroundColor: color.black,
          }}
          type="button"
          value="신청하기"
        />
      </div>
      <img src="https://pbs.twimg.com/media/DuqiMgCUYAEhDDw.jpg" alt="" />
    </div>
  );
};

export default Index;
