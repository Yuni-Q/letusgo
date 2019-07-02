import React from 'react';

import { useInput } from '../common/useInput';
import { Link } from '../routes';
import Menu from '../components/Menu';

const Login = () => {
  const [id, setId] = useInput('');
  const [password, setPassword] = useInput('');

  const menuHeight = 16;

  const onSubmit = e => {
    e.preventDefault();
    console.log(id, password);
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          height: `${menuHeight}`,
        }}
      >
        <Menu />
      </div>
      <div
        style={{
          height: `calc(100vh - ${menuHeight}px)`,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div>Login</div>
        <div>기존회원 로그인</div>
        <form onSubmit={onSubmit}>
          <div>
            <input type="text" placeholder="id" value={id} onChange={setId} />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={setPassword}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              로그인
            </button>
          </div>
          <div>
            <Link route="signin" href="signin">
              회원가입
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
