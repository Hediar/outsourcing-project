import React from 'react';
import { useSelector } from 'react-redux';
import { S } from './DetailStyled';
import { FaMapLocationDot, FaEarthAsia, FaClock, FaPhone, FaCircleInfo, FaSquareParking } from 'react-icons/fa6';
const DetailInfor = () => {
  const { detailModalData } = useSelector((state) => state.detailModal);

  return (
    <S.InfoBox>
      <S.InfoTitle as="h3">
        <FaMapLocationDot color="orange" size="20px" />
        <S.Title>주소</S.Title>
      </S.InfoTitle>
      <S.Info>{detailModalData.address}</S.Info>

      <S.InfoTitle as="h3">
        <FaClock color="orange" size="20px"></FaClock>
        <S.Title>운영시간</S.Title>
      </S.InfoTitle>
      <S.Info>{detailModalData.detail?.businessHours}</S.Info>
      <S.InfoTitle as="h3">
        <FaPhone color="orange" size="20px" />
        <S.Title>전화번호</S.Title>
      </S.InfoTitle>
      <S.Info>{detailModalData.detail?.tel}</S.Info>
      <S.InfoTitle as="h3">
        <FaEarthAsia color="orange" size="20px" />
        <S.Title>홈페이지</S.Title>
      </S.InfoTitle>
      <S.Info>
        {detailModalData.detail?.Link == '홈페이지 정보 없음' ? (
          detailModalData.detail?.Link
        ) : (
          <a href={detailModalData.detail?.Link}>{detailModalData.detail?.Link}</a>
        )}
      </S.Info>
      <S.InfoTitle as="h3">
        <FaSquareParking color="orange" size="20px" />
        <S.Title>주차여부</S.Title>
      </S.InfoTitle>
      <S.Info>{detailModalData.detail?.parking ? '가능' : '불가능'}</S.Info>
      <S.InfoTitle as="h3">
        <FaCircleInfo color="orange" size="20px" />
        <S.Title>소개</S.Title>
      </S.InfoTitle>
      <S.Info>{detailModalData.detail?.information}</S.Info>
      <S.InfoEmptyBox></S.InfoEmptyBox>
    </S.InfoBox>
  );
};

export default DetailInfor;
