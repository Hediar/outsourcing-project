import React from 'react';
import Parser from 'html-react-parser';
import { S } from './BlogStyled';

const BlogCard = ({ item }) => {
  return (
    <S.ContentLink href={item.url}>
      <S.BlogContainer key={item.idx}>
        <S.ContentBox>
          <S.ContentImgBox>
            {item.thumbnail ? <S.ContentImg src={item.thumbnail} /> : <S.ContentNoImg>📷이미지 없음</S.ContentNoImg>}
          </S.ContentImgBox>
          <S.InfoBox>
            <S.ContentTitle>{Parser(item.title)}</S.ContentTitle>
            <S.ContentTextBox>{Parser(item.contents)}</S.ContentTextBox>
            <S.BlogInfoBox>
              <S.Caption>{item.blogname}</S.Caption>
              <S.Caption>{item.datetime.slice(0, 10)}</S.Caption>
            </S.BlogInfoBox>
          </S.InfoBox>
        </S.ContentBox>
      </S.BlogContainer>
    </S.ContentLink>
  );
};

export default BlogCard;
