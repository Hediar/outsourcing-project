import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
const { kakao } = window;

const DetailMap = () => {
  const [map, setMap] = useState(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const findCoordinates = () => {
    const geocoder = new kakao.maps.services.Geocoder();

    const callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        console.log('주소', result[0]);
        setX(result[0].x);
        setY(result[0].y);
      }
    };
    geocoder.addressSearch('제주특별자치도 서귀포시 안덕면 사계남로84번길 4 1층', callback);
  };

  useEffect(() => {
    // 좌표 찾기
    findCoordinates();

    // map 세팅하기
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(y, x),
      level: 2
    };
    const map = new kakao.maps.Map(container, options);

    // 마커 표시하기
    const markerPosition = new kakao.maps.LatLng(y, x);
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);

    setMap(map);
    console.log(x, y);
  }, [x, y]);

  return <S.BackMap id="map"></S.BackMap>;
};

export default DetailMap;

const S = {
  BackMap: styled.div`
    width: 70%;
    height: 100%;
    position: absolute;
    right: 0;
    z-index: 0;
  `
};
