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
  cursor: pointer;
`;

const Menu = () => {
  return (
    <StyledMenu>
      <StyledImage
        src="https://scontent-lhr3-1.cdninstagram.com/v/t51.2885-15/e35/58410044_592029371303603_8118342681571080194_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=8&oh=5e802bbaa9df232946416270924e1a3e&oe=5DDDB490&ig_cache_key=MjAyOTg0NjM4MTkzOTAzNjU5NA%3D%3D.2"
        alt="img"
      />
      <StyledYearText>2019</StyledYearText>
    </StyledMenu>
  );
};

export default Menu;
