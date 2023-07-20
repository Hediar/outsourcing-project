import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import DetailTab from './DetailTab';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailModalOn } from '../../redux/modules/modalSlice';
// import { gsap } from 'gsap';

const DetailBox = () => {
  const boxRef = useRef(null);
  const { detailModalData } = useSelector((state) => state.detailModal);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   gsap.to(boxRef.current, 1, { transform: 'translateX(200px)', delay: 0.5, ease: 'ease' });
  // });

  return (
    <S.MotionBox ref={boxRef}>
      <S.DetailCloseBtn onClick={() => dispatch(setDetailModalOn(false))}> X </S.DetailCloseBtn>
      <S.DetailBoxContainer>
        <S.DetailInfoBox>
          <S.Img />

          <S.TitleArea>
            <S.Title>{detailModalData.title}</S.Title>
            <S.SubTitle>{detailModalData.category}</S.SubTitle>
          </S.TitleArea>
        </S.DetailInfoBox>
        <S.DetailTabBox>
          <DetailTab />
        </S.DetailTabBox>
      </S.DetailBoxContainer>
    </S.MotionBox>
  );
};

export default DetailBox;

const S = {
  MotionBox: styled.div``,
  DetailInfoBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  DetailTabBox: styled.div`
    /* height: calc(100vh - 385px); */
  `,

  DetailBoxContainer: styled.div`
    width: 500px;
    height: calc(100vh - 70px);
    box-sizing: border-box;
    margin-top: 70px;
    /* background-color: royalblue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    z-index: 1;
  `,
  DetailCloseBtn: styled.button`
    width: 50px;
    height: 50px;
    position: absolute;
    z-index: 2;
    left: 870px;
    border-radius: 25px;
    top: calc((100vh - 50px) / 2);
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    cursor: pointer;
    color: white;
    font-size: 20px;
  `,
  Img: styled.div`
    width: 400px;
    height: 200px;
    background-image: url('https://blog.kakaocdn.net/dn/o1KIw/btqu9mflPY6/rGk1mM3iugV1c6jj9Z3E80/img.jpg');
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    margin-top: 30px;
    /* box-shadow: 0px 5px 5px -4px orange; */
  `,
  Title: styled.h3`
    font-size: 32px;
    font-weight: 600;
    width: 500px;
    /* padding: 20px 0; */
    text-align: center;
    color: orange;
    /* position: fixed; */
    /* background-color: white; */
    &.test {
      box-shadow: 0px 5px 5px -4px gray;
    }
  `,
  SubTitle: styled.h3`
    font-size: 16px;
    margin-top: 10px;
    text-align: center;
    color: #2b2b2b;
  `,
  TitleArea: styled.div`
    /* background-color: orange; */
    margin: 20px;
  `
};
