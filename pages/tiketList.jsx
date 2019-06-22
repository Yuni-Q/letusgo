import React from 'react';

import Menu from '../components/Menu';
import { Link } from '../routes';

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
        <div>list</div>
        <Link route="tiket" href="tiket">
          111
        </Link>
        <Link route="tiket" href="tiket">
          222
        </Link>
      </div>
    </div>
  );
};

export default Index;
