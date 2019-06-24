import React, { useEffect, useState } from 'react';

// import Menu from '../components/Menu';
import { useInput } from '../common/useInput';

const SessionA = () => {
  // const menuHeight = 16;
  const [button, setButton] = useState('');
  const [day, setDay] = useState(0);
  const [location, setLocation] = useState(0);
  const [student, setStudent] = useState(0);
  const [followUp, setFollowUp] = useState(0);
  const [size, setSize] = useInput('');
  const [name, setName] = useInput('');
  const [value, setValue] = useState(0);

  const onSubmit = e => {
    e.preventDefault();
    if (
      day > 0 &&
      location > 0 &&
      student > 0 &&
      followUp > 0 &&
      size.length > 0 &&
      name.length > 0
    ) {
      if (size !== 's' && size !== 'm' && size !== 'l') {
        alert('사이즈가 올바르지 않습니다');
      } else {
        setButton(1);
      }
    }
  };

  const onClickDay = () => {
    setDay(1);
  };
  const onClickLocation = () => {
    setLocation(1);
  };
  const onClickStudent = num => {
    setStudent(num);
  };
  const onClickfollowUp = num => {
    setFollowUp(num);
  };

  const onClickClose = () => {
    setButton('');
  };

  useEffect(() => {
    let val = 0;
    if (student > 0) {
      val = student === 1 ? val + 10000 : val + 20000;
    }
    if (followUp > 0) {
      val = followUp === 1 ? val + 0 : val + 20000;
    }
    setValue(val);
  }, [student, followUp]);

  return (
    <div
      style={{
        width: '960px',
      }}
    >
      {button && (
        <div
          style={{
            backgroundColor: 'blue',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: '960px', display: 'flex' }}>
            <div
              style={{
                width: '216px',
                height: '119px',
                margin: '67px 24px 0 0',
                fontSize: '32px',
                color: 'white',
                flexShrink: 0,
              }}
            >
              <div style={{ margin: '0 0 50px 0', fontSize: '32px' }}>
                let us: Go!
                <br />
                [2018 Spring]
                <br />
                session A
              </div>
              <div style={{ margin: '0 0 47px 0', fontSize: '24px' }}>
                입력 정보 확인
                <br />
                session A
              </div>
              <div style={{ margin: '0 0 10px 0', fontSize: '20px' }}>
                applicartion
              </div>
              <div style={{ margin: '0 0 27px 0', fontSize: '24px' }}>
                23/100
              </div>
              <div style={{ margin: '0 0 12px 0', fontSize: '20px' }}>
                venue
              </div>
              <div style={{ margin: '0 0 28px 0', fontSize: '16px' }}>
                코엑스 아트 홀
              </div>
              <div style={{ margin: '0 0 12px 0', fontSize: '20px' }}>
                Entry fee
              </div>
              <div style={{ margin: '0 0 7px 0', fontSize: '25px' }}>
                20,000원
              </div>
              <div style={{ fontSize: '16px' }}>(장소 대여 및 간단한 다과)</div>
            </div>
            <div>
              <div
                style={{
                  width: '702px',
                  height: '237px',
                  margin: '226px 0 28px 0',
                  backgroundColor: 'white',
                  fontSize: '16px',
                }}
              >
                <div
                  style={{
                    margin: '0 0 6px 22px',
                    fontSize: '18px',
                    paddingTop: '20px',
                  }}
                >
                  나의 티켓 확인하기
                </div>
                <div style={{ display: 'flex' }}>
                  <div
                    style={{
                      width: '351px',
                      backgroundColor: 'white',
                      margin: '0 0 0 20px',
                      paddingRight: '20px',
                      borderRight: '1px solid',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        margin: '30px 0 19px 0',
                      }}
                    >
                      <div>닉네임 |</div>
                      <div>{name}</div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        margin: '0 0 19px 0',
                      }}
                    >
                      <div>구분 |</div>
                      <div>{student === 1 ? '학생' : '직장인'}</div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        margin: '0 0 19px 0',
                      }}
                    >
                      <div>뒷풀이 여부 |</div>
                      <div>{followUp === 1 ? '참' : '불참'}</div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>굿즈 사이즈 |</div>
                      <div>{size}</div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: '351px',
                      backgroundColor: 'white',
                      margin: '0 20px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        margin: '30px 0 19px 0',
                      }}
                    >
                      <div>입금자명 |</div>
                      <div>김말숙</div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        margin: '0 0 19px 0',
                      }}
                    >
                      <div>입금계좌 |</div>
                      <div>2334-2345-23456</div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        margin: '0 0 19px 0',
                      }}
                    >
                      <div>입금기한 |</div>
                      <div>2019.02.04</div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>입금금액 |</div>
                      <div>{`${value}원`}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ color: 'white', margin: '0 0 323px 20px' }}>
                * 입금 기한이 지나면 자동으로 취소됩니다.
              </div>
              <div
                style={{
                  width: '702px',
                  height: '69px',
                  backgroundColor: 'black',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '24px',
                }}
              >
                <div onClick={onClickClose}>입력 정보 확인원</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <Menu menuHeight={menuHeight} /> */}
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
          let us: Go!
          <br />
          [2018 Spring]
          <br />
          session A
        </div>
        <form onSubmit={onSubmit} style={{ margin: '127px 0 0 0' }}>
          <div
            role="button"
            style={{
              width: '699px',
              height: '60px',
              borderRadius: '30px',
              border: '1px solid',
              alignItems: 'center',
              display: 'flex',
              margin: '0 0 15px 0',
              backgroundColor: day === 1 ? 'blue' : 'white',
            }}
            onClick={onClickDay}
          >
            <div style={{ marginLeft: '36px' }}>
              2019. 03.30 session A 날짜 확인
            </div>
          </div>
          <div
            style={{
              width: '699px',
              height: '60px',
              borderRadius: '30px',
              border: '1px solid',
              alignItems: 'center',
              display: 'flex',
              margin: '0 0 36px 0',
              backgroundColor: location === 1 ? 'blue' : 'white',
            }}
            onClick={onClickLocation}
          >
            <div style={{ marginLeft: '36px' }}>
              강남역 메리츠타워 7층 위치 확인
            </div>
          </div>
          <div style={{ margin: '0 0 9px 0' }}>학생할인 행당 여부</div>
          <div
            style={{
              width: '699px',
              display: 'flex',
              justifyContent: 'space-between',
              margin: '0 0 36px 0',
            }}
          >
            <div
              style={{
                width: '338px',
                height: '60px',
                borderRadius: '30px',
                border: '1px solid',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: student === 1 ? 'blue' : 'white',
              }}
              onClick={() => onClickStudent(1)}
            >
              <div>학생 10,000원</div>
            </div>
            <div
              style={{
                width: '338px',
                height: '60px',
                borderRadius: '30px',
                border: '1px solid',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: student === 2 ? 'blue' : 'white',
              }}
              onClick={() => onClickStudent(2)}
            >
              <div>일반 20,000원 </div>
            </div>
          </div>
          <div style={{ margin: '0 0 9px 0' }}>뒷풀이 참석 여부</div>
          <div
            style={{
              width: '699px',
              display: 'flex',
              justifyContent: 'space-between',
              margin: '0 0 36px 0',
            }}
          >
            <div
              style={{
                width: '338px',
                height: '60px',
                borderRadius: '30px',
                border: '1px solid',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: followUp === 1 ? 'blue' : 'white',
              }}
              onClick={() => onClickfollowUp(1)}
            >
              <div>불참 +0원</div>
            </div>
            <div
              style={{
                width: '338px',
                height: '60px',
                borderRadius: '30px',
                border: '1px solid',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: followUp === 2 ? 'blue' : 'white',
              }}
              onClick={() => onClickfollowUp(2)}
            >
              <div>참 +20,000원</div>
            </div>
          </div>
          <div style={{ margin: '0 0 9px 0' }}>굿즈 사이즈 선택하기</div>
          <div
            style={{
              width: '699px',
              display: 'flex',
              justifyContent: 'space-between',
              margin: '0 0 36px 0',
            }}
          >
            <div
              style={{
                width: '699px',
                height: '60px',
                borderRadius: '30px',
                border: '1px solid',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div style={{ margin: '0 0 0 36px' }}>
                <input
                  style={{
                    border: 'none',
                    fontSize: '100%',
                    width: 'calc(699px - 45px',
                  }}
                  type="text"
                  placeholder="s/m/l"
                  value={size}
                  onChange={setSize}
                />
              </div>
            </div>
          </div>
          <div style={{ margin: '0 0 9px 0' }}>이름 입력</div>
          <div
            style={{
              width: '699px',
              display: 'flex',
              justifyContent: 'space-between',
              margin: '0 0 50px 0',
            }}
          >
            <div
              style={{
                width: '699px',
                height: '60px',
                borderRadius: '30px',
                border: '1px solid',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div style={{ margin: '0 0 0 36px' }}>
                <input
                  style={{
                    border: 'none',
                    fontSize: '100%',
                    width: 'calc(699px - 45px',
                  }}
                  type="text"
                  value={name}
                  onChange={setName}
                  placeholder="참가비 입금자 실명 입력"
                />
              </div>
            </div>
          </div>
          <div>
            <div style={{ margin: '0 15px 11px 528px' }}>
              필수 항목 모두 체크 후에
            </div>
          </div>
          <input
            type="submit"
            value={`${value}원 결제하기`}
            style={{
              width: '699px',
              height: '67px',
              textAlign: 'center',
              fontSize: '100%',
              padding: '10px 10px 10px 10px',
            }}
          />
        </form>
        {/* <button type="button" onClick={onClick}>
              신청
            </button> */}
      </div>
    </div>
  );
};

export default SessionA;
