import React from 'react';
import styled from 'styled-components';

import Menu from '../components/Menu';

const StyledIndex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSeasonTextWrapper = styled.div`
  display: flex;
  height: 3.75rem;
  padding-left: 5.25rem;
  align-items: center;
  width: 100vw;
  border-bottom: solid 1px rgb(249, 249, 249);
`;
const StyledSeasonText = styled.div`
  color: rgb(72, 233, 147);
  margin: 1.25rem 1.875rem 1.25rem 0;
`;

const StyledSections = styled.div`
  width: 55.25rem;
  height: 100vh;
  background-color: red;
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
      <StyledSections />
    </StyledIndex>
  );
};

export default index;
