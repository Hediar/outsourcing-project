import React, { useEffect, useRef } from 'react';
import { get5DaysOfWeather } from '../../api/weather';
import { useQuery } from 'react-query';
import { gsap } from 'gsap';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { setWeatherModalOn } from '../../redux/modules/modalSlice';

const WeatherModal = () => {
  const boxRef = useRef(null);
  const dispatch = useDispatch();

  const { data, isError, isLoading } = useQuery('5DaysOfWeather', get5DaysOfWeather, {
    onSuccess: () => {
      console.log('성공', data);
    }
  });

  const CloseModal = async () => {
    await gsap.to(boxRef.current, 0.3, { transform: 'translateY(-500px)', delay: 0, ease: 'ease' });
    dispatch(setWeatherModalOn(false));
  };

  useEffect(() => {
    gsap.from(boxRef.current, 0.3, { transform: 'translateY(-500px)', delay: 0, ease: 'ease' });
  }, []);

  if (isLoading) {
    return <S.WeatherModalContainer>Loading..</S.WeatherModalContainer>;
  }
  if (isError) {
    return <S.WeatherModalContainer>Error..</S.WeatherModalContainer>;
  }
  const everyDays = data.list.map((item) => item.dt_txt.substr(0, 10));
  const days = [...new Set(everyDays)];
  console.log('days', days);

  const firstDayData = [];
  const secondDayData = [];
  const thirdDayData = [];
  const fourthDayData = [];
  const fifthDayData = [];

  const pushData = data.list.forEach((item) => {
    if (item?.dt_txt.includes(days[1])) {
      firstDayData.push(item.main.temp_max);
      firstDayData.push(item.main.temp_min);
      firstDayData.push(item.weather[0].icon);
    }
    if (item.dt_txt.includes(days[2])) {
      secondDayData.push(item.main.temp_max);
      secondDayData.push(item.main.temp_min);
      secondDayData.push(item.weather[0].icon);
    }
    if (item.dt_txt.includes(days[3])) {
      thirdDayData.push(item.main.temp_max);
      thirdDayData.push(item.main.temp_max);
      thirdDayData.push(item.weather[0].icon);
    }
    if (item.dt_txt.includes(days[4])) {
      fourthDayData.push(item.main.temp_max);
      fourthDayData.push(item.main.temp_min);
      fourthDayData.push(item.weather[0].icon);
    }
    if (item.dt_txt.includes(days[5])) {
      fifthDayData.push(item.main.temp_max);
      fifthDayData.push(item.main.temp_min);
      fifthDayData.push(item.weather[0].icon);
    }
  });

  console.log(fourthDayData);

  const tempMax = (a) => {
    const numOnlyArr = a.filter((item) => typeof item == 'number');
    return Math.round((Math.max(...numOnlyArr) - 273.15) * 10) / 10;
  };
  const tempMin = (b) => {
    const numOnlyArr = b.filter((item) => typeof item == 'number');
    return Math.round((Math.min(...numOnlyArr) - 273.15) * 10) / 10;
  };

  return (
    <S.Container>
      <S.WeatherModalContainer ref={boxRef}>
        <div>
          <div>
            {days[1]}
            {tempMax(firstDayData)}°C
            {tempMin(firstDayData)}°C
            <img src={`https://openweathermap.org/img/wn/${firstDayData[2]}@2x.png`} alt="Image" width="60px" />
          </div>
          <div>
            {days[2]}
            {tempMax(secondDayData)}°C
            {tempMin(secondDayData)}°C
            <img src={`https://openweathermap.org/img/wn/${secondDayData[2]}@2x.png`} alt="Image" width="60px" />
          </div>
          <div>
            {days[3]}
            {tempMax(thirdDayData)}°C
            {tempMin(thirdDayData)}°C
            <img src={`https://openweathermap.org/img/wn/${thirdDayData[2]}@2x.png`} alt="Image" width="60px" />
          </div>
          <div>
            {days[4]}
            {tempMax(fourthDayData)}°C
            {tempMin(fourthDayData)}°C
            <img src={`https://openweathermap.org/img/wn/${fourthDayData[2]}@2x.png`} alt="Image" width="60px" />
          </div>
          <div>
            {days[5]}
            {tempMax(fifthDayData)}°C
            {tempMin(fifthDayData)}°C
            <img src={`https://openweathermap.org/img/wn/${fifthDayData[2]}@2x.png`} alt="Image" width="60px" />
          </div>
        </div>
      </S.WeatherModalContainer>
      <S.DetailCloseBtn onClick={CloseModal}>X</S.DetailCloseBtn>
      <S.Bg onClick={CloseModal}></S.Bg>
    </S.Container>
  );
};

const S = {
  Container: styled.div``,
  WeatherModalContainer: styled.div`
    position: fixed;
    background-color: white;
    z-index: 9;
    right: 10px;
    top: 75px;
    padding: 10px;
  `,
  Bg: styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 8;
  `,
  DetailCloseBtn: styled.button`
    width: 50px;
    height: 50px;
    z-index: 999999;
    position: absolute;
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    cursor: pointer;
    color: white;
    font-size: 20px;
  `
};

export default WeatherModal;
