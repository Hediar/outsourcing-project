import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import DetailTab from './DetailTab';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailModalOn } from '../../redux/modules/modalSlice';
import { gsap } from 'gsap';

const DetailBox = () => {
  const boxRef = useRef(null);
  const { detailModalData } = useSelector((state) => state.detailModal);
  const dispatch = useDispatch();
  useEffect(() => {
    gsap.from(boxRef.current, 0.3, { transform: 'translateX(-500px)', delay: 0, ease: 'ease' });
  }, []);

  return (
    <>
      <S.MotionBox ref={boxRef}>
        <S.DetailCloseBtn onClick={() => dispatch(setDetailModalOn(false))}>X</S.DetailCloseBtn>
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
    </>
  );
};

export default DetailBox;

const S = {
  MotionBox: styled.div`
    left: 350px;
    position: fixed;
    background-color: white;
    z-index: 2;
  `,
  DetailInfoBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  DetailTabBox: styled.div``,

  DetailBoxContainer: styled.div`
    width: 500px;
    height: calc(100vh - 70px);
    box-sizing: border-box;
    margin-top: 70px;
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
    left: 520px;
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
  `,
  Title: styled.h3`
    font-size: 32px;
    font-weight: 600;
    width: 500px;
    text-align: center;
    color: orange;
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
    margin: 20px;
  `
};
