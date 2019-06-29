import React from 'react';
import styled from 'styled-components';

import { color } from '../common/color';

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  height: 81px;
  align-items: center;
  max-width: 960px;
  width: 100vw;
  @media (max-width: 950px) {
    height: auto;
    margin: 0;
    display: flex;
    flex-direction: column;
    justifycontent: center;
    align-items: center;
    img {
      margin 20px;
    }

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
  const onClickMail = () => {
    window.location.href =
      'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=keywindow@naver.com';
  };
  const onClickPhone = () => {
    window.location.href = 'https://open.kakao.com/o/gyLape';
  };
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
                padding: '0 10px',
              }}
            >
              <img
                onClick={() => {
                  window.location.href =
                    'https://map.naver.com/?mapmode=0&pinId=12120302&pinType=site&lng=ebf219704585925ad36e69fc6be47c93&lat=8d244babc760a0e4c1e0d5fe8b0fb7ca&dlevel=11&enc=b64';
                }}
                style={{ maxWidth: '960px', width: '80vw' }}
                src="/static/map.png"
                alt=""
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '0 0 51px 0',
              }}
            >
              <div />
              <div />
            </div>
            <StyledFooterInfo>
              <StyledFooterLocation>
                <div
                  style={{
                    margin: '0 20px 5px 0',
                    fontWeight: 'bold',
                    color: color.grapefruit,
                  }}
                >
                  장소
                </div>
                <div style={{ fontWeight: 'bold' }}>
                  <div>서울특별시 서대문구 연희로2길 62 한빛미디어</div>
                  <div style={{ maxWidth: '321px' }} />
                </div>
              </StyledFooterLocation>
              <div>
                <StyledFooterPhone>
                  <div
                    style={{
                      margin: '0 20px 5px 0',
                      fontWeight: 'bold',
                      color: color.grapefruit,
                    }}
                  >
                    연락처
                  </div>
                  <div style={{ fontWeight: 'bold' }}>
                    <div>keyWindow@naver.com</div>
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
          border: `1px solid ${color.black}`,
        }}
      >
        <StyledFooter>
          <img src="/static/logo2.svg" alt="" />
          <div>© iOS Developers Korea</div>
          <div style={{ display: 'flex' }}>
            <img
              onClick={onClickMail}
              style={{
                width: '40px',
                height: '40px',
              }}
              src="/static/icon_message.svg"
              alt=""
            />
            <img
              onClick={onClickPhone}
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
