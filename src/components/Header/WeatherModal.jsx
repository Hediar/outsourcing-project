import React, { useEffect, useRef } from 'react';
import { get5DaysOfWeather } from '../../api/weather';
import { useQuery } from 'react-query';
import { gsap } from 'gsap';
import { css, styled } from 'styled-components';
import Loading from '../Loading/Loading';
import { useDispatch } from 'react-redux';
import { setWeatherModalOn } from '../../redux/modules/modalSlice';

const WeatherModal = () => {
  const boxRef = useRef(null);
  const dispatch = useDispatch();

  const { data, isError, isLoading } = useQuery('5DaysOfWeather', get5DaysOfWeather);

  const CloseModal = async () => {
    await gsap.to(boxRef.current, 0.3, { transform: 'translateY(-500px)', delay: 0, ease: 'ease' });
    dispatch(setWeatherModalOn(false));
  };

  const everyDays = data?.list.map((item) => item.dt_txt.substr(0, 10));
  const days = [...new Set(everyDays)].splice(1, 6);

  const weatherData = days?.map((day) => {
    const dataForDay = data?.list?.filter((item) => item.dt_txt.includes(day));
    return {
      Max: dataForDay.map((item) => item.main.temp_max),
      Min: dataForDay.map((item) => item.main.temp_min),
      Icon: dataForDay[0]?.weather[0]?.icon ?? 'default-icon'
    };
  });

  const tempMax = (a) => {
    const numOnlyArr = a.filter((item) => typeof item == 'number');
    return Math.round((Math.max(...numOnlyArr) - 273.15) * 10) / 10;
  };
  const tempMin = (b) => {
    const numOnlyArr = b.filter((item) => typeof item == 'number');
    return Math.round((Math.min(...numOnlyArr) - 273.15) * 10) / 10;
  };

  useEffect(() => {
    gsap.from(boxRef.current, 0.3, { transform: 'translateY(-500px)', delay: 0, ease: 'ease' });
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <S.WeatherModalContainer>Error..</S.WeatherModalContainer>;
  }

  return (
    <>
      <S.WeatherModalContainer ref={boxRef}>
        <S.WeatherList>
          <S.WeatherDate title="Y">날짜</S.WeatherDate>
          <S.WeatherItem title="Y">최고</S.WeatherItem>
          <S.WeatherItem title="Y">최저</S.WeatherItem>
          <S.WeatherItem></S.WeatherItem>
        </S.WeatherList>
        {weatherData?.map((item, i) => {
          return (
            <S.WeatherList key={days[i]}>
              <S.WeatherDate>{days[i]}</S.WeatherDate>
              <S.WeatherItem>{tempMax(item.Max)}°C</S.WeatherItem>
              <S.WeatherItem>{tempMin(item.Min)}°C</S.WeatherItem>
              <S.ImgBox img={`https://openweathermap.org/img/wn/${item.Icon}@2x.png`} />
            </S.WeatherList>
          );
        })}
      </S.WeatherModalContainer>
      <S.Bg onClick={CloseModal}></S.Bg>
      <S.Bg onClick={CloseModal}></S.Bg>
    </>
  );
};

const S = {
  ImgBox: styled.div`
    width: 50px;
    height: 50px;
    background-image: url(${(props) => props.img});
    background-position: center;
    background-size: cover;
  `,
  Container: styled.div``,
  WeatherModalContainer: styled.div`
    position: fixed;
    background-color: rgba(255, 255, 255, 0.8);

    z-index: 9;
    right: 10px;
    top: 75px;
    padding: 10px;
    width: 330px;
    border-radius: 10px;
  `,
  Bg: styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 8;
  `,
  WeatherItem: styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    margin: 10px;
    ${(props) =>
      props.title === 'Y' &&
      css`
        color: orange;
        font-size: 18px;
      `}
  `,
  WeatherDate: styled.span`
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) =>
      props.title === 'Y' &&
      css`
        color: orange;
        font-size: 18px;
      `}
  `,
  WeatherList: styled.div`
    display: flex;
    align-items: center;
  `
};

export default WeatherModal;
