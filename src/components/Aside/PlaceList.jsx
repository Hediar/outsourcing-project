import React from 'react';
import { styled } from 'styled-components';
import usePlaceData from '../../hook/usePlaceData';
import { useDispatch } from 'react-redux';
import { setDetailModalData, setDetailModalOn } from '../../redux/modules/modalSlice';
import { makeNewMap } from '../MainMap/MainMap';
const { kakao } = window;

const PlaceList = ({ list, area, category }) => {
  const [filteredData] = usePlaceData(list, area, category);

  const dispatch = useDispatch();

  const listOnclickHandler = (item) => {
    dispatch(setDetailModalData(item));
    dispatch(setDetailModalOn(true));

    const map = makeNewMap();

    const geocoder = new kakao.maps.services.Geocoder();
    const callback = (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        //마커 이미지 생성
        const imageSrc = 'https://ifh.cc/g/KPoAgp.png', // 마커이미지의 주소입니다
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
          item.title +
          ` </div>`;

        // 커스텀 오버레이가 표시될 위치입니다

        const customOverlay = new kakao.maps.CustomOverlay({
          position: coords,
          content: content
        });

        customOverlay.setMap(map);
      }
    };
    geocoder.addressSearch(item.address, callback);
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

const S = {
  ListBox: styled.div`
    width: 100%;
    margin-top: 10px;
    box-sizing: border-box;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  ListTitle: styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 0;
    position: relative;
    &:hover {
      font-weight: 700;
      color: white;
    }
  `,
  ListItem: styled.div`
    display: block;
    margin: 20px 40px;
    border: 1px solid orange;
    font-size: 18px;
    background-color: white;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      font-weight: bold;
      transform: scale(1.1);
      color: white;
      box-shadow: 0px 3px 3px 2px rgba(0, 0, 0, 0.1);
      position: relative;
      background-image: url(${(props) => props.img});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      &::before {
        content: '';
        background-color: rgba(255, 165, 0, 1);
        opacity: 0.9;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
      }
    }
    &:active {
      transform: scale(1);
    }
  `,
  ListEmptyBox: styled.div`
    height: 100px;
    width: 100px;
  `
};

export default PlaceList;
