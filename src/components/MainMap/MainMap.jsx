import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import usePlaceData from '../../hook/usePlaceData';

const { kakao } = window;

const MainMap = ({ list, area, category }) => {
  const [map, setMap] = useState(null);
  const [filteredData] = usePlaceData(list, area, category);

  useEffect(() => {
    // console.log(filteredData);
    if (area === '전체' && category === '전체') {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(33.3577838, 126.4624306),
        level: 9
      };
      const map = new kakao.maps.Map(container, options);

      setMap(map);
    } else {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(33.346913, 125.1354225),
        level: 8
      };
      const map = new kakao.maps.Map(container, options);

      setMap(map);

      const geocoder = new kakao.maps.services.Geocoder();
      // const data = filteredData.map(())
      var bounds = new kakao.maps.LatLngBounds(); //추가한 코드

      filteredData.forEach(function (position) {
        //추가한 코드
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(position.address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
              map: map,
              position: coords
            });
            marker.setMap(map); //추가한 코드

            // LatLngBounds 객체에 좌표를 추가합니다
            bounds.extend(coords); //추가한 코드, 현재 코드에서 좌표정보는 point[i]가 아닌 coords이다.

            //변경한 코드
            var infowindow = new kakao.maps.InfoWindow({
              content: '<div style="width:150px;text-align:center;padding:6px 0;">' + position.title + '</div>'
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
            setBounds();
          }
        });
      });
      function setBounds() {
        //추가한 함수
        // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
        // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
        map.setBounds(bounds);
      }
    }
  }, [filteredData]);

  return <S.Container id="map"></S.Container>;
};

export default MainMap;

const S = {
  Container: styled.div`
    margin-top: 70px;
    width: 100%;
    height: calc(100vh - 70px);
    background-color: royalblue;
    display: flex;
  `,
  WelcomeMessage: styled.p`
    font-size: 2em;
    font-weight: bold;
    margin: 20px 0;
  `,
  Aside: styled.aside`
    padding-top: 5%;
    width: 350px;
    background-color: #e5871a;
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
};
