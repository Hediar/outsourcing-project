import React from 'react';
import { styled } from 'styled-components';

const Header = () => {
  return (
    <S.Header>
      <S.Logo src="" alt="logo" />
      <S.JejuLogo />
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
  `
};

export default Header;
