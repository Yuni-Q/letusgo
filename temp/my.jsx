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
        <Link route="tiketList" href="tiketList">
          나의 티켓 확인하기
        </Link>
        <Link route="userProfile" href="userProfile">
          나의 정보 수정
        </Link>
        <div>문의 메일</div>
        <div>-- 란?</div>
        <div>버전 정보</div>
        <div>로그 아웃</div>
      </div>
    </div>
  );
};

export default Index;
