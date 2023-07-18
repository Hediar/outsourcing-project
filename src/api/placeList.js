// axios 요청 들어가는 모든 모듈
import axios from 'axios';
const { kakao } = window;

// 조회
const getPlaceList = async () => {
  const response = await axios.get(`${process.env.REACT_APP_DB_API}/jejuHotPlace`);
  return response.data;
};

const getPlaceByID = async (placeId) => {
  const response = await axios.get(`${process.env.REACT_APP_DB_API}/jejuHotPlace?=${placeId}`);
  return response.data;
};

export { getPlaceList, getPlaceByID };
