import React from 'react';
import { styled } from 'styled-components';
import DetailTab from './DetailTab';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailModalOn } from '../../redux/modules/modalSlice';

const DetailBox = () => {
  const { detailModalData } = useSelector((state) => state.detailModal);
  const dispatch = useDispatch();

  return (
    <>
      <S.DetailCloseBtn onClick={() => dispatch(setDetailModalOn(false))}>X</S.DetailCloseBtn>
      <S.DetailBoxContainer>
        <S.Title>{detailModalData.title}</S.Title>
        <S.Img src="https://blog.kakaocdn.net/dn/o1KIw/btqu9mflPY6/rGk1mM3iugV1c6jj9Z3E80/img.jpg" />
        <DetailTab />
      </S.DetailBoxContainer>
    </>
  );
};

export default DetailBox;

const S = {
  DetailBoxContainer: styled.div`
    width: 500px;
    height: 100vh;
    box-sizing: border-box;
    padding-top: 70px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    z-index: 1;
  `,
  DetailCloseBtn: styled.button`
    width: 50px;
    height: 50px;
    position: absolute;
    z-index: 2;
    left: 850px;
    top: 70px;
    background-color: white;
    border: none;
    cursor: pointer;
    font-size: 20px;
  `,
  ImgBox: styled.div`
    width: 400px;
    height: 200px;
    border-radius: 10px;
    margin: 80px 0 25px 0;
    overflow: hidden;
  `,
  Img: styled.img`
    width: 400px;
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
  DetailCloseBtn: styled.button`
    width: 50px;
    height: 50px;
    position: absolute;
    z-index: 2;
    left: 850px;
    top: 70px;
    background-color: white;
    border: none;
    cursor: pointer;
    font-size: 20px;
  `
};
