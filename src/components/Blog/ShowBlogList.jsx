import React, { useEffect, useRef, useState } from 'react';
import { getBlogLists } from '../../api/blogLists';
import { useQuery } from 'react-query';
import Blog from './BlogCard';
import useIntersectionObserver from '../../hook/useIntersectionObserver';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import BlogCard from './BlogCard';

const ShowBlogList = () => {
  const [page, setPage] = useState(1);
  const target = useRef(null);
  const [blogList, setBlogList] = useState([]);

  const { title } = useSelector((state) => state.detailModal.detailModalData);
  const { data, isError, isLoading } = useQuery('blogLists', () => getBlogLists(title, page), {
    onSuccess: () => {
      setBlogList(data?.documents);
    },
    refetchOnWindowFocus: false
  });

  const [observe, unobserve] = useIntersectionObserver(() => {
    setPage((page) => page + 1);
  });

  const getData = async () => {
    const response = await getBlogLists(title, page);
    setBlogList(response.documents);
  };

  useEffect(() => {
    getData();
  }, [title]);

  useEffect(() => {
    const N = data?.documents.length;
    const totalCount = data?.meta.total_count;
    console.log(data);

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
      const response = await getBlogLists(title, page);
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
    <S.BlogListContainer>
      {blogList?.map((item, idx) => {
        return <BlogCard key={idx} item={item} />;
      })}
      <div ref={target} style={{ width: '100%', height: 100 }} />
    </S.BlogListContainer>
  );
};

export default ShowBlogList;

const S = {
  BlogListContainer: styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  `
};
