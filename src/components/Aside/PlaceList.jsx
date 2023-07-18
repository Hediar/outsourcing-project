import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import usePlaceData from '../../hook/usePlaceData';

const PlaceList = ({ list, area, category }) => {
  const [filteredData] = usePlaceData(list, area, category);

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
