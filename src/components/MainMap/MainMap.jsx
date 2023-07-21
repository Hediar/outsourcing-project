import React, { useEffect, useState } from 'react';
import usePlaceData from '../../hook/usePlaceData';
import { useDispatch } from 'react-redux';
import { setDetailModalData, setDetailModalOn } from '../../redux/modules/modalSlice';
import { S } from './MainMapStyled';
import { addressToCoords, makeNewMap, makeNewMarker } from './MapFunction';

const { kakao } = window;

const MainMap = ({ list, area, category }) => {
  const [map, setMap] = useState(null);
  const [filteredData] = usePlaceData(list, area, category);
  const dispatch = useDispatch();

  const listOnclickHandler = (item) => {
    dispatch(setDetailModalData(item));
    dispatch(setDetailModalOn(true));
  };

  useEffect(() => {
    const map = makeNewMap();
    setMap(map);

    if (area === '전체' && category === '전체') {
    } else {
      const bounds = new kakao.maps.LatLngBounds();

      filteredData.forEach((position) => {
        const marker = makeNewMarker(map, position.title, position.address);
        marker.then((item) => {
          kakao.maps.event.addListener(item, 'click', function () {
            listOnclickHandler(position);
          });
        });

        addressToCoords(position.address).then((coords) => {
          bounds.extend(coords);
          map.setBounds(bounds);
        });
      });
    }
  }, [filteredData]);

  return <S.Container id="map"></S.Container>;
};

export default MainMap;
