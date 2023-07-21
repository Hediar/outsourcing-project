import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import DetailTab from './DetailTab';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailModalOn } from '../../redux/modules/modalSlice';
import { gsap } from 'gsap';
import { MdRestaurant, MdCoffee, MdFlag } from 'react-icons/md';

const DetailBox = () => {
  const boxRef = useRef(null);
  const { detailModalData } = useSelector((state) => state.detailModal);
  const dispatch = useDispatch();
  useEffect(() => {
    gsap.from(boxRef.current, 0.3, { transform: 'translateX(-500px)', delay: 0, ease: 'ease' });
  }, []);

  const CloseModal = async () => {
    await gsap.to(boxRef.current, 0.3, { transform: 'translateX(-500px)', delay: 0, ease: 'ease' });
    dispatch(setDetailModalOn(false));
  };

  const CategoryIcon = (item) => {
    switch (item) {
      case 'restaurant':
        return (
          <>
            <MdRestaurant color="white" />
            <S.SubTitleText>RESTAURANT</S.SubTitleText>
            <MdRestaurant color="white" />
          </>
        );
      case 'tourSpot':
        return (
          <>
            <MdFlag color="white" />
            <S.SubTitleText>TOUR SPOT</S.SubTitleText>
            <MdFlag color="white" />
          </>
        );
      default:
        return (
          <>
            <MdCoffee color="white" />
            <S.SubTitleText>CAFE</S.SubTitleText>
            <MdCoffee color="white" />
          </>
        );
    }
  };

  return (
    <>
      <S.MotionBox ref={boxRef}>
        <S.DetailCloseBtn onClick={CloseModal}>X</S.DetailCloseBtn>
        <S.DetailBoxContainer>
          <S.DetailInfoBox>
            <S.Img image={detailModalData.detail.imageURL} />
            <S.TitleArea>
              <S.Title>{detailModalData.title}</S.Title>
              <S.SubTitleArea>
                <S.SubTitle>{CategoryIcon(detailModalData.category)}</S.SubTitle>
              </S.SubTitleArea>
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
    width: 430px;
    height: 250px;
    background-image: url(${(props) => props.image});
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
  SubTitleArea: styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: center;
    color: white;
  `,
  SubTitle: styled.div`
    border-radius: 20px;
    background-color: orange;
    display: flex;
    gap: 5px;
    padding: 5px 10px 5px 10px;
  `,
  SubTitleText: styled.h3`
    font-size: 16px;
    color: white;
  `,
  TitleArea: styled.div`
    margin: 20px;
  `
};
