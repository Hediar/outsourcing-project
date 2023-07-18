import React, { useEffect, useState } from 'react';
const { kakao } = window;

function Map() {
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
      level: 3
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

  return (
    <div>
      Map
      <div id="map" style={{ width: '500px', height: '400px' }}></div>
    </div>
  );
}

export default Map;
