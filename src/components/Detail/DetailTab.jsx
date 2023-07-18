import React, { useState } from 'react';
import DetailInfor from './DetailInfor';
import ShowBlogList from '../Blog/ShowBlogList';
import { css, styled } from 'styled-components';

const DetailTab = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (idx) => {
    setActiveIndex(idx);
  };

  const tabContentArr = [
    {
      tabTitle: (
        <S.TabContent select={activeIndex === 0 ? 'Y' : 'N'} onClick={() => tabClickHandler(0)}>
          상세정보
        </S.TabContent>
      ),
      tabContent: (
        <div>
          <DetailInfor />
        </div>
      )
    },
    {
      tabTitle: (
        <S.TabContent select={activeIndex === 1 ? 'Y' : 'N'} onClick={() => tabClickHandler(1)}>
          블로그
        </S.TabContent>
      ),
      tabContent: (
        <div>
          <ShowBlogList />
        </div>
      )
    }
  ];
  return (
    <>
      <S.TabMenu className="tabBox">
        {tabContentArr.map((section, idx) => {
          return section.tabTitle;
        })}
      </S.TabMenu>
      <div>{tabContentArr[activeIndex].tabContent}</div>
    </>
  );
};

const S = {
  TabMenu: styled.ul`
    /* background-color: aqua; */
    width: 80%;
  `,
  TabContent: styled.li`
    float: left;
    width: 50%;
    text-align: center;
    cursor: pointer;
    padding: 10px 0;
    border: 1px solid gray;
    box-sizing: border-box;
    background-color: white;
    ${(props) =>
      props.select === 'Y' &&
      css`
        background-color: gray;
        font-weight: bold;
      `}
  `
};

export default DetailTab;
