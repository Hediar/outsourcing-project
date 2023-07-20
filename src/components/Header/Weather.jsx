// import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { styled } from 'styled-components';
import { getcurrentWeather } from '../../api/weather';

const Weather = () => {
  const [icon, setIcon] = useState('');

  const { data, isError, isLoading } = useQuery('currentWeather', getcurrentWeather, {
    onSuccess: () => {
      setIcon(data?.weather[0]?.icon);
    },
    refetchOnWindowFocus: false
  });

  if (isLoading) {
    return <h1>Loading..</h1>;
  }
  if (isError) {
    return <h1>Error..</h1>;
  }

  return (
    <>
      <S.Container>
        {Object.keys(data).length !== 0 && (
          <S.WeatherBox>
            <S.WeatherTextBox>
              <S.WeatherCityName>{(data?.name).substr(0, 5)}</S.WeatherCityName>
              <S.WeatherTemp>{Math.round((data?.main.temp - 273.15) * 10) / 10}°C</S.WeatherTemp>
            </S.WeatherTextBox>
            <S.WeatherIcon
              src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
              alt="Image"
              width="60px"
            />
          </S.WeatherBox>
        )}
      </S.Container>
    </>
  );
};

const S = {
  Container: styled.div`
    width: 200px;
    position: absolute;
    left: 75px;
  `,
  WeatherBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -3px;
    margin-left: 5%;
  `,
  WeatherTextBox: styled.div`
    display: flex;
    align-items: end;
    margin-bottom: -5px;
  `,
  WeatherCityName: styled.span`
    font-weight: 900;
    font-size: 20px;
    color: white;
  `,
  WeatherTemp: styled.span`
    margin: 0 10px;
    color: white;
  `,
  WeatherIcon: styled.img`
    width: '70px';
    margin-top: 5px;
  `
};

export default Weather;
