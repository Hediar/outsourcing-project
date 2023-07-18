import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import Map from '../Map/Map';
import ShowBlogList from '../Blog/ShowBlogList';
import { getPlace } from '../../api/jejuHotPlace';
import { styled } from 'styled-components';
import DetailInfor from './DetailInfor';
import DetailTab from './DetailTab';

const DetailBox = () => {
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
      {/* <Map /> */}
      {/* address = {`${data.title}`} */}
      <S.Title>이름:data.title</S.Title>
      <S.Img src="https://blog.kakaocdn.net/dn/o1KIw/btqu9mflPY6/rGk1mM3iugV1c6jj9Z3E80/img.jpg" />
      <DetailTab />
    </S.DetailBoxContainer>
  );
};

export default DetailBox;

const S = {
  DetailBoxContainer: styled.div`
    width: 500px;
    height: 100vh;
    box-sizing: border-box;
    padding-top: 70px;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    z-index: 1;
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
  `
};
