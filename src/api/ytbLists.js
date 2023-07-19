// axios 요청 들어가는 모든 모듈
import axios from 'axios';

// 조회
const getYtbLists = async (searchTxt) => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?q=제주${searchTxt}&regionCode=KR&part=snippet&chart=mostPopular&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API}`
  );
  return response.data;
};

export { getYtbLists };
