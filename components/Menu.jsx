import React from 'react';
import styled from 'styled-components';

// import { color } from '../common/color';
// import { Link } from '../routes';

const StyledMenu = styled.div`
  display: flex;
  height: 3.75rem;
  align-items: center;
  width: 100vw;
`;

const StyledImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0.625rem 0.75rem;
`;

const StyledYearText = styled.div`
  font-family: SFProDisplay-Light;
  font-size: 1.25rem;
  margin-left: 1.4375rem;
`;

const Menu = () => {
  return (
    <StyledMenu>
      <StyledImage
        src="https://pbs.twimg.com/media/DuqiMgCUYAEhDDw.jpg"
        alt="img"
      />
      <StyledYearText>2019</StyledYearText>
    </StyledMenu>
  );
};

export default Menu;
