import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { getYtbLists } from '../../api/ytbLists';
import { useSelector } from 'react-redux';
import YoutubeCard from './YoutubeCard';
import { S } from './YoutubeStyled';

const ShowYtbList = () => {
  const [ytbList, setYtbList] = useState([]);
  const cardTop = useRef(null);

  const { title } = useSelector((state) => state.detailModal.detailModalData);
  const { isError, isLoading } = useQuery('ytbLists', () => getYtbLists(title));

  const getData = async () => {
    const response = await getYtbLists(title);
    setYtbList(response.items);
  };

  useEffect(() => {
    cardTop.current?.focus();
    getData();
  }, [title]);

  if (isLoading || ytbList.length == 0) {
    return <div>로딩중..</div>;
  }

  if (isError) {
    return <div>에러났당ㅠ</div>;
  }

  return (
    <S.YtbListContainer>
      <div ref={cardTop} tabIndex={0} />
      {ytbList?.map((item) => {
        return <YoutubeCard key={item.idx} item={item} />;
      })}
      <div style={{ width: '100%', height: 100 }} />
    </S.YtbListContainer>
  );
};

export default ShowYtbList;
