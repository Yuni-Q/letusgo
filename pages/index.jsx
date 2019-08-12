import React from 'react';
import styled from 'styled-components';

import Menu from '../components/Menu';
import Session from '../components/Session';
import Footer from '../components/Footer';

const StyledIndex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSeasonTextWrapper = styled.div`
  display: flex;
  height: 3.75rem;
  padding-left: 4.3125rem;
  align-items: center;
  width: 100vw;
  border-bottom: solid 1px rgb(249, 249, 249);
`;
const StyledSeasonText = styled.div`
  color: rgb(72, 233, 147);
  margin: 1.25rem 0.9375rem;
  cursor: pointer;
`;

const StyledSessionsWrapper = styled.div`
  margin: 1.875rem 0 6.0625rem;
`;

const StyledSessions = styled.div`
  width: 55.875rem;
  background-color: red;
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(249, 249, 249);
`;

const index = () => {
  return (
    <StyledIndex>
      <Menu />
      <StyledSeasonTextWrapper>
        <StyledSeasonText>Spring</StyledSeasonText>
        <StyledSeasonText>Summer</StyledSeasonText>
        <StyledSeasonText>Fall</StyledSeasonText>
      </StyledSeasonTextWrapper>
      <StyledSessionsWrapper>
        <StyledSessions>
          <Session />
          <Session />
          <Session />
          <Session />
          <Session />
          <Session />
        </StyledSessions>
      </StyledSessionsWrapper>
      <Footer />
    </StyledIndex>
  );
};

export default index;
