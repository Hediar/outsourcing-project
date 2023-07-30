import React, { useState } from 'react';
import usePlaceData from '../../hook/usePlaceData';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailModalData, setDetailModalOn } from '../../redux/modules/modalSlice';
import { S } from './AsideStyled';
import { makeNewMap, makeNewMarker } from '../MainMap/MapFunction';
const { kakao } = window;

const PlaceList = ({ list, area, category, setArea }) => {
  const [filteredData] = usePlaceData(list, area, category);

  const dispatch = useDispatch();
  const modalTitle = useSelector((state) => state.detailModal.detailModalData.title);
  const modalState = useSelector((state) => state.detailModal.detailModalOn);

  const openModal = (item) => {
    dispatch(setDetailModalData(item));
    dispatch(setDetailModalOn(true));
  };

  const listOnclickHandler = (item) => {
    openModal(item);
    const map = makeNewMap();
    const marker = makeNewMarker(map, item.title, item.address);
    marker.then((mark) => {
      kakao.maps.event.addListener(mark, 'click', function () {
        openModal(item);
      });
    });
  };

  return (
    <S.ListBox>
      {filteredData?.map((item) => {
        return (
          <S.ListItem
            key={item.id}
            onClick={() => {
              listOnclickHandler(item);
            }}
            img={item.detail.imageURL}
            isSelected={item.title === modalTitle && modalState}
          >
            <S.ListTitle isSelected={item.title === modalTitle && modalState}>{item.title}</S.ListTitle>
          </S.ListItem>
        );
      })}
      <S.ListEmptyBox></S.ListEmptyBox>
    </S.ListBox>
  );
};

export default PlaceList;
