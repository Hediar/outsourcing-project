import React from 'react';
import { styled } from 'styled-components';

const YoutubeCard = ({ item }) => {
  console.log(item);
  return (
    <S.ContentLink href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>
      <S.BlogContainer key={item.idx}>
        <S.ContentImgBox>
          <S.ContentImg src={item.snippet.thumbnails?.high.url} />
        </S.ContentImgBox>
        <S.ContentBox>
          <S.ContentTitle>{item.snippet.title}</S.ContentTitle>
        </S.ContentBox>
      </S.BlogContainer>
    </S.ContentLink>
  );
};

export default YoutubeCard;

const S = {
  BlogContainer: styled.div`
    box-sizing: border-box;
    border-bottom: 1px solid orange;
    padding: 15px 0 15px 0;
    width: 430px;
    overflow: hidden;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  InfoBox: styled.div`
    width: 320px;
  `,
  ContentTextBox: styled.div`
    margin: 8px 0 0 5px;
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  BlogInfoBox: styled.div`
    margin-top: 15px;
  `,
  Caption: styled.div`
    font-size: 10px;
    color: #464646;
    margin: 3px;
    color: #c2c2c2;
  `,

  ContentTitle: styled.div`
    margin: 10px 0 0 3px;
    font-size: 20px;
    word-break: keep-all;
    width: 100%;
    font-weight: 700;
  `,
  ContentBox: styled.div`
    width: 100%;
    margin: 0 10px;
    display: flex;
    gap: 10px;
  `,

  ContentImgBox: styled.div`
    height: 240px;
    border-radius: 10px;
    overflow: hidden;
    background-color: royalblue;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ContentImg: styled.img`
    width: 100%;
  `,

  ContentLink: styled.a`
    transition: 0.2s;
    text-decoration: none;
    &:hover {
      transform: translateY(-5px);

      box-shadow: 0px 8px 10px -4px rgba(0, 0, 0, 0.2);
    }
  `
};
