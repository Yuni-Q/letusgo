import React from 'react';

import { useInput } from '../common/useInput';
import { Link } from '../routes';

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
        <div>
          <Link route="/" href="/">
            now
          </Link>
        </div>
        <div>
          <Link route="/session" href="/session">
            session
          </Link>
        </div>
        <div>
          <Link route="/my" href="/my">
            my
          </Link>
        </div>
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
        <div>Signin</div>
        <div>가입</div>
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
              회원가입
            </button>
          </div>
          <div />
        </form>
      </div>
    </div>
  );
};

export default Login;
