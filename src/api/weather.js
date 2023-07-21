import axios from 'axios';

const getcurrentWeather = async () => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=Jeju&appid=${process.env.REACT_APP_WEATHER_API}`
  );

  return response.data;
};

const get5DaysOfWeather = async () => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=33.4930566&lon=126.5130589&appid=${process.env.REACT_APP_WEATHER_API}`
  );

  console.log(response.data);
  return response.data;
};

export { getcurrentWeather, get5DaysOfWeather };
