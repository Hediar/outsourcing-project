import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import usePlaceData from '../../hook/usePlaceData';
import { useDispatch } from 'react-redux';
import { setDetailModalData, setDetailModalOn } from '../../redux/modules/modalSlice';

const { kakao } = window;

export const makeNewMap = () => {
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(33.3577838, 126.4624306),
    level: 9
  };
  const map = new kakao.maps.Map(container, options);
  return map;
};

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
      const geocoder = new kakao.maps.services.Geocoder();
      // const data = filteredData.map(())
      const bounds = new kakao.maps.LatLngBounds(); //추가한 코드

      filteredData.forEach(function (position) {
        //추가한 코드
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(position.address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            const markerPosition = new kakao.maps.LatLng(result[0].y, result[0].x);

            //마커 이미지 생성
            const imageSrc = 'https://ifh.cc/g/KPoAgp.png', // 마커이미지의 주소입니다
              imageSize = new kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
              imageOption = { offset: new kakao.maps.Point(20, 40) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

            // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
            const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new kakao.maps.Marker({
              position: markerPosition,
              image: markerImage
            });
            marker.setMap(map); //추가한 코드

            /**
             * marker 클릭 이벤트
             */
            kakao.maps.event.addListener(marker, 'click', function () {
              listOnclickHandler(position);
              map.setCenter(markerPosition);
            });

            // LatLngBounds 객체에 좌표를 추가합니다
            bounds.extend(markerPosition); //추가한 코드, 현재 코드에서 좌표정보는 point[i]가 아닌 markerPosition이다.

            const content =
              `<div class="customoverlay" style="color:orange; border: 1px solid orange; background-color:white; padding: 8px; border-radius: 30px; margin-top:-75px; 
            ">` +
              position.title +
              ` </div>`;

            // 커스텀 오버레이가 표시될 위치입니다

            const customOverlay = new kakao.maps.CustomOverlay({
              position: markerPosition,
              content: content
            });

            customOverlay.setMap(map);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(markerPosition);
            setBounds();
          }
        });
      });
      const setBounds = () => {
        //추가한 함수
        // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
        // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
        map.setBounds(bounds);
      };
    }
  }, [filteredData]);

  return <S.Container id="map"></S.Container>;
};

export default MainMap;

const S = {
  Container: styled.div`
    margin-top: 70px;
    width: calc(100vw - 350px);
    height: calc(100vh - 70px);
    /* background-color: royalblue; */
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
