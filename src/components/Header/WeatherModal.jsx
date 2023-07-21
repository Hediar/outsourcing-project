import React from 'react';
import { get5DaysOfWeather } from '../../api/weather';
import { useQuery } from 'react-query';
import { styled } from 'styled-components';
import Loading from '../Loading/Loading';

const WeatherModal = () => {
  const { data, isError, isLoading } = useQuery('5DaysOfWeather', get5DaysOfWeather, {
    onSuccess: () => {
      // console.log('성공', data);
    }
  });

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <h1>Error..</h1>;
  }
  const everyDays = data.list.map((item) => item.dt_txt.substr(0, 10));
  const days = [...new Set(everyDays)];
  // console.log('days', days);

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

  const tempMax = (a) => {
    const numOnlyArr = a.filter((item) => typeof item == 'number');
    // console.log(numOnlyArr);
    return Math.round((Math.max(...numOnlyArr) - 273.15) * 10) / 10;
  };
  const tempMin = (b) => {
    const numOnlyArr = b.filter((item) => typeof item == 'number');
    // console.log(numOnlyArr);
    return Math.round((Math.min(...numOnlyArr) - 273.15) * 10) / 10;
  };

  return (
    <S.WeatherModalContainer>
      <ul>
        <li>
          {days[1]}
          {tempMax(firstDayData)}°C
          {tempMin(firstDayData)}°C
          <img src={`https://openweathermap.org/img/wn/${firstDayData[2]}@2x.png`} alt="Image" width="60px" />
        </li>
        <li>
          {days[2]}
          {tempMax(secondDayData)}°C
          {tempMin(secondDayData)}°C
          <img src={`https://openweathermap.org/img/wn/${secondDayData[2]}@2x.png`} alt="Image" width="60px" />
        </li>
        <li>
          {days[3]}
          {tempMax(thirdDayData)}°C
          {tempMin(thirdDayData)}°C
          <img src={`https://openweathermap.org/img/wn/${thirdDayData[2]}@2x.png`} alt="Image" width="60px" />
        </li>
        <li>
          {days[4]}
          {tempMax(fourthDayData)}°C
          {tempMin(fourthDayData)}°C
          <img src={`https://openweathermap.org/img/wn/${fourthDayData[2]}@2x.png`} alt="Image" width="60px" />
        </li>
        <li>
          {days[5]}
          {tempMax(fifthDayData)}°C
          {tempMin(fifthDayData)}°C
          <img src={`https://openweathermap.org/img/wn/${fifthDayData[2]}@2x.png`} alt="Image" width="60px" />
        </li>
      </ul>
    </S.WeatherModalContainer>
  );
};

const S = {
  WeatherModalContainer: styled.div`
    position: absolute;
    background-color: white;
    z-index: 99999;
    right: 2%;
    top: 75px;
    padding: 10px;
  `
};

export default WeatherModal;
