import React from 'react';
import styled from 'styled-components';

import Menu from '../components/Menu';
import Track from '../components/Track';
import { StyledButton } from '../common/styledComponents';
import { color } from '../common/color';

const StyledSponserProductSerport = styled.div`
  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px 0;
    img {
      margin: 4px 0 !important;
    }
  }
`;

const StyledSponserSection = styled.div`
  background-color: ${color.warmwhite};
  width: 100vw;
  max-width: 960px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 0 8px 0;
`;

const StyledSponserTier = styled.div`
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  left: 24px;
`;

const StyledFooterInfo = styled.div`
  display: flex;
  justifycontent: center;
  margin: 0 88px 45px 0;
  @media (max-width: 950px) {
    display: block;
    margin: 0 0 45px 0;
  }
`;

const StyledFooterLocation = styled.div`
  display: flex;
  margin: 0 88px 0 0;
  @media (max-width: 950px) {
    display: block;
    margin: 0 16px 20px 16px;
  }
`;
const StyledFooterPhone = styled.div`
  display: flex;
  @media (max-width: 950px) {
    display: block;
    margin: 0 16px;
  }
`;

const StyledLayout = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledIndex = styled.div`
  max-width: 960px;
  width: 100vw;
`;

const Index = () => {
  return (
    <>
      <StyledIndex>
        <img
          style={{
            width: '100vw',
            minWidth: '960px',
            minHeight: '300px',
            objectFit: 'cover',
            height: '39.37vw',
            position: 'absolute',
            top: '62px',
            left: '0px',
            zIndex: -1,
          }}
          src="https://letusgo-front.s3.ap-northeast-2.amazonaws.com/background.jpg"
          alt=""
        />
        <Menu />
        <div
          style={{
            margin: '90px 0 20px 10px',
            fontSize: '24px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '130px', height: '130px', margin: '0 32px 0 0' }}
            src="https://letusgo-front.s3.ap-northeast-2.amazonaws.com/icon_app_web.svg"
            alt=""
          />
          <div
            style={{
              color: color.littleWhite,
              fontSize: '35px',
              lineHeight: '45px',
              margin: '0 16px 0 0',
            }}
          >
            let us: GO!
            <br />
            iOS Developers Korea
            <br />
            [2019 Summer]
            <br />
          </div>
        </div>
        <div
          style={{
            backgroundColor: color.littleWhite,
            padding: '48px',
            fontSize: '20px',
            lineHeight: '29px',
            margin: '0 0 82px 0',
          }}
        >
          <br />
          let us: Go!에 관심을 가져주셔서 감사드립니다.
          <br />
          let us: Go!(前 비정상 토크모임)는 2016년 10월에 처음, 세미나를 열게
          되었습니다.
          <br />
          세미나라고 하기보단, 서로 가지고 있는 지식을 공유하며 소통하고
          <br />
          같은 개발자끼리 어울려 친해질 수 있는 편한 자리로 생각해주시면
          좋겠습니다.
          <br />
          <br />
          let us: Go! 참가신청은 아무 조건이 없습니다
          <br />
          iOS 개발자로 현업에서 일하시는 분, 이제 막 시작해서 헤매는 분,
          <br />
          그리고 이제 iOS 개발을 시작하려 하시는 분 모두가 모여 개발 이야기를
          꽃피우는 자리입니다.
          <br />
          알고 있는 정보는 서로에게 공유하고, 모르는 정보는 얻어가는 서로
          소통하는 자리이니 부담 없이 와주세요.
          <br />
          의미있고 예쁜 기념품과 경품도 증정합니다 :)
          <br />
        </div>
        <StyledLayout>
          <Track
            pay={{ student: '10,000원', nonStudent: '20,000원' }}
            title={'Track A'}
            schedule={[
              {
                start: '13:00',
                end: '13:20',
                title: '개회식',
                name: '',
                image: '',
                description: '',
                infos: [],
              },
              {
                start: '13:20',
                end: '13:40',
                title: 'StringInterpolation과 SwiftUI',
                name: '민소네',
                image:
                  'https://letusgo-front.s3.ap-northeast-2.amazonaws.com/profile_sone.jpeg',
                description:
                  'Swift5에서 추가된 StringInterpolation을 이용하여 한번에 RichString을 만들어 문자열을 좀 더 의미있게 읽을 수 있도록 하기',
                infos: [],
              },
              {
                start: '13:40',
                end: '14:00',
                title: '인디 앱 수입으로 월세 내기',
                name: '전미정',
                image:
                  'https://letusgo-front.s3.ap-northeast-2.amazonaws.com/mi.png',
                description:
                  '모두가 꿈꾸는 대박 수익은 아니지만, 지난 2년 동안 꾸준한 앱 수익으로 월세를 낼 수 있었던 소소한 이야기를 공유해볼까 합니다.',
                infos: [
                  { title: '이메일', description: 'ninevincentg@gmail.com' },
                  {
                    title: '깃헙',
                    description: 'https://github.com/MijeongJeon',
                  },
                  {
                    title: '페이스북',
                    description: 'https://www.facebook.com/Ninevincent',
                  },
                ],
              },
              {
                start: '14:00',
                end: '14:10',
                title: '쉬는시간',
                name: '',
                image: '',
                description: '',
                infos: [],
              },
              {
                start: '14:10',
                end: '14:40',
                title: 'ARKit 3 톺아보기',
                name: '김형중',
                image:
                  'https://letusgo-front.s3.ap-northeast-2.amazonaws.com/kim.png',
                description:
                  '이번 WWDC 2019에서 소개된 ARKit 3, RealityKit, Reality Composer에 관해서 이야기하려고 합니다.\niOS 13과 함께 더 강력해진 ARKit 3,\nApple이 AR을 통해 그리는 미래를 만나보아요.',
                infos: [
                  {
                    title: '이메일',
                    description: 'clsoft.developer@gmail.com',
                  },
                  { title: '깃헙', description: 'https://github.com/clsoft' },
                  {
                    title: '페이스북',
                    description: 'https://www.facebook.com/clsoft',
                  },
                ],
              },
              {
                start: '14:40',
                end: '15:00',
                title: 'iOS 프리랜서로 산다는 것',
                name: '클린트',
                image:
                  'https://letusgo-front.s3.ap-northeast-2.amazonaws.com/profile_ws.jpeg',
                description: 'iOS 개발자로써의 프리랜서 경험담',
                infos: [],
              },
              {
                start: '15:00',
                end: '15:40',
                title: '네트워킹',
                name: '',
                image: '',
                description: '',
                infos: [],
              },
              {
                start: '15:40',
                end: '16:10',
                title: 'Combine vs Rx',
                name: '상어',
                image:
                  'https://letusgo-front.s3.ap-northeast-2.amazonaws.com/sang.png',
                description: '-',
                infos: [],
              },
              {
                start: '16:10',
                end: '16:30',
                title: '비전공 개발자',
                name: 'Yo!',
                image:
                  'https://letusgo-front.s3.ap-northeast-2.amazonaws.com/yo.png',
                description: '비전공 개발자로 살아온 개발자의 인생 팁',
                infos: [],
              },
              {
                start: '16:00',
                end: '16:40',
                title: '쉬는시간',
                name: '',
                image: '',
                description: '',
                infos: [],
              },
              {
                start: '16:50',
                end: '17:10',
                title: `What's new in Xcode / iOS13`,
                name: '재르시',
                image:
                  'https://letusgo-front.s3.ap-northeast-2.amazonaws.com/j.png',
                description:
                  'Xcod11, iOS13의 변경점들을 톺아보고 iOS13에서 생기는 디자인 이슈들에 대응해 봅시다',
                infos: [],
              },
              {
                start: '17:00',
                end: '17:10',
                title: '쉬는시간',
                name: '',
                image: '',
                description: '',
                infos: [],
              },
              {
                start: '17:20',
                end: '17:50',
                title: 'WWDC Cheatsheet',
                name: '최완복',
                image:
                  'https://letusgo-front.s3.ap-northeast-2.amazonaws.com/profile_wanbok.jpeg',
                description:
                  'WWDC주요 세션 내용 간략히 소개하고, wwdc참가시 잘 즐기는 꿀 팁 소개',
                infos: [],
              },
              {
                start: '17:50',
                end: '18:00',
                title: '경품추첨 및 폐회식 / 사진촬영',
                name: '',
                image: '',
                description: '',
                infos: [],
              },
            ]}
            trackInfo={{
              description:
                '강의로만 이루어진 트랙입니다.\nB트랙 참여가 불가능합니다.',
              location: '한빛빌딩 b동 1층\n리더스홀',
              application: '75명',
            }}
          />
          <Track
            pay={{ student: '15,000원', nonStudent: '30,000원' }}
            title={'Track A + B'}
            schedule={[
              {
                start: '13:00',
                end: '13:20',
                title: '개회식',
                name: '',
                image: '',
                description: '',
                infos: [],
              },
              {
                start: '13:20',
                end: '14:00',
                title: '누구나 할 수 있다. Networking',
                name: '카우',
                image:
                  'https://letusgo-front.s3.ap-northeast-2.amazonaws.com/profile_kawoou.jpeg',
                description: 'Rest부터 Moya까지!',
                infos: [],
                scale: 2,
              },
              {
                start: '14:00',
                end: '14:10',
                title: '쉬는시간',
                name: '',
                image: '',
                description: '',
                infos: [],
              },
              {
                start: '14:10',
                end: '15:00',
                title: '빨간맛  SwiftUI',
                name: 'keyWindow',
                image:
                  'https://letusgo-front.s3.ap-northeast-2.amazonaws.com/keywindow.png',
                description:
                  'SwiftUI를 활용하여 여러 화면을 구현해보면서 느껴보기',
                infos: [],
                scale: 2,
              },
              {
                start: '15:00',
                end: '15:40',
                title: '네트워킹',
                name: '',
                image: '',
                description: '',
                infos: [],
              },
              {
                start: '15:40',
                end: '16:30',
                title: 'Jump into iPadOS13',
                name: '구범모',
                image:
                  'https://letusgo-front.s3.ap-northeast-2.amazonaws.com/ku.jpeg',
                description: 'Jump into iPadOS13',
                scale: 2,
                infos: [
                  {
                    title: '이메일',
                    description: 'ksquareatm@gmail.com',
                  },
                  {
                    title: '홈페이지',
                    description: 'gbmksquare.com',
                  },
                  {
                    title: '깃헙',
                    description: 'gbmksquare',
                  },
                  {
                    title: '인스타',
                    description: '@gbmksquare',
                  },
                  {
                    title: '페북',
                    description: 'fb.com/gbmksquare',
                  },
                ],
              },
              {
                start: '16:30',
                end: '16:40',
                title: '쉬는시간',
                name: '',
                image: '',
                description: '',
                infos: [],
              },
              {
                start: '16:40',
                end: '17:10',
                title: 'RxSwift Internal',
                name: '엉덩숭아',
                image:
                  'https://letusgo-front.s3.ap-northeast-2.amazonaws.com/un.png',
                description: '-',
                infos: [],
              },
              {
                start: '17:10',
                end: '17:50',
                title: 'LifeCycle in detail',
                name: 'giftbot',
                image:
                  'https://letusgo-front.s3.ap-northeast-2.amazonaws.com/bot.png',
                description:
                  '뷰컨트롤러와 뷰의 생명주기에 대해 좀 더 자세히 살펴보기',
                scale: 2,
                infos: [{ title: '이메일', description: 'giftbott@gmail.com' }],
              },
              {
                start: '17:50',
                end: '18:00',
                title: '경품추첨 및 폐회식 / 사진촬영',
                name: '',
                image: '',
                description: '',
                infos: [],
              },
            ]}
            trackInfo={{
              description:
                '실습으로 진행되는 트랙입니다.\n맥북을 지참하셔야 합니다.\nA트랙 참여도 가능합니다.',
              location: '한빛빌딩 a동 2층\n강의실 40',
              application: '35명',
            }}
          />
        </StyledLayout>
        <StyledButton>
          <div
            style={{
              // border: `0px solid ${color.black}`,
              fontSize: '20px',
              color: 'white',
              backgroundColor: color.black,
            }}
          >
            7월 8일 15시부터 신청 가능합니다.
          </div>
        </StyledButton>
      </StyledIndex>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100vw',
          margin: '0 0 24px 0',
          backgroundColor: 'white',
          fontWeight: 'bold',
          fontSize: '29px',
        }}
      >
        <div style={{ margin: '28px 0 24px 0', fontSize: '24px' }}>Sponser</div>
      </div>
      <StyledSponserSection>
        <StyledSponserTier>골드</StyledSponserTier>
        <div>
          <img
            src="https://letusgo-front.s3.ap-northeast-2.amazonaws.com/sponser_gold_hey dealer.svg"
            width="151px"
            style={{ margin: '28px 0' }}
            alt=""
          />
        </div>
      </StyledSponserSection>
      <StyledSponserSection>
        <StyledSponserTier>실버</StyledSponserTier>
        <div>
          <div>
            <img
              src="https://letusgo-front.s3.ap-northeast-2.amazonaws.com/sponser_silver_myrealtrip.svg"
              width="200px"
              style={{ margin: '28px 0 8px 0' }}
              alt=""
            />
          </div>
          <div>
            <img
              src="https://letusgo-front.s3.ap-northeast-2.amazonaws.com/hanbit-logo-940px-1.svg"
              width="200px"
              style={{ margin: '0 0 28px 0' }}
              alt=""
            />
          </div>
        </div>
      </StyledSponserSection>
      <StyledSponserSection>
        <StyledSponserTier>브론즈</StyledSponserTier>
        <img
          src="https://letusgo-front.s3.ap-northeast-2.amazonaws.com/sponser_bronze.svg"
          width="90px"
          style={{ margin: '28px 0' }}
          alt=""
        />
      </StyledSponserSection>
      <StyledSponserSection>
        <StyledSponserTier>물품 지원</StyledSponserTier>
        <StyledSponserProductSerport>
          <img
            src="https://letusgo-front.s3.ap-northeast-2.amazonaws.com/sponser_support_yagom.svg"
            width="52px"
            style={{ margin: '28px 65px 28px 0' }}
            alt=""
          />
          <img
            src="https://letusgo-front.s3.ap-northeast-2.amazonaws.com/sponser_support_line.svg"
            width="126px"
            style={{ margin: '28px 0' }}
            alt=""
          />
        </StyledSponserProductSerport>
      </StyledSponserSection>
      <StyledSponserSection>
        <StyledSponserTier>주관</StyledSponserTier>
        <img
          src="https://letusgo-front.s3.ap-northeast-2.amazonaws.com/sponser_support_yagom.svg"
          width="52px"
          style={{ margin: '28px 0' }}
          alt=""
        />
      </StyledSponserSection>
      <StyledSponserSection>
        <StyledSponserTier>주최</StyledSponserTier>
        <img
          src="https://letusgo-front.s3.ap-northeast-2.amazonaws.com/logo_let us_Go!.svg"
          style={{
            margin: '28px 0',
            maxWidth: '420px',
            width: '60vw',
          }}
          alt=""
        />
      </StyledSponserSection>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100vw',
          maxWidth: '960px',
          margin: '0 0 84px 0',
          backgroundColor: 'white',
        }}
      >
        <div
          style={{
            margin: '28px 0 24px 0',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          추가 스폰서 모집중
        </div>
        <div
          style={{
            margin: '0 0 24px 0',
            fontSize: '23px',
            color: color.grapefruit,
          }}
        >
          keywindow@naver.com
        </div>
        <div
          style={{
            margin: '0 0 34px 0',
            fontSize: '20px',
            padding: '0 10px',
          }}
        >
          간식, 상품, 회식 제공! 뭐든 좋습니다! 언제나 열려있습니다! 메일
          주세요!
        </div>
        <div
          style={{
            bottom: 0,
            left: 0,
            width: '100vw',
            backgroundColor: color.warmwhite,
            display: 'flex',
            justifyContent: 'center',
            margin: '0 0 120px 0',
          }}
        >
          <div style={{ maxWidth: '960px', width: '100vw' }}>
            <div
              style={{
                display: 'flex',
                fontSize: '20px',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  fontSize: '29px',
                  margin: '40px 0 32px 0',
                  fontWeight: 'bold',
                }}
              >
                Location
              </div>
              <StyledFooterInfo>
                <StyledFooterLocation>
                  <div
                    style={{
                      margin: '0 20px 5px 0',
                      fontWeight: 'bold',
                      color: color.grapefruit,
                    }}
                  >
                    장소
                  </div>
                  <div style={{ fontWeight: 'bold' }}>
                    <div>서울특별시 서대문구 연희로2길 62 한빛미디어</div>
                    <div style={{ maxWidth: '321px' }} />
                  </div>
                </StyledFooterLocation>
                <div>
                  <StyledFooterPhone>
                    <div
                      style={{
                        margin: '0 20px 5px 0',
                        fontWeight: 'bold',
                        color: color.grapefruit,
                      }}
                    >
                      연락처
                    </div>
                    <div style={{ fontWeight: 'bold' }}>
                      <div>keyWindow@naver.com</div>
                    </div>
                  </StyledFooterPhone>
                </div>
              </StyledFooterInfo>
              <div
                style={{
                  fontSize: '24px',
                  margin: '0 0 24px 0',
                  fontWeight: 'bold',
                  padding: '0 10px',
                }}
              >
                <img
                  onClick={() => {
                    window.location.href =
                      'https://map.naver.com/?mapmode=0&pinId=12120302&pinType=site&lng=ebf219704585925ad36e69fc6be47c93&lat=8d244babc760a0e4c1e0d5fe8b0fb7ca&dlevel=11&enc=b64';
                  }}
                  style={{ maxWidth: '960px', width: '80vw' }}
                  src="https://letusgo-front.s3.ap-northeast-2.amazonaws.com/map.png"
                  alt=""
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  margin: '0 0 51px 0',
                }}
              >
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
