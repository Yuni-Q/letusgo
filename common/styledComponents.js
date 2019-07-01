import styled from 'styled-components';

import { color } from './color';

export const StyledButton = styled.div`
  width: 100vw;
  max-width: 960px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.black};
  border-radius: 20px;
  margin: 0 0 84px;
  @media (max-width: 950px) {
    margin: 0 16px 84px;
    width: calc(100vw - 32px);
  }
`;

export default StyledButton;
