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
        <S.ButtonStyle onClick={(e) => changeAreaButtonHandler(e.target.innerText)}>전체</S.ButtonStyle>
        <S.ButtonStyle onClick={(e) => changeAreaButtonHandler(e.target.innerText)}>조천</S.ButtonStyle>
        <S.ButtonStyle onClick={(e) => changeAreaButtonHandler(e.target.innerText)}>애월</S.ButtonStyle>
        <S.ButtonStyle onClick={(e) => changeAreaButtonHandler(e.target.innerText)}>안덕</S.ButtonStyle>
      </S.SelectButtons>
    </S.Header>
  );
};

const S = {
  Header: styled.header`
    width: 100vw;
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
    width: 100px;
    height: 70px;
    background-image: url('https://w7.pngwing.com/pngs/952/1002/png-transparent-jeju-city-provinces-of-south-korea-cheongju-korea-strait-jeolla-province-yes-miscellaneous-text-city.png');
    background-size: cover;
    background-position: center;
  `,
  SelectButtons: styled.div`
    display: flex;
    position: absolute;
    right: 3%;
    top: 20%;
  `,
  ButtonStyle: styled.button`
    cursor: pointer;
    border: none;
    background-color: #d8e6e7;
    width: 80px;
    height: 30px;
    margin: 6px;
    &:active {
      background-color: #b9c5c6;
    }
  `
};

export default Header;
