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

export const StyledInputDiv = styled.div`
  width: 100vw;
  height: 60px;
  max-width: 960px;
  border: solid 1px #dcdcdc;
  border-radius: 30px;
`;

export const StyledInput = styled.input`
  width: calc(100vw - 36px - 36px);
  margin: 0 36px;
  height: 58px;
  max-width: calc(960px - 36px - 36px);
  border: none;
  background-color: #ffffff;
`;

export default StyledButton;
