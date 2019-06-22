import React, { useState } from 'react';

import Menu from '../components/Menu';

const SessionA = () => {
  const menuHeight = 16;
  const [button, setButton] = useState('');

  const onClick = () => {
    if (true) {
      setButton(1);
      console.log(111);
    }
  };

  const onClickClose = () => {
    setButton('');
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'space-around',
        // alignItems: 'center',
        // flexDirection: 'column',
      }}
    >
      {button && (
        <div
          style={{
            backgroundColor: 'red',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
          }}
        >
          <div>잘 되는거 같다</div>
          <button type="button" onClick={onClickClose}>
            끄자
          </button>
        </div>
      )}
      <Menu menuHeight={menuHeight} />
      <div
        style={{
          height: `calc(100vh - ${menuHeight}px)`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div>신청해봅시다</div>
        <div>
          <button type="button" onClick={onClick}>
            신청
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionA;
