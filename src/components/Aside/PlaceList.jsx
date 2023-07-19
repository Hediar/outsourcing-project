import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import usePlaceData from '../../hook/usePlaceData';
import { useDispatch } from 'react-redux';
import { setDetailModalData, setDetailModalOn } from '../../redux/modules/modalSlice';

const PlaceList = ({ list, area, category }) => {
  const [filteredData] = usePlaceData(list, area, category);
  const dispatch = useDispatch();

  const listOnclickHandler = (item) => {
    dispatch(setDetailModalData(item));
    dispatch(setDetailModalOn(true));
  };

  return (
    <S.ListBox>
      {filteredData?.map((item) => {
        return (
          <S.ListItem key={item.id} onClick={() => listOnclickHandler(item)}>
            {item.title}
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
  ListItem: styled.div`
    display: block;
    margin: 20px 40px;
    font-size: 18px;
    background-color: white;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 20px;
    padding: 30px 0;
    &:hover {
      font-weight: bold;
      transform: scale(1.1);
      background-color: #ffa500;
      color: white;
      /* margin: 20px 0; */
      box-shadow: 0px 3px 3px 2px rgba(0, 0, 0, 0.1);
      margin: 30px 40px;
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
