import React, { useState } from 'react';
import { getBlogLists } from '../../api/blogLists';
import { useQuery } from 'react-query';
import Blog from '../Blog/Blog';

const ShowBlogList = () => {
  const [page, setPage] = useState(1);
  const { data, isError, isLoading } = useQuery('blogLists', () => getBlogLists('진솔', page));

  if (isLoading) {
    return <div>로딩중..</div>;
  }

  if (isError) {
    return <div>에러났당ㅠ</div>;
  }

  const blogList = data.documents;
  return (
    <>
      {blogList.map((item) => {
        return <Blog item={item} />;
      })}
    </>
  );
};

export default ShowBlogList;
