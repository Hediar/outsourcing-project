import React from 'react';
import { styled } from 'styled-components';

const PlaceList = () => {
  return (
    <S.ListBox>
      <S.ListItem>장소1</S.ListItem>
      <S.ListItem>장소2</S.ListItem>
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
