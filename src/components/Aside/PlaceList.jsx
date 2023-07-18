import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { useQuery } from 'react-query';
import { getPlaceList } from '../../api/placeList';
import usePlaceData from '../../hook/usePlaceData';

const PlaceList = ({ list, area, category }) => {
  const [filteredData] = usePlaceData(list, area, category);

  // //이걸로 훅을 맹글어 버리면..?
  // const [dataList, setDataList] = useState([]);

  // const filterTour = (data) => {
  //   // 멍청아...제발...ㅠㅠ
  //   const a = data.filter((item) => {
  //     // console.log(item);
  //     if (category === '관광지') {
  //       // console.log(item);
  //       return item.category === 'tourSpot';
  //     } else if (category === '카페') {
  //       return item.category === 'cafe';
  //     } else if (category === '식당') {
  //       return item.category === 'restaurant';
  //     } else {
  //       return item;
  //     }
  //   });
  //   // console.log(a);
  //   return a;
  // };

  // useEffect(() => {
  //   const andeok = list.filter((item) => {
  //     return item.areaid === 'Andeok';
  //   });
  //   const jocheon = list.filter((item) => {
  //     return item.areaid === 'Jocheon';
  //   });
  //   const aewol = list.filter((item) => {
  //     return item.areaid === 'Aewol';
  //   });
  //   if (area === '조천') {
  //     setDataList(filterTour(jocheon));
  //   } else if (area === '애월') {
  //     setDataList(filterTour(aewol));
  //   } else if (area === '안덕') {
  //     setDataList(filterTour(andeok));
  //   } else {
  //     setDataList(filterTour(list));
  //   }
  // }, [area, category]);

  return (
    <S.ListBox>
      {filteredData?.map((item) => {
        return <S.ListItem key={item.id}>{item.title}</S.ListItem>;
      })}
    </S.ListBox>
  );
};

const S = {
  ListBox: styled.ul`
    width: 80%;
    margin-top: 10px;
    box-sizing: border-box;
  `,
  ListItem: styled.li`
    margin: 20px 0;
    cursor: pointer;
    transition: 0.5s;
    border-bottom: 1px solid white;
    padding: 10px;
    &:hover {
      font-weight: bold;
    }
  `
};

export default PlaceList;
