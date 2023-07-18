import React, { useEffect, useState } from 'react';
const { kakao } = window;

function Map() {
  const [map, setMap] = useState(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 7
    };
    const map = new kakao.maps.Map(container, options);

    // const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    // const marker = new kakao.maps.Marker({
    //   position: markerPosition
    // });
    // marker.setMap(map);
    // const geocoder = new kakao.maps.services.Geocoder();

    // const callback = function (result, status) {
    //   if (status === kakao.maps.services.Status.OK) {
    //     console.log('주소', result[0]);
    //     setX(result[0].x);
    //     setY(result[0].y);
    //   }
    // };
    // console.log(x, y);

    // geocoder.addressSearch('제주특별자치도 서귀포시 안덕면 사계남로84번길 4 1층', callback);

    setMap(map);
  }, []);

  return (
    <div>
      Map
      <div id="map" style={{ width: '500px', height: '400px' }}></div>
    </div>
  );
}

export default Map;
