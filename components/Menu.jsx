import React from 'react';

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
        backgroundColor: 'gray',
      }}
    >
      <div style={{ width: '960px' }}>
        <div
          style={{
            margin: '18px 0',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          <img src="/static/logo_let us: Go!.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
