import React from 'react';
import { S } from './YoutubeStyled';

const YoutubeCard = ({ item }) => {
  return (
    <S.ContentLink href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>
      <S.YtbContainer key={item.idx}>
        <S.ContentImgBox>
          <S.ContentImg src={item.snippet.thumbnails?.high.url} />
        </S.ContentImgBox>
        <S.ContentBox>
          <S.ContentTitle>{item.snippet.title}</S.ContentTitle>
        </S.ContentBox>
      </S.YtbContainer>
    </S.ContentLink>
  );
};

export default YoutubeCard;
