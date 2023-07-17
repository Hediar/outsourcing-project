// axios 요청 들어가는 모든 모듈
import axios from 'axios';

// 조회
const getBlogLists = async (searchTxt, page) => {
  const response = await axios.get(`https://dapi.kakao.com/v2/search/blog?query=${searchTxt}&page=${page}`, {
    headers: { Authorization: 'KakaoAK 48feeef0e4edac8192129c9cc2940ebe' }
  });
  return response.data;
};

export { getBlogLists };
