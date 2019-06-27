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
        [2018 Spring]
      </div>
      <StyledLayout>
        <Track
          title={'Track A'}
          schedule={[
            {
              start: '12:30',
              end: '01:30',
              title: 'title',
              name: 'name',
              image: 'https://pbs.twimg.com/media/DuqiMgCUYAEhDDw.jpg',
              description: '안녕 이제 재밌는걸 시작해 보자',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '12:30',
              end: '01:30',
              title: 'title',
              name: 'name',
              image: 'https://pbs.twimg.com/media/DuqiMgCUYAEhDDw.jpg',
              description: '안녕 이제 재밌는걸 시작해 보자',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '12:30',
              end: '01:30',
              title: 'title',
              name: 'name',
              image: 'https://pbs.twimg.com/media/DuqiMgCUYAEhDDw.jpg',
              description: '안녕 이제 재밌는걸 시작해 보자',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '12:30',
              end: '01:30',
              title: 'title',
              name: 'name',
              image: 'https://pbs.twimg.com/media/DuqiMgCUYAEhDDw.jpg',
              description: '안녕 이제 재밌는걸 시작해 보자',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '12:30',
              end: '01:30',
              title: 'title',
              name: 'name',
              image: 'https://pbs.twimg.com/media/DuqiMgCUYAEhDDw.jpg',
              description: '안녕 이제 재밌는걸 시작해 보자',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
          ]}
          trackInfo={[
            { title: 'Application', description: '100명' },
            { title: 'Venue', description: '코엑스 아트홀' },
            { title: 'Entry fee', description: '일반 20,000원' },
            { title: 'Application', description: '학생 10,000원' },
          ]}
        />
        <Track
          title={'Track B'}
          schedule={[
            {
              start: '12:30',
              end: '01:30',
              title: 'title',
              name: 'name',
              image: 'https://pbs.twimg.com/media/DuqiMgCUYAEhDDw.jpg',
              description: '안녕 이제 재밌는걸 시작해 보자',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '12:30',
              end: '01:30',
              title: 'title',
              name: 'name',
              image: 'https://pbs.twimg.com/media/DuqiMgCUYAEhDDw.jpg',
              description: '안녕 이제 재밌는걸 시작해 보자',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '12:30',
              end: '01:30',
              title: 'title',
              name: 'name',
              image: 'https://pbs.twimg.com/media/DuqiMgCUYAEhDDw.jpg',
              description: '안녕 이제 재밌는걸 시작해 보자',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '12:30',
              end: '01:30',
              title: 'title',
              name: 'name',
              image: 'https://pbs.twimg.com/media/DuqiMgCUYAEhDDw.jpg',
              description: '안녕 이제 재밌는걸 시작해 보자',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '12:30',
              end: '01:30',
              title: 'title',
              name: 'name',
              image: 'https://pbs.twimg.com/media/DuqiMgCUYAEhDDw.jpg',
              description: '안녕 이제 재밌는걸 시작해 보자',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '12:30',
              end: '01:30',
              title: 'title',
              name: 'name',
              image: 'https://pbs.twimg.com/media/DuqiMgCUYAEhDDw.jpg',
              description: '안녕 이제 재밌는걸 시작해 보자',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '12:30',
              end: '01:30',
              title: 'title',
              name: 'name',
              image: 'https://pbs.twimg.com/media/DuqiMgCUYAEhDDw.jpg',
              description: '안녕 이제 재밌는걸 시작해 보자',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
            {
              start: '12:30',
              end: '01:30',
              title: 'title',
              name: 'name',
              image: 'https://pbs.twimg.com/media/DuqiMgCUYAEhDDw.jpg',
              description: '안녕 이제 재밌는걸 시작해 보자',
              infos: [
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
                {
                  title: 'email',
                  description: 'abc@naver.com',
                },
              ],
            },
          ]}
          trackInfo={[
            { title: 'Application', description: '100명' },
            { title: 'Venue', description: '코엑스 아트홀' },
            { title: 'Entry fee', description: '일반 20,000원' },
            { title: 'Application', description: '학생 10,000원' },
          ]}
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
