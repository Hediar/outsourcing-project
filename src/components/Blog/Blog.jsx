import React from 'react';
import { styled } from 'styled-components';
import Parser from 'html-react-parser';

const Blog = ({ item }) => {
  return (
    <S.BlogContainer key={item.idx}>
      <p>{item.blogname}</p>
      <S.ContentTitle>{Parser(item.title)}</S.ContentTitle>
      <S.ContentBox>
        <S.ContentDesc>{Parser(item.contents)}</S.ContentDesc>
        <img src={item.thumbnail} />
      </S.ContentBox>
      <p>{item.datetime.slice(0, 10)}</p>
    </S.BlogContainer>
  );
};

export default Blog;

const S = {
  BlogContainer: styled.div`
    border: black 1px solid;
    padding: 20px;
    margin-bottom: 20px;
  `,
  ContentTitle: styled.p`
    font-size: 25px;
    font-weight: 500;
  `,
  ContentBox: styled.div`
    display: flex;
  `,
  ContentDesc: styled.p`
    font-size: 18px;
    margin-right: 10px;
  `
};
