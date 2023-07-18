import axios from 'axios';

// 조회
const getPlaceList = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/jejuHotPlace`);
  return response.data;
};

const getPlace = async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/jejuHotPlace/${id}`);
  return response.data;
};

export { getPlaceList, getPlace };
