import React, { useEffect, useRef, useState } from 'react';
import { getBlogLists } from '../../api/blogLists';
import { useQuery } from 'react-query';
import Blog from '../Blog/Blog';
import useIntersectionObserver from '../../hook/useIntersectionObserver';

const ShowBlogList = () => {
  const [page, setPage] = useState(1);
  const target = useRef(null);
  const [blogList, setBlogList] = useState([]);

  const { data, isError, isLoading } = useQuery('blogLists', () => getBlogLists('진솔', page), {
    onSuccess: () => {
      setBlogList(data?.documents);
    }
  });

  const [observe, unobserve] = useIntersectionObserver(() => {
    setPage((page) => page + 1);
  });

  const getData = async () => {
    const response = await getBlogLists('진솔', page);
    setBlogList(response.documents);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // console.log(target);
    // if (target !== null && page === 1) {
    //   console.log('0000', target);
    //   observe(target.current);
    // } else {
    //   console.log('실행하지말라고;');
    // }
    const N = data?.documents.length;
    const totalCount = data?.meta.total_count;

    if (0 === N || totalCount <= N) {
      unobserve(target.current);
    }
  }, [blogList]);

  useEffect(() => {
    if (isLoading) {
      if (target == null) {
        unobserve(target.current);
      }
    } else {
      observe(target.current);
    }
  }, [isLoading]);

  const updateData = async () => {
    if (page !== 1) {
      const response = await getBlogLists('진솔', page);
      const blogData = response.documents;
      setBlogList((prev) => [...prev, ...blogData]);
    }
  };
  useEffect(() => {
    updateData();
  }, [page]);

  if (isLoading) {
    return <div>로딩중..</div>;
  }

  if (isError) {
    return <div>에러났당ㅠ</div>;
  }

  return (
    <>
      {blogList?.map((item) => {
        return <Blog key={item.idx} item={item} />;
      })}
      <div ref={target} style={{ width: '100%', height: 30 }} />
    </>
  );
};

export default ShowBlogList;
