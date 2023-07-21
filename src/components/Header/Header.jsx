import React from 'react';
import Weather from './Weather';
import { S } from './HeaderStyled';

const Header = ({ setArea }) => {
  const changeAreaButtonHandler = (selectedArea) => {
    setArea(selectedArea);
  };
  return (
    <S.Header>
      <S.Logo />
      <Weather />
      <S.SelectButtons>
        <S.ButtonStyle onClick={(e) => changeAreaButtonHandler(e.target.innerText)}>전체</S.ButtonStyle>
        <S.ButtonStyle onClick={(e) => changeAreaButtonHandler(e.target.innerText)}>조천</S.ButtonStyle>
        <S.ButtonStyle onClick={(e) => changeAreaButtonHandler(e.target.innerText)}>애월</S.ButtonStyle>
        <S.ButtonStyle onClick={(e) => changeAreaButtonHandler(e.target.innerText)}>안덕</S.ButtonStyle>
      </S.SelectButtons>
    </S.Header>
  );
};

export default Header;
