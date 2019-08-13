import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100vw;
  padding: 1.1875rem 4.025rem 1.875rem 4.375rem;
`;

const StyledIcons = styled.div`
  display: flex;
`;

const StyledIcon = styled.img`
  width: 1.75rem;
`;

const StyledInfo = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.375rem;
`;

const StyledInfoTitle = styled.h1`
  font-size: 1.25rem;
  color: rgb(72, 233, 147);
  font-family: SFProDisplay-Medium;
`;

const StyledText = styled.h2`
  font-size: 0.875rem;
  margin-bottom: 2.9375rem;
`;

const StyledText2 = styled.h2`
  font-size: 0.875rem;
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
