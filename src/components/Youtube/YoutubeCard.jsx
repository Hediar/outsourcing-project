import React from 'react';
import { styled } from 'styled-components';

const YoutubeCard = ({ item }) => {
  return (
    <S.ContentLink href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>
      <S.BlogContainer key={item.idx}>
        <S.ContentBox>
          <div>
            <S.ContentTitle>{item.snippet.title}</S.ContentTitle>
            <div>
              <p>{item.snippet.channelTitle}</p>
              <p>{item.snippet.publishTime.slice(0, 10)}</p>
            </div>
          </div>
          <S.ContentImg src={item.snippet.thumbnails?.default.url} />
        </S.ContentBox>
      </S.BlogContainer>
    </S.ContentLink>
  );
};

export default YoutubeCard;

const S = {
  BlogContainer: styled.div`
    border: black 1px solid;
    padding: 20px;
    margin-bottom: 20px;
    height: 120px;
    overflow: hidden;
  `,

  ContentTitle: styled.p`
    font-size: 20px;
    font-weight: 500;
    margin: 20px 0;
  `,
  ContentBox: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  ContentImg: styled.img`
    width: 130px;
    height: 130px;
    border-radius: 10px;
  `,

  ContentLink: styled.a`
    text-decoration: none;
    color: black;
  `
};
