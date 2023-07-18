import React from 'react';
import Header from '../components/Header/Header';
import { styled } from 'styled-components';
import SelectComp from '../components/Aside/SelectComp';
import PlaceList from '../components/Aside/PlaceList';

const Main = () => {
  return (
    <>
      <Header />
      <S.Aside>
        <S.WelcomeMessage>혼자옵서예 ~ 🍊</S.WelcomeMessage>
        <SelectComp />
        <PlaceList />
      </S.Aside>
      <div id="map"></div>
    </>
  );
};

const S = {
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

export default Main;
