import React, { useEffect, useState } from 'react';
const { kakao } = window;

function Map() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
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
