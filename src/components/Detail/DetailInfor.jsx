import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

const DetailInfor = () => {
  const { detailModalData } = useSelector((state) => state.detailModal);

  return (
    <S.InfoBox>
      <S.InfoTitle>상세정보 설명</S.InfoTitle>
      <S.Info>{detailModalData.detail?.information}</S.Info>
      <S.InfoTitle>주소</S.InfoTitle>
      <S.Info>{detailModalData.address}</S.Info>
      <S.InfoTitle>운영시간</S.InfoTitle>
      <S.Info>{detailModalData.detail?.businessHours}</S.Info>
      <S.InfoTitle>전화번호</S.InfoTitle>
      <S.Info>{detailModalData.detail?.tel}</S.Info>
      <S.InfoTitle>홈페이지</S.InfoTitle>
      <S.Info>{detailModalData.detail?.Link}</S.Info>
      <S.InfoTitle>주차여부</S.InfoTitle>
      <S.Info>{detailModalData.detail?.parking}</S.Info>
    </S.InfoBox>
  );
};

const S = {
  InfoBox: styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
  `,

  Info: styled.p`
    font-size: 16px;
    text-align: left;
    margin: 5px;
  `,
  InfoTitle: styled.h3`
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    margin: 5px;
  `
};

export default DetailInfor;
