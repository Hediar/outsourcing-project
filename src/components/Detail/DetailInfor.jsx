import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { FaMapLocationDot, FaEarthAsia, FaClock, FaPhone, FaCircleInfo, FaSquareParking } from 'react-icons/fa6';
const DetailInfor = () => {
  const { detailModalData } = useSelector((state) => state.detailModal);

  return (
    <S.InfoBox>
      <S.InfoTitle>
        <FaMapLocationDot color="orange" size="20px" />
        <S.Title>주소</S.Title>
      </S.InfoTitle>
      <S.Info>{detailModalData.address}</S.Info>

      <S.InfoTitle>
        <FaClock color="orange" size="20px"></FaClock>
        <S.Title>운영시간</S.Title>
      </S.InfoTitle>
      <S.Info>{detailModalData.detail?.businessHours}</S.Info>
      <S.InfoTitle>
        <FaPhone color="orange" size="20px" />
        <S.Title>전화번호</S.Title>
      </S.InfoTitle>
      <S.Info>{detailModalData.detail?.tel}</S.Info>
      <S.InfoTitle>
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
      <S.InfoTitle>
        <FaSquareParking color="orange" size="20px" />
        <S.Title>주차여부</S.Title>
      </S.InfoTitle>
      <S.Info>{detailModalData.detail?.parking ? '가능' : '불가능'}</S.Info>
      <S.InfoTitle>
        <FaCircleInfo color="orange" size="20px" />
        <S.Title>소개</S.Title>
      </S.InfoTitle>
      <S.Info>{detailModalData.detail?.information}</S.Info>
      <S.InfoEmptyBox></S.InfoEmptyBox>
    </S.InfoBox>
  );
};

const S = {
  InfoBox: styled.div`
    /* width: 400px; */
    /* margin: 0px 20px;
    display: flex;
    flex-direction: column;
    padding: 10px 0; */
    /* overflow-y: scroll; */
    margin: 0 20px;
    height: calc(100vh - 385px);
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  `,

  Info: styled.p`
    font-size: 16px;
    text-align: center;
    margin-bottom: 15px;
    line-height: 1.8;
  `,
  InfoTitle: styled.h3`
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    margin: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
  `,
  Title: styled.div`
    /* line-height: 1; */
    color: orange;

    padding-top: 4px;
  `,
  InfoEmptyBox: styled.div`
    width: 100px;
    height: 100px;
  `
};

export default DetailInfor;
