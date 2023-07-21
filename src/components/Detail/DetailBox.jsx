import React, { useEffect, useRef } from 'react';
import DetailTab from './DetailTab';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailModalOn } from '../../redux/modules/modalSlice';
import { gsap } from 'gsap';
import { MdRestaurant, MdCoffee, MdFlag } from 'react-icons/md';
import { S } from './DetailStyled';

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
            <S.Img $image={detailModalData.detail?.imageURL} />
            <S.TitleArea>
              <S.PlaceTitle>{detailModalData.title}</S.PlaceTitle>
              <S.SubTitleArea>
                <S.SubTitle>{CategoryIcon(detailModalData.category)}</S.SubTitle>
              </S.SubTitleArea>
            </S.TitleArea>
          </S.DetailInfoBox>

          <DetailTab />
        </S.DetailBoxContainer>
      </S.MotionBox>
    </>
  );
};

export default DetailBox;
