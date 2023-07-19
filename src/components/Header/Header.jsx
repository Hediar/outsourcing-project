import React from 'react';
import { styled } from 'styled-components';
import Weather from './Weather';

const Header = () => {
  return (
    <S.Header>
      <S.Logo src="" alt="logo" />
      <S.ContentBox>
        <S.JejuLogo />
        <Weather />
      </S.ContentBox>
    </S.Header>
  );
};

const S = {
  Header: styled.header`
    width: 100%;
    background-color: royalblue;
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
    /* position: absolute;
    left: 20%; */
    width: 100px;
    height: 70px;
    background-image: url('https://w7.pngwing.com/pngs/952/1002/png-transparent-jeju-city-provinces-of-south-korea-cheongju-korea-strait-jeolla-province-yes-miscellaneous-text-city.png');
    background-size: cover;
    background-position: center;
  `,
  ContentBox: styled.div`
    margin: 0 auto;
    width: 1400px;
    display: flex;
    justify-content: space-between;
  `
};

export default Header;
