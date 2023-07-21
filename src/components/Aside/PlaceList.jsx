import React from 'react';
import usePlaceData from '../../hook/usePlaceData';
import { useDispatch } from 'react-redux';
import { setDetailModalData, setDetailModalOn } from '../../redux/modules/modalSlice';
import { S } from './AsideStyled';
import { makeNewMap, makeNewMarker } from '../MainMap/MapFunction';
const { kakao } = window;

const PlaceList = ({ list, area, category, setArea }) => {
  const [filteredData] = usePlaceData(list, area, category);

  const dispatch = useDispatch();

  const openModal = (item) => {
    dispatch(setDetailModalData(item));
    dispatch(setDetailModalOn(true));
  };

  const listOnclickHandler = (item) => {
    openModal(item);
    if (item.areaId === 'Aewol') {
      setArea('애월');
    } else if (item.areaId === 'Andeok') {
      setArea('안덕');
    } else {
      setArea('조천');
    }

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
          <S.ListItem key={item.id} onClick={() => listOnclickHandler(item)} img={item.detail.imageURL}>
            <S.ListTitle>{item.title}</S.ListTitle>
          </S.ListItem>
        );
      })}
      <S.ListEmptyBox></S.ListEmptyBox>
    </S.ListBox>
  );
};

export default PlaceList;
