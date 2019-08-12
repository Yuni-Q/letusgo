import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  width: 100vw;
  padding-left: 4.375rem;
  padding-right: 4.025rem;
`;

const StyledIcons = styled.div`
  display: flex;
`;

const StyledIcon = styled.img`
  width: 1.75rem;
`;

const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.375rem;
`;

const StyledInfoTitle = styled.div`
  font-size: 20px;
  color: rgb(72, 233, 147);
  font-family: SFProDisplay-Medium;
`;

const StyledText = styled.div`
  font-size: 14px;
  margin-bottom: 2.9375rem;
`;

const StyledText2 = styled.div`
  font-size: 14px;
  margin-bottom: 1.875rem;
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
    <StyledFooter>
      <StyledInfo>
        <StyledInfoTitle>© Let Us: Go!</StyledInfoTitle>
        <StyledIcons>
          <StyledIcon
            onClick={onClickMail}
            src="https://letusgo-front.s3.ap-northeast-2.amazonaws.com/icon_message.svg"
            alt=""
          />
          <StyledIcon
            onClick={onClickPhone}
            src="https://letusgo-front.s3.ap-northeast-2.amazonaws.com/icon_telephone.svg"
            alt=""
          />
        </StyledIcons>
      </StyledInfo>
      <StyledText>iOS Developers Korea</StyledText>
      <StyledText2>© iOS Developers Korea</StyledText2>
    </StyledFooter>
  );
};

export default Footer;
