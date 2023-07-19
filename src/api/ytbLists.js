// axios 요청 들어가는 모든 모듈
import axios from 'axios';

// 조회
const getYtbLists = async (searchTxt) => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?q=제주${searchTxt}&regionCode=KR&part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyD7TcS5jRPGKofu2aN4cIosSg469pcirB4`
  );
  return response.data;
};

export { getYtbLists };
