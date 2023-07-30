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
import WeatherModal from '../components/Header/WeatherModal';
import Loading from '../components/Loading/Loading';

const Main = () => {
  const [area, setArea] = useState('전체');
  const [category, setCategory] = useState('전체');

  const { data, isLoading, isError } = useQuery('placeList', getPlaceList, {
    staleTime: Infinity
  });

  const { detailModalOn, weatherModalOn } = useSelector((state) => state.detailModal);

  if (isLoading) {
    return <Loading />;
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
            <S.WelcomeMessage>제주 핫플을 찾아봐유 ~ 🍊</S.WelcomeMessage>
            <SelectComp area={area} setArea={setArea} category={category} setCategory={setCategory} />
            <PlaceList list={data} area={area} category={category} setArea={setArea} />
          </S.Aside>
          {detailModalOn ? <DetailBox /> : null}
        </S.AsideContainer>
        {weatherModalOn ? <WeatherModal /> : null}
        <MainMap list={data} area={area} category={category}></MainMap>
      </S.Container>
    </>
  );
};

const S = {
  Container: styled.div`
    height: calc(100vh - 70px);
    display: flex;
    width: 100vw;
  `,
  WelcomeMessage: styled.p`
    font-size: 24px;
    font-weight: 700;
    margin: 20px 0;
    color: orange;
  `,
  AsideContainer: styled.div`
    display: flex;
  `,
  Aside: styled.aside`
    margin-top: 70px;
    width: 350px;
    background-color: white;
    box-sizing: border-box;
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
    box-shadow: 1px 0px 10px 0px rgba(0, 0, 0, 0.2);
  `
};

export default Main;
