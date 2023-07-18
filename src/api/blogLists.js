// axios 요청 들어가는 모든 모듈
import axios from 'axios';

// 조회
const getBlogLists = async (searchTxt, page) => {
  const response = await axios.get(`https://dapi.kakao.com/v2/search/blog?query=${searchTxt}&page=${page}`, {
    headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API}` }
  });
  return response.data;
};

export { getBlogLists };
