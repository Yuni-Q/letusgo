import React from 'react';

import Menu from '../components/Menu';
// import { useInput } from '../common/useInput';

const Session = () => {
  const menuHeight = 16;
  // const [day, setDay] = useState(0);
  // const [location, setLocation] = useState(0);
  // const [student, setStudent] = useState(0);
  // const [followUp, setFollowUp] = useState(0);
  // const [size, setSize] = useInput('');
  // const [name, setName] = useInput('');
  // const [value, setValue] = useState(0);

  // const onClickDay = () => {
  //   setDay(1);
  // };
  // const onClickLocation = () => {
  //   setLocation(1);
  // };
  // const onClickStudent = num => {
  //   setStudent(num);
  // };
  // const onClickfollowUp = num => {
  //   setFollowUp(num);
  // };
  return (
    <div
      style={{
        width: '960px',
      }}
    >
      <Menu menuHeight={menuHeight} />
      <div style={{ display: 'flex' }}>
        <div
          style={{
            width: '216px',
            height: '119px',
            margin: '67px 25px 0 0',
            fontSize: '32px',
            color: 'rgb(14,74,255)',
            flexShrink: 0,
          }}
        >
          <div style={{ margin: '0 0 92px 0' }}>
            let us: Go!
            <br />
            session
          </div>
          <div>
            Check the session
            <br />
            [2018 Spring]
            <br />
            sessin A
          </div>
        </div>
        <div style={{ margin: '226px 0 0 0' }}>
          <div style={{ margin: '0 0 32px 0' }}>schedule</div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '658px',
              margin: '0 0 28px 0',
            }}
          >
            <div
              style={{
                width: '319px',
                height: '222px',
                backgroundColor: 'red',
              }}
            />
            <div
              style={{
                width: '319px',
                height: '222px',
                backgroundColor: 'red',
              }}
            />
          </div>
          <div style={{ margin: '0 0 24px 0' }}>overview</div>
          <div style={{ margin: '0 0 28px 12px' }}>
            2018.3.10(토) 봄세션에 대한 성원 감사드립니다. WWDC 많은 것이
            달라졌는데 개발자로서 어떻게 효율적으로 대처 할 것인가에 대해
            대화해봅시다.
          </div>
          <div style={{ margin: '0 0 25px 0' }}>speaker</div>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                width: '72px',
                height: '72px',
                margin: '0 7px 0 18px',
                backgroundColor: 'red',
              }}
            />
            <div
              style={{
                width: '72px',
                height: '72px',
                margin: '0 7px',
                backgroundColor: 'red',
              }}
            />
            <div
              style={{
                width: '72px',
                height: '72px',
                margin: '0 7px',
                backgroundColor: 'red',
              }}
            />
            <div
              style={{
                width: '72px',
                height: '72px',
                margin: '0 7px',
                backgroundColor: 'red',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Session;
