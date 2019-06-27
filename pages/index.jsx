import React from 'react';
import styled from 'styled-components';

import Menu from '../components/Menu';
import Track from '../components/Track';
import { color } from '../common/color';

const StyledLayout = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 60px 0;
  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Index = () => {
  return (
    <div
      style={{
        maxWidth: '960px',
        width: '100vw',
      }}
    >
      <Menu />
      <div
        style={{
          margin: '90px 0 20px 10px',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        [2018 Summer]
      </div>
      <img
        style={{ width: '100vw', maxWidth: '960px' }}
        src="/static/letusgo.png"
        alt=""
      />
      <StyledLayout>
        <Track
          title={'Track A'}
          schedule={[
            {
              start: '13:20',
              end: '14:00',
              title: '누구나 할 수 있다. Networking',
              name: '카우',
              image: '/static/profile_kawoou.jpeg',
              description: 'Rest부터 Moya까지!',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '14:10',
              end: '15:00',
              title: '빨간맛  SwiftUI',
              name: 'keyWindow',
              image: '/static/yagom.png',
              description:
                'SwiftUI를 활용하여 여러 화면을 구현해보면서 느껴보기',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            // {
            //   start: '15:00',
            //   end: '15:40',
            //   title: '네트워킹',
            //   name: '',
            //   image: '',
            //   description: '',
            //   infos: [],
            // },
            {
              start: '15:40',
              end: '16:30',
              title: 'Jump into iPadOS13',
              name: '구범모',
              image: '/static/ku.jpeg',
              description: 'Jump into iPadOS13',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '16:40',
              end: '17:10',
              title: 'RxSwift Internal',
              name: '엉덩숭아',
              image: '/static/un.png',
              description: '-',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '17:10',
              end: '17:50',
              title: 'LifeCycle in detail',
              name: 'giftbot',
              image: '/static/bot.png',
              description:
                '뷰컨트롤러와 뷰의 생명주기에 대해 좀 더 자세히 살펴보기',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            // {
            //   start: '17:50',
            //   end: '18:00',
            //   title: '경품추첨 및 폐회식 / 사진촬영',
            //   name: '',
            //   image: '',
            //   description: '',
            //   infos: [],
            // },
          ]}
          trackInfo={{
            location: '한빛빌딩 a동 2층',
            application: '35명',
          }}
        />
        <Track
          title={'Track B'}
          schedule={[
            {
              start: '13:20',
              end: '13:40',
              title: 'StringInterpolation과 SwiftUI',
              name: '민소네',
              image: '/static/profile_sone.jpeg',
              description:
                'Swift5에서 추가된 StringInterpolation을 이용하여 한번에 RichString을 만들어 문자열을 좀 더 의미있게 읽을 수 있도록 하기',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '13:40',
              end: '14:00',
              title: '인디 앱 수입으로 월세 내기',
              name: '전미정',
              image: '/static/mi.png',
              description:
                '모두가 꿈꾸는 대박 수익은 아니지만, 지난 2년 동안 꾸준한 앱 수익으로 월세를 낼 수 있었던 소소한 이야기를 공유해볼까 합니다.',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '14:10',
              end: '14:40',
              title: 'ARKit 3 톺아보기',
              name: '김형중',
              image: '/static/kim.png',
              description:
                '이번 WWDC 2019에서 소개된 ARKit 3, RealityKit, Reality Composer에 관해서 이야기하려고 합니다.\niOS 13과 함께 더 강력해진 ARKit 3,\nApple이 AR을 통해 그리는 미래를 만나보아요.',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '14:40',
              end: '15:00',
              title: 'iOS 프리랜서로 산다는 것',
              name: '클린트',
              image: '/static/profile_ws.jpeg',
              description: 'iOS 개발자로써의 프리랜서 경험담',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '15:40',
              end: '16:10',
              title: 'Combine vs Rx',
              name: '상어',
              image: '/static/sang.png',
              description: '-',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '16:10',
              end: '16:30',
              title: '비전공 개발자',
              name: 'Yo!',
              image: '/static/yo.png',
              description: '비전공 개발자로 살아온 개발자의 인생 팁',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '16:50',
              end: '17:10',
              title: `What's new in Xcode / iOS13`,
              name: '재르시',
              image: '/static/j.png',
              description:
                'Xcod11, iOS13의 변경점들을 톺아보고 iOS13에서 생기는 디자인 이슈들에 대응해 봅시다',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '17:20',
              end: '17:50',
              title: 'WWDC Cheatsheet',
              name: '최완복',
              image: '/static/profile_wanbok.jpeg',
              description:
                'WWDC주요 세션 내용 간략히 소개하고, wwdc참가시 잘 즐기는 꿀 팁 소개',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
          ]}
          trackInfo={{
            location: '한빛빌딩 b동 1층',
            application: '75명',
          }}
        />
      </StyledLayout>
      <div
        style={{
          width: '100vw',
          maxWidth: '960px',
          height: '70px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: color.black,
          borderRadius: '20px',
        }}
      >
        <div
          style={{
            // border: `0px solid ${color.black}`,
            fontSize: '20px',
            color: 'white',
            backgroundColor: color.black,
          }}
        >
          신청하기
        </div>
      </div>
      <img
        style={{ maxWidth: '960px', width: '100vw' }}
        src="https://pbs.twimg.com/media/DuqiMgCUYAEhDDw.jpg"
        alt=""
      />
    </div>
  );
};

export default Index;
