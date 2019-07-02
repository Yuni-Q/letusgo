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
          display: 'flex',
          justifyContent: 'center',
          border: `1px solid ${color.black}`,
        }}
      >
        <StyledFooter>
          <img
            src="https://letusgo-front.s3.ap-northeast-2.amazonaws.com/logo-let-us-go.svg"
            alt=""
          />
          <div>© iOS Developers Korea</div>
          <div style={{ display: 'flex' }}>
            <img
              onClick={onClickMail}
              style={{
                width: '40px',
                height: '40px',
              }}
              src="https://letusgo-front.s3.ap-northeast-2.amazonaws.com/icon_message.svg"
              alt=""
            />
            <img
              onClick={onClickPhone}
              style={{
                width: '40px',
                height: '40px',
              }}
              src="https://letusgo-front.s3.ap-northeast-2.amazonaws.com/icon_telephone.svg"
              alt=""
            />
          </div>
        </StyledFooter>
      </div>
    </div>
  );
};

export default Footer;
