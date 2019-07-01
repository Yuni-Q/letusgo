import React from 'react';

import Menu from '../components/Menu';
import { color } from '../common/color';
import { StyledButton } from '../common/styledComponents';

const Session = () => {
  const menuHeight = 16;
  return (
    <div
      style={{
        maxWidth: '960px',
        width: '100vw',
        margin: '92px 0',
        height: '100vh',
      }}
    >
      <Menu menuHeight={menuHeight} />
      <div style={{ display: 'flex' }}>
        <StyledButton style={{ justifyContent: 'start', borderRadius: '35px' }}>
          <div
            style={{
              borderRadius: '35px',
              backgroundColor: color.black,
              display: 'flex',
            }}
          >
            <div
              style={{
                color: 'white',
                fontSize: '20px',
                margin: '0 51px 0 38px',
              }}
            >
              :(
            </div>
            <div style={{ color: 'white', fontSize: '20px' }}>
              준비중입니다.
            </div>
          </div>
        </StyledButton>
      </div>
    </div>
  );
};

export default Session;
