import React from 'react';
import styled from 'styled-components';

import Menu from '../components/Menu';
import Session from '../components/Session';
import Footer from '../components/Footer';

const StyledSeasonTextWrapper = styled.section`
  display: flex;
  height: 3.75rem;
  padding-left: 4.3125rem;
  align-items: center;
  width: 100vw;
  border-bottom: solid 0.0625rem rgb(193, 194, 197);
`;
const StyledSeasonText = styled.h1`
  color: rgb(72, 233, 147);
  margin: 1.25rem 0.9375rem;
  cursor: pointer;
`;

const StyledSessionsWrapper = styled.section`
  padding: 1.875rem 0 6.0625rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: rgb(249, 249, 249);
`;

const StyledSessions = styled.section`
  width: 55.875rem;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
`;

const index = () => {
  return (
    <>
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
    </>
  );
};

export default index;
