import React from 'react';
import Weather from './Weather';
import { S } from './HeaderStyled';
import { useDispatch } from 'react-redux';
import { setDetailModalOn, setWeatherModalOn } from '../../redux/modules/modalSlice';

const Header = ({ setArea }) => {
  const changeAreaButtonHandler = (selectedArea) => {
    setArea(selectedArea);
  };

  const dispatch = useDispatch();

  const logoOnclickHandler = () => {
    dispatch(setDetailModalOn(false));
    dispatch(setWeatherModalOn(false));
    setArea('전체');
    //window.location.reload();
  };

  return (
    <S.Header>
      <S.Logo onClick={logoOnclickHandler} />
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
