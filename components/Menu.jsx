import React from 'react';
import { color } from '../common/color';

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
      <div style={{ maxWidth: '960px', width: '100vw' }}>
        <div
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            backgroundColor: color.warmwhite,
          }}
        >
          <img
            style={{ maxWidth: '94px', width: '80vw' }}
            src="/static/let-us-go.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
