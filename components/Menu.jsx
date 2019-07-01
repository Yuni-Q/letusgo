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
        maxHeight: '62px',
      }}
    >
      <div style={{ maxWidth: '960px', width: '100vw' }}>
        <div
          style={{
            // margin: '18px 0',
            fontSize: '20px',
            fontWeight: 'bold',
            backgroundColor: color.warmwhite,
          }}
        >
          <img
            style={{ maxWidth: '330px', width: '80vw', maxHeight: '62px' }}
            src="/static/let-us-go.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
