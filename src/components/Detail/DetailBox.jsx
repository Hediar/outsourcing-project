import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import Map from '../Map/Map';
import ShowBlogList from '../Blog/ShowBlogList';
import { getPlace } from '../../api/jejuHotPlace';
import { styled } from 'styled-components';
import usePlaceData from '../../hook/usePlaceData';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailModalOn } from '../../redux/modules/modalSlice';

const DetailBox = () => {
  const { detailModalData } = useSelector((state) => state.detailModal);
  const dispatch = useDispatch();
  //   const target = useRef(null);
  //   const [observe, unobserve] = useIntersectionObserver(() => {
  //     // 스타일을 넣어줄거야 박스 쉐도우를.
  //   });

  //   useEffect(() => {
  //     if (isLoading) {
  //       if (target == null) {
  //         unobserve(target.current);
  //       }
  //     } else {
  //       observe(target.current);
  //     }
  //   }, [isLoading]);

  //   const param = useParams();
  //   const { isLoading, isError, data } = useQuery(`${param.id}`, () => getPlace(param.id));

  //   if (isLoading) {
  //     return (
  //       <>
  //         <h1>로딩중</h1>
  //       </>
  //     );
  //   }

  //   if (isError) {
  //     return (
  //       <>
  //         <h1>오류가 발생하였습니다....!!!</h1>
  //       </>
  //     );
  //   }

  return (
    <S.DetailBoxContainer>
      <S.DetailCloseBtn onClick={() => dispatch(setDetailModalOn(false))}>닫기</S.DetailCloseBtn>
      <S.DetailBox>
        <S.InfoBox>
          <S.Title>{detailModalData.title}</S.Title>
          <S.Img src="https://blog.kakaocdn.net/dn/o1KIw/btqu9mflPY6/rGk1mM3iugV1c6jj9Z3E80/img.jpg" />
          <S.Info>{detailModalData.detail?.information}</S.Info>
          <S.Info>{detailModalData.address}</S.Info>
          <S.Info>{detailModalData.detail?.businessHours}</S.Info>
          <S.Info>{detailModalData.detail?.tel}</S.Info>
          <S.Info>{detailModalData.detail?.Link}</S.Info>
          <S.Info>{detailModalData.detail?.parking}</S.Info>
        </S.InfoBox>
        <ShowBlogList searchTxt={detailModalData.title} />
      </S.DetailBox>
    </S.DetailBoxContainer>
  );
};

export default DetailBox;

const S = {
  DetailBoxContainer: styled.div`
    padding-top: 70px;
    display: flex;
  `,
  DetailCloseBtn: styled.button`
    width: 50px;
    height: 50px;
    position: absolute;
    z-index: 5;
    left: 850px;
    background-color: white;
    border: none;
    cursor: pointer;
  `,
  DetailBox: styled.div`
    width: 500px;
    height: 100vh;
    box-sizing: border-box;
    background-color: white;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    z-index: 1;
  `,
  InfoBox: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Img: styled.img`
    width: 400px;
    border-radius: 10px;
    margin: 80px 0 25px 0;
  `,
  Title: styled.h3`
    font-size: 25px;
    font-weight: 600;
    width: 500px;
    padding: 20px 0;
    text-align: center;
    position: fixed;
    background-color: white;
    &.test {
      box-shadow: 0px 5px 5px -4px gray;
    }
  `,
  Info: styled.p`
    font-size: 18px;
  `
};
