import React from 'react';

import { color } from '../common/color';
import { useInput } from '../common/useInput';
import Menu from '../components/Menu';
import {
  StyledButton,
  StyledInputDiv,
  StyledInput,
} from '../common/styledComponents';

const Signin = () => {
  const [email, setEmail] = useInput('');
  const [confirmEmail, setConfirmEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [confirmPassword, setconfirmPassword] = useInput('');
  const [phoneNumber, setPhoneNumber] = useInput('');
  const [nickName, setNickName] = useInput('');

  const onSubmit = e => {
    e.preventDefault();
    console.log(email, password);
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
          Sign up
        </div>
        <form onSubmit={onSubmit}>
          <div style={{ margin: '0 0 8px 12px' }}>
            <label htmlFor="email">메일</label>
          </div>
          <StyledInputDiv style={{ margin: '0 0 28px' }}>
            <StyledInput
              type="email"
              id="email"
              placeholder="이메일을 입력하세요."
              value={email}
              onChange={setEmail}
            />
          </StyledInputDiv>
          <div style={{ margin: '0 0 8px 12px' }}>
            <label htmlFor="confirmEmail">메일 인증번호</label>
          </div>
          <StyledInputDiv style={{ margin: '0 0 28px' }}>
            <StyledInput
              type="text"
              id="confirmEmail"
              placeholder="이메일을 입력하세요."
              value={confirmEmail}
              onChange={setConfirmEmail}
            />
          </StyledInputDiv>
          <div style={{ margin: '0 0 8px 12px' }}>
            <label htmlFor="password">비밀번호</label>
          </div>
          <StyledInputDiv style={{ margin: '0 0 28px' }}>
            <StyledInput
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요."
              value={password}
              onChange={setPassword}
            />
          </StyledInputDiv>
          <div style={{ margin: '0 0 8px 12px' }}>
            <label htmlFor="confirmPassword">비밀번호</label>
          </div>
          <StyledInputDiv style={{ margin: '0 0 28px' }}>
            <StyledInput
              type="text"
              id="confirmPassword"
              placeholder="이메일을 입력하세요."
              value={confirmPassword}
              onChange={setconfirmPassword}
            />
          </StyledInputDiv>
          <div style={{ margin: '0 0 8px 12px' }}>
            <label htmlFor="phoneNumber">전화번호</label>
          </div>
          <StyledInputDiv style={{ margin: '0 0 28px' }}>
            <StyledInput
              type="number"
              id="phoneNumber"
              placeholder="이메일을 입력하세요."
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
          </StyledInputDiv>
          <div style={{ margin: '0 0 8px 12px' }}>
            <label htmlFor="nickName">닉네임</label>
          </div>
          <StyledInputDiv style={{ margin: '0 0 28px' }}>
            <StyledInput
              type="text"
              id="nickName"
              placeholder="이메일을 입력하세요."
              value={nickName}
              onChange={setNickName}
            />
          </StyledInputDiv>
          <div>
            <StyledButton type="submit" className="btn btn-primary">
              <div
                style={{
                  // border: `0px solid ${color.black}`,
                  fontSize: '20px',
                  color: 'white',
                  backgroundColor: color.black,
                }}
              >
                가입완료
              </div>
            </StyledButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
