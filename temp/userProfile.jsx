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
        <div>my</div>
        <Link route="password" href="password">
          비밀번호 변경
        </Link>
        <div>닉네임</div>
        <div>전화번호</div>
        <div>-- 란?</div>
        <div>버전 정보</div>
        <div>로그 아웃</div>
      </div>
    </div>
  );
};

export default Index;
