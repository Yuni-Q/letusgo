import React from 'react';
import styled from 'styled-components';

import { color } from '../common/color';
import { Link } from '../routes';

const StyledLogo = styled.img`
  max-width: 94px;
  width: 80vw;
  @media (max-width: 950px) {
    margin: 0 0 0 29px;
  }
`;

const Menu = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100vw',
        backgroundColor: color.warmwhite,
        height: '60px',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '960px',
          width: '100vw',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          <StyledLogo src="/static/let-us-go.svg" alt="" />
        </div>
        <div style={{ display: 'flex' }}>
          <Link route="/login" href="/login">
            <div
              style={{
                margin: '0 62px 0 0',
                fontWeight: 'bold',
                fontSize: '15px',
              }}
            >
              login
            </div>
          </Link>
          <Link route="/" href="/">
            <div
              style={{
                margin: '0 62px 0 0',
                color: color.grapefruit,
                fontWeight: 'bold',
                fontSize: '15px',
              }}
            >
              Now
            </div>
          </Link>
          <Link route="/session" href="/session">
            <div
              style={{
                margin: '0 62px',
                color: color.grapefruit,
                fontWeight: 'bold',
                fontSize: '15px',
              }}
            >
              Session
            </div>
          </Link>
          <Link route="/my" href="/my">
            <div
              style={{
                margin: '0 62px',
                color: color.grapefruit,
                fontWeight: 'bold',
                fontSize: '15px',
              }}
            >
              My
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
