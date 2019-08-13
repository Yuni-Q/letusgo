import React from 'react';
import styled from 'styled-components';

const StyledSession = styled.section`
  margin: 0 0.375rem;
  width: 17.875rem;
`;

const StyledImg = styled.img`
  margin-bottom: 1.6875rem;
  width: 17.875rem;
`;

const StyledTitle = styled.h1`
  font-size: 1.625rem;
  height: 4.5rem;
  margin: 0 0 1.6875rem 0.625rem;
`;

const StyledDescription = styled.section`
  align-items: center;
  display: flex;
  margin-bottom: 1.5rem;
`;

const StyledSpeakerHidden = styled.h3`
  visibility: hidden;
  font-size: 1.25rem;
  margin-left: 0.625rem;
  margin-right: 1.25rem;
`;

const StyledSpeakerVisible = styled(StyledSpeakerHidden)`
  position: absolute;
  bottom: 0;
  visibility: visible;
`;

const StyledBelong = styled.h3`
  color: rgb(109, 114, 120);
  font-size: 0.875rem;
`;

const StyledSpeakerWrapper = styled.section`
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    margin-left: 0.625rem;
    color: rgb(72, 233, 147);
    background-color: rgb(72, 233, 147);
    height: 0.3125rem;
    width: calc(100% - 0.625rem - 1.25rem);
  }
`;

const Session = () => {
  return (
    <StyledSession>
      <StyledImg
        src="https://scontent-lhr3-1.cdninstagram.com/v/t51.2885-15/e35/58410044_592029371303603_8118342681571080194_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=8&oh=5e802bbaa9df232946416270924e1a3e&oe=5DDDB490&ig_cache_key=MjAyOTg0NjM4MTkzOTAzNjU5NA%3D%3D.2"
        alt="img"
      />
      <StyledTitle>Session.Title</StyledTitle>
      <StyledDescription>
        <StyledSpeakerWrapper>
          <StyledSpeakerHidden>이다민</StyledSpeakerHidden>
          <StyledSpeakerVisible>이다민</StyledSpeakerVisible>
        </StyledSpeakerWrapper>
        <StyledBelong>소속</StyledBelong>
      </StyledDescription>
    </StyledSession>
  );
};

export default Session;
