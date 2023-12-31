const { kakao } = window;

const makeNewMap = () => {
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(33.3577838, 126.4624306),
    level: 9
  };
  const map = new kakao.maps.Map(container, options);
  return map;
};

const addressToCoords = (address) => {
  return new Promise((resolve) => {
    const geocoder = new kakao.maps.services.Geocoder();

    const callback = (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        resolve(coords);
      }
    };
    geocoder.addressSearch(address, callback);
  });
};

const makeNewMarker = async (map, title, address) => {
  const coords = await addressToCoords(address);

  const imageSrc = 'https://ifh.cc/g/KPoAgp.png',
    imageSize = new kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
    imageOption = { offset: new kakao.maps.Point(20, 40) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
  const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

  const marker = new kakao.maps.Marker({
    position: coords,
    image: markerImage
  });
  marker.setMap(map);

  kakao.maps.event.addListener(marker, 'click', function () {
    // 레벨 설정 및 좌표 중심으로 이동
    map.setLevel(3);
    map.setCenter(coords);
  });
  map.setLevel(3);
  map.setCenter(coords);
  const content =
    `<div class="customoverlay" style="color:orange; border: 1px solid orange; background-color:white; padding: 8px; border-radius: 30px; margin-top:-75px; 
      ">` +
    title +
    ` </div>`;

  // 커스텀 오버레이가 표시될 위치입니다

  const customOverlay = new kakao.maps.CustomOverlay({
    position: coords,
    content: content
  });

  customOverlay.setMap(map);
  return marker;
};

export { makeNewMap, addressToCoords, makeNewMarker };
