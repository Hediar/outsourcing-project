import React from 'react';
import { styled } from 'styled-components';
import Parser from 'html-react-parser';

const Blog = ({ item }) => {
  return (
    <S.ContentLink href={item.url}>
      <S.BlogContainer key={item.idx}>
        <S.ContentBox>
          <div>
            <S.ContentTitle>{Parser(item.title)}</S.ContentTitle>
            <div>
              <p>{item.blogname}</p>
              <p>{item.datetime.slice(0, 10)}</p>
            </div>
          </div>
          <S.ContentImg src={item.thumbnail} />
        </S.ContentBox>
      </S.BlogContainer>
    </S.ContentLink>
  );
};

export default Blog;

const S = {
  BlogContainer: styled.div`
    border: black 1px solid;
    padding: 20px;
    margin: 10px 20px 10px 20px;
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
    /* margin: 10px; */
  `
};
