import React from 'react';
import styled from 'styled-components';

const StyledSession = styled.div`
  width: 17.875rem;
  margin: 0 0.375rem;
`;

const StyledImg = styled.img`
  width: 17.875rem;
  margin-bottom: 1.6875rem;
`;

const StyledTitle = styled.div`
  font-size: 26px;
  margin-left: 0.625rem;
  margin-bottom: 1.6875rem;
  height: 4.5rem;
`;

const StyledDescription = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const StyledSpeaker = styled.div`
  font-size: 20px;
  margin-left: 0.625rem;
  margin-right: 1.25rem;
`;

const StyledBelong = styled.div`
  color: rgb(109, 114, 120);
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
        <StyledSpeaker>이다민</StyledSpeaker>
        <StyledBelong>소속</StyledBelong>
      </StyledDescription>
    </StyledSession>
  );
};

export default Session;
