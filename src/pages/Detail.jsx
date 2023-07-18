import React from 'react';
import DetailBox from '../components/Detail/DetailBox';
import Header from '../components/Header/Header';
import SelectComp from '../components/Aside/SelectComp';
import PlaceList from '../components/Aside/PlaceList';
import { styled } from 'styled-components';
import DetailMap from '../components/Detail/DetailMap';

function Detail() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Header />
      <S.AsideContainer>
        <S.Aside>
          <S.WelcomeMessage>혼자옵서예 ~ 🍊</S.WelcomeMessage>
          <SelectComp />
          <PlaceList />
        </S.Aside>
        <DetailBox />
        <DetailMap />
      </S.AsideContainer>
    </div>
  );
}

export default Detail;

const S = {
  WelcomeMessage: styled.p`
    font-size: 2em;
    font-weight: bold;
    margin: 20px 0;
  `,
  AsideContainer: styled.div`
    display: flex;
    background-color: green;
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
    z-index: 1;
  `
};
