import React from 'react';
import { styled } from 'styled-components';
import Parser from 'html-react-parser';

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

const S = {
  BlogContainer: styled.div`
    box-sizing: border-box;
    border-top: 1px solid orange;
    border-bottom: 1px solid orange;
    padding: 15px 0 15px 0;
    width: 450px;
    overflow: hidden;
    line-height: 1.4;
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
    margin: 0 0 0 3px;
    font-size: 20px;
    word-break: keep-all;
    font-weight: 700;
  `,
  ContentBox: styled.div`
    margin: 0 10px;
    display: flex;
    gap: 10px;
  `,

  ContentImgBox: styled.div`
    width: 130px;
    border-radius: 10px;
    overflow: hidden;
    background-color: orange;

    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ContentImg: styled.img`
    height: 100%;
    /* display: block; */
    /* height: auto; */
  `,
  ContentNoImg: styled.div`
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.2);
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    /* display: block; */
    /* height: auto; */
  `,
  ContentLink: styled.a`
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 8px 10px -4px rgba(0, 0, 0, 0.2);
    }
    /* margin: 10px; */
  `
};
