import React, { useEffect, useRef } from 'react';
import { get5DaysOfWeather } from '../../api/weather';
import { useQuery } from 'react-query';
import { gsap } from 'gsap';
import { styled } from 'styled-components';
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
        {weatherData?.map((item, i) => {
          return (
            <div>
              <span>{days[i]}</span>
              <span>{tempMax(item.Max)}</span>
              <span>{tempMin(item.Min)}</span>
              <img src={`https://openweathermap.org/img/wn/${item.Icon}@2x.png`} alt="Image" width="60px" />
            </div>
          );
        })}
      </S.WeatherModalContainer>
      <S.Bg onClick={CloseModal}></S.Bg>
    </>
  );

  // return (
  //   <S.Container>
  //     <S.WeatherModalContainer ref={boxRef}>
  //       <div>
  //         <div>
  //           {days[1]}
  //           {tempMax(firstDayData)}°C
  //           {tempMin(firstDayData)}°C
  //           <img src={`https://openweathermap.org/img/wn/${firstDayData[2]}@2x.png`} alt="Image" width="60px" />
  //         </div>
  //         <div>
  //           {days[2]}
  //           {tempMax(secondDayData)}°C
  //           {tempMin(secondDayData)}°C
  //           <img src={`https://openweathermap.org/img/wn/${secondDayData[2]}@2x.png`} alt="Image" width="60px" />
  //         </div>
  //         <div>
  //           {days[3]}
  //           {tempMax(thirdDayData)}°C
  //           {tempMin(thirdDayData)}°C
  //           <img src={`https://openweathermap.org/img/wn/${thirdDayData[2]}@2x.png`} alt="Image" width="60px" />
  //         </div>
  //         <div>
  //           {days[4]}
  //           {tempMax(fourthDayData)}°C
  //           {tempMin(fourthDayData)}°C
  //           <img src={`https://openweathermap.org/img/wn/${fourthDayData[2]}@2x.png`} alt="Image" width="60px" />
  //         </div>
  //         <div>
  //           {days[5]}
  //           {tempMax(fifthDayData)}°C
  //           {tempMin(fifthDayData)}°C
  //           <img src={`https://openweathermap.org/img/wn/${fifthDayData[2]}@2x.png`} alt="Image" width="60px" />
  //         </div>
  //       </div>
  //     </S.WeatherModalContainer>
  //     <S.DetailCloseBtn onClick={CloseModal}>X</S.DetailCloseBtn>
  //   </S.Container>
  // );
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
