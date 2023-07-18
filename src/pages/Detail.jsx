import React from 'react';

import Map from '../components/Map/Map';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { getPlace } from '../api/jejuHotPlace';
import ShowBlogList from '../components/Blog/ShowBlogList';

function Detail() {
  const param = useParams();
  // const { isLoading, isError, data } = useQuery(`${param.id}`, () => getPlace(param.id));

  // if (isLoading) {
  //   return (
  //     <>
  //       <h1>로딩중</h1>
  //     </>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <>
  //       <h1>오류가 발생하였습니다....!!!</h1>
  //     </>
  //   );
  // }

  return (
    <div>
      <Map />
      {/* address = {`${data.title}`} */}
      <div>
        Detail Data
        <div>이름:data.title</div>
        <div>주소: data.address</div>
        <div>상세정보 설명: data.detail.information</div>
        <div>운영 시간: data.detail.businessHours</div>
        <div>전화번호: data.detail.tel</div>
        <div>홈페이지: data.detail.Link</div>
        <div>주차여부: data.detail.parking</div>
        {/* {`${data.title}`} */}
      </div>
      <ShowBlogList />
    </div>
  );
}

export default Detail;
