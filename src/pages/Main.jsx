import React, { useState } from 'react';
import { styled } from 'styled-components';
import SelectComp from '../components/Aside/SelectComp';
import PlaceList from '../components/Aside/PlaceList';
import { useQuery } from 'react-query';
import { getPlaceList } from '../api/jejuHotPlace';
import MainMap from '../components/MainMap/MainMap';

const Main = () => {
  const [area, setArea] = useState('전체');
  const [category, setCategory] = useState('전체');

  const { data, isLoading, isError } = useQuery('placeList', getPlaceList);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (isError) {
    return <div>에러남</div>;
  }

  return (
    <S.Container>
      <S.Aside>
        <S.WelcomeMessage>혼자옵서예 ~ 🍊</S.WelcomeMessage>
        <SelectComp area={area} setArea={setArea} category={category} setCategory={setCategory} />
        <PlaceList list={data} area={area} category={category} />
      </S.Aside>
      <MainMap list={data} area={area} category={category}></MainMap>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
  `,
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
