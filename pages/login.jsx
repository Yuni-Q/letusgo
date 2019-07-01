import React from 'react';
import styled from 'styled-components';
import { color } from '../common/color';

import { useInput } from '../common/useInput';
import { Link } from '../routes';
import Menu from '../components/Menu';
import { StyledButton } from '../common/styledComponents';

const StyledInputDiv = styled.div`
  width: 100vw;
  height: 60px;
  max-width: 960px;
  border: solid 1px #dcdcdc;
  border-radius: 30px;
`;

const StyledInput = styled.input`
  margin: 0 0 0 36px;
  height: 58px;
  max-width: 960px;
  border: none;
  background-color: #ffffff;
`;

const Login = () => {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const onSubmit = e => {
    e.preventDefault();
    console.log(id, password);
  };

  return (
    <div
      style={{
        maxWidth: '960px',
        width: '100vw',
      }}
    >
      <Menu />
      <div
        style={{
          margin: '60px 0 0 0',
        }}
      >
        <div
          style={{ margin: '21px 0 0 0', fontSize: '14px', fontWeight: 600 }}
        >
          Welcome to Let us go
        </div>
        <div
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            margin: '0 0 114px 0',
          }}
        >
          Login
        </div>
        <form onSubmit={onSubmit}>
          <div style={{ margin: '0 0 8px 12px' }}>
            <label htmlFor="email">E-Mail</label>
          </div>
          <StyledInputDiv style={{ margin: '0 0 48px' }}>
            <StyledInput
              type="email"
              id="email"
              placeholder="이메일을 입력하세요."
              value={email}
              onChange={setEmail}
            />
          </StyledInputDiv>
          <div style={{ margin: '0 0 8px 12px' }}>
            <label htmlFor="password">비밀번호</label>
          </div>
          <StyledInputDiv style={{ margin: '0 0 60px' }}>
            <StyledInput
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요."
              value={password}
              onChange={setPassword}
            />
          </StyledInputDiv>
          <div>
            <StyledButton
              style={{ width: '100vw', maxWidth: '960px' }}
              type="submit"
              className="btn btn-primary"
            >
              <div
                style={{
                  // border: `0px solid ${color.black}`,
                  fontSize: '20px',
                  color: 'white',
                  backgroundColor: color.black,
                }}
              >
                로그인하기
              </div>
            </StyledButton>
          </div>
          <div>
            <div
              style={{
                width: '100vw',
                maxWidth: '960px',
                display: 'flex',
                justifyContent: 'center',
                margin: '36px 0 355px 0',
              }}
            >
              <Link route="signin" href="signin">
                회원가입하기
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
