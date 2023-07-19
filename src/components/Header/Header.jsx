import React from 'react';
import { styled } from 'styled-components';

const Header = ({ setArea }) => {
  const changeAreaButtonHandler = (selectedArea) => {
    setArea(selectedArea);
  };
  return (
    <S.Header>
      <S.Logo src="" alt="logo" />
      <S.JejuLogo />
      <S.SelectButtons>
        <button onClick={() => changeAreaButtonHandler('전체')}>전체</button>
        <button onClick={() => changeAreaButtonHandler('조천')}>조천</button>
        <button onClick={() => changeAreaButtonHandler('애월')}>애월</button>
        <button onClick={() => changeAreaButtonHandler('안덕')}>안덕</button>
      </S.SelectButtons>
    </S.Header>
  );
};

const S = {
  Header: styled.header`
    width: 100%;
    background-color: aliceblue;
    position: fixed;
    height: 70px;
    z-index: 99;
    box-sizing: border-box;
  `,
  Logo: styled.img`
    position: fixed;
    left: 50%;
    top: 35px;
    transform: translate(-50%, -50%);
  `,
  JejuLogo: styled.div`
    position: absolute;
    left: 20%;
    /* transform: translateY(-50%); */
    width: 100px;
    height: 70px;
    background-image: url('https://w7.pngwing.com/pngs/952/1002/png-transparent-jeju-city-provinces-of-south-korea-cheongju-korea-strait-jeolla-province-yes-miscellaneous-text-city.png');
    background-size: cover;
    background-position: center;
  `,
  SelectButtons: styled.div`
    position: absolute;
    right: 20%;
    width: 100px;
    height: 70px;
  `
};

export default Header;
