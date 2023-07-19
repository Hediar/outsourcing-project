// import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { styled } from 'styled-components';
import { getcurrentWeather } from '../../api/weather';

const Weather = () => {
  // const [result, setResult] = useState({});
  const [icon, setIcon] = useState('');

  const { data, isError, isLoading } = useQuery('currentWeather', getcurrentWeather, {
    onSuccess: () => {
      // setResult(data);
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

  console.log('data : ', data);
  // console.log('result : ', result);

  // const getcurrentWeather = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/weather?q=Jeju&appid=${process.env.REACT_APP_WEATHER_API}`
  //     );
  //   } catch (err) {}
  // };

  // useEffect(() => {
  //   getcurrentWeather();
  // }, []);

  return (
    <>
      <div className="wrap">
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
      </div>
    </>
  );
};

const S = {
  WeatherBox: styled.div`
    display: flex;
    align-items: center;
  `,
  WeatherTextBox: styled.div`
    display: flex;
    align-items: end;
    margin-bottom: -5px;
  `,
  WeatherCityName: styled.span`
    font-weight: 900;
    font-size: 20px;
  `,
  WeatherTemp: styled.span`
    margin: 0 10px;
  `,
  WeatherIcon: styled.img`
    width: '70px';
    /* margin-top: 30px; */
  `
};

export default Weather;
