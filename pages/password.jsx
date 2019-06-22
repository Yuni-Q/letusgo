import React from 'react';

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
        <div>my</div>
        <div>기존 비밀번호</div>
        <div>변경할 비밀번호</div>
        <div>비밀번호 학인</div>
        <div>ok</div>
      </div>
    </div>
  );
};

export default Index;
