import React from 'react';
import styled from 'styled-components';

import { color } from '../common/color';

const StyledFooter = styled.div`
  display: flex;
  justifycontent: space-between;
  height: 81px;
  alignitems: center;
  maxwidth: 960px;
  width: 100vw;
  @media (max-width: 950px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    justifycontent: center;
    align-items: center;
  }
  * {
    margin: 0 0 20px 0;
  }
  :first-child {
    margin: 0 0 25px 0;
  }
`;

const StyledFooterInfo = styled.div`
  display: flex;
  justifycontent: center;
  margin: 0 88px 45px 0;
  @media (max-width: 950px) {
    display: block;
    margin: 0 0 45px 0;
  }
`;

const StyledFooterLocation = styled.div`
  display: flex;
  margin: 0 88px 0 0;
  @media (max-width: 950px) {
    display: block;
    margin: 0 0 20px 0;
  }
`;
const StyledFooterPhone = styled.div`
  display: flex;
  @media (max-width: 950px) {
    display: block;
  }
`;

const Footer = () => {
  return (
    <div>
      <div
        style={{
          bottom: 0,
          left: 0,
          width: '100vw',
          backgroundColor: color.warmwhite,
          display: 'flex',
          justifyContent: 'center',
          margin: '0 0 120px 0',
        }}
      >
        <div style={{ maxWidth: '960px', width: '100vw' }}>
          <div
            style={{
              display: 'flex',
              fontSize: '20px',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontSize: '29px',
                margin: '40px 0 32px 0',
                fontWeight: 'bold',
              }}
            >
              Location
            </div>
            <div
              style={{
                fontSize: '24px',
                margin: '0 0 24px 0',
                fontWeight: 'bold',
              }}
            >
              코엑스 그랜드볼룸 (Coex Grand Ballroom)
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '0 0 51px 0',
              }}
            >
              <div>
                그랜드볼룸은 봉은사 맞은편 코엑스 1층 북문 쪽에 위치해 있습니다.
              </div>
              <div>
                지하철 이용 시 9호선 봉은사역 7번 출구를 이용하시거나 삼성역 6번
                출구를 이용하시면 됩니다
              </div>
            </div>
            <StyledFooterInfo>
              <StyledFooterLocation>
                <div
                  style={{
                    margin: '0 20px 5px 0',
                    fontWeight: 'bold',
                    color: color.electricBlue,
                  }}
                >
                  장소
                </div>
                <div style={{ fontWeight: 'bold' }}>
                  <div>서울 강남구 영동대로 513 코엑스,</div>
                  <div style={{ maxWidth: '321px' }}>
                    (지번) 삼성동 159 코엑스
                  </div>
                </div>
              </StyledFooterLocation>
              <div>
                <StyledFooterPhone>
                  <div
                    style={{
                      margin: '0 20px 5px 0',
                      fontWeight: 'bold',
                      color: color.electricBlue,
                    }}
                  >
                    연락처
                  </div>
                  <div style={{ fontWeight: 'bold' }}>
                    <div>02-1111-1111</div>
                  </div>
                </StyledFooterPhone>
              </div>
            </StyledFooterInfo>
          </div>
        </div>
      </div>
      <div
        style={{
          bottom: 0,
          left: 0,
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <StyledFooter>
          <img src="/static/logo_let us: Go!.svg" alt="" />
          <div>© iOS Developers Korea</div>
          <div style={{ display: 'flex' }}>
            <img
              style={{
                width: '40px',
                height: '40px',
              }}
              src="/static/icon_message.svg"
              alt=""
            />
            <img
              style={{
                width: '40px',
                height: '40px',
              }}
              src="/static/icon_telephone.svg"
              alt=""
            />
          </div>
        </StyledFooter>
      </div>
    </div>
  );
};

export default Footer;
