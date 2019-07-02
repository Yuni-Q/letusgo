import React from 'react';

import { Link } from '../routes';
import Menu from '../components/Menu';

const Index = () => {
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
        <div>내용들임22</div>
        <Link route="/joinB" href="/joinB">
          신청 가즈아222
        </Link>
      </div>
    </div>
  );
};

export default Index;