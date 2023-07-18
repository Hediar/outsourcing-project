import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import usePlaceData from '../../hook/usePlaceData';
const { kakao } = window;

const MainMap = ({ list, area, category }) => {
  const [map, setMap] = useState(null);

  const [filteredData] = usePlaceData(list, area, category);
  // console.log(filteredData);
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 8
    };
    const map = new kakao.maps.Map(container, options);

    setMap(map);
  }, []);

  return <S.Container id="map">MainMap</S.Container>;
};

export default MainMap;

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
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
