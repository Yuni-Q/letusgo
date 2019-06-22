import React from 'react';

import Menu from '../components/Menu';
import { Link } from '../routes';

const SessionA = () => {
  const menuHeight = 16;

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
        <div>내용들임</div>
        <Link route="/joinA" href="/joinA">
          신청 가즈아
        </Link>
      </div>
    </div>
  );
};

export default SessionA;
