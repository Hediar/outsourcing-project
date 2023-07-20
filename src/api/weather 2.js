import axios from 'axios';

const getcurrentWeather = async () => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=Jeju&appid=${process.env.REACT_APP_WEATHER_API}`
  );
  return response.data;
};

export { getcurrentWeather };
