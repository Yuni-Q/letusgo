import React from 'react';

import { Link } from '../routes';
import Menu from '../components/Menu';

const Index = () => {
  const menuHeight = 16;

  return (
    <div
      style={{
        width: '960px',
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'space-around',
        // alignItems: 'center',
        // flexDirection: 'column',
      }}
    >
      <Menu menuHeight={menuHeight} />
      <div>
        let us: Go!
        <br />
        [2018 Spring]
        <br />
        session A
      </div>
      <div
        style={{
          height: `calc(100vh - ${menuHeight}px)`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div>sesstion</div>
        <div>check the session</div>
        <div>2019년에 하는 겁니다</div>
        <div>
          <Link route="sessionA" href="sessionA">
            a
          </Link>
          <div>내용</div>
        </div>
        <div>
          <Link route="sessionB" href="sessionB">
            b
          </Link>
          <div>내용</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
