import React, { useState } from 'react';
import { styled } from 'styled-components';
import SelectComp from '../components/Aside/SelectComp';
import PlaceList from '../components/Aside/PlaceList';
import { useQuery } from 'react-query';
import { getPlaceList } from '../api/jejuHotPlace';
import MainMap from '../components/MainMap/MainMap';
import DetailBox from '../components/Detail/DetailBox';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';

const Main = () => {
  const [area, setArea] = useState('전체');
  const [category, setCategory] = useState('전체');

  const { data, isLoading, isError } = useQuery('placeList', getPlaceList);
  const { detailModalOn } = useSelector((state) => state).detailModal;

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (isError) {
    return <div>에러남</div>;
  }

  return (
    <>
      <Header setArea={setArea} />
      <S.Container>
        <S.AsideContainer>
          <S.Aside>
            <S.WelcomeMessage>혼저옵서예 ~ 🍊</S.WelcomeMessage>
            <SelectComp area={area} setArea={setArea} category={category} setCategory={setCategory} />
            <PlaceList list={data} area={area} category={category} />
          </S.Aside>
          {detailModalOn ? <DetailBox /> : null}
        </S.AsideContainer>
        <MainMap list={data} area={area} category={category}></MainMap>
      </S.Container>
    </>
  );
};

const S = {
  Container: styled.div`
    width: 100vw;
    height: calc(100vh - 70px);
    display: flex;
  `,
  WelcomeMessage: styled.p`
    font-size: 2em;
    font-weight: bold;
    margin: 20px 0;
  `,
  AsideContainer: styled.div`
    display: flex;
  `,
  Aside: styled.aside`
    /* padding-top: 5%; */
    margin-top: 70px;
    width: 350px;
    background-color: #ffa500;
    box-sizing: border-box;
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
  `
};

export default Main;
