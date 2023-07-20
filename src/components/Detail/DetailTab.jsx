import React, { useState } from 'react';
import DetailInfor from './DetailInfor';
import ShowBlogList from '../Blog/ShowBlogList';
import { css, styled } from 'styled-components';
import ShowYtbList from '../Youtube/ShowYtbList';

const DetailTab = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (idx) => {
    setActiveIndex(idx);
  };

  const tabContentArr = [
    {
      tabTitle: (
        <S.TabContent key="0" select={activeIndex === 0 ? 'Y' : 'N'} onClick={() => tabClickHandler(0)}>
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
        <S.TabContent key="1" select={activeIndex === 1 ? 'Y' : 'N'} onClick={() => tabClickHandler(1)}>
          블로그
        </S.TabContent>
      ),
      tabContent: (
        <div>
          <ShowBlogList />
        </div>
      )
    },
    {
      tabTitle: (
        <S.TabContent key="2" select={activeIndex === 2 ? 'Y' : 'N'} onClick={() => tabClickHandler(2)}>
          인기 동영상
        </S.TabContent>
      ),
      tabContent: (
        <div>
          <ShowYtbList />
        </div>
      )
    }
  ];
  return (
    <S.Container>
      <S.TabArea>
        <S.TabMenu className="tabBox">
          {tabContentArr.map((section, idx) => {
            return section.tabTitle;
          })}
        </S.TabMenu>
      </S.TabArea>
      <S.TapContentArea>{tabContentArr[activeIndex].tabContent}</S.TapContentArea>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  TabArea: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 8px 10px -4px rgba(0, 0, 0, 0.2);
  `,
  TabMenu: styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* gap: 15px; */
    /* height: 50px; */
  `,
  TapContentArea: styled.div`
    padding-top: 10px;
    /* width: 100%; */
    height: calc(100vh - 448px);
    /* background-color: royalblue; */
    overflow-y: scroll;
    /* background-color: orange; */
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  TabContent: styled.div`
    flex-grow: 1;
    float: left;
    text-align: center;
    cursor: pointer;
    padding: 10px 0;
    transition: 0.2s;
    border: 1px solid orange;
    box-sizing: border-box;
    color: orange;
    background-color: white;
    ${(props) =>
      props.select === 'Y' &&
      css`
        background-color: orange;
        font-weight: bold;
        color: white;
      `}
    &:hover {
      /* background-color: orange; */
      transform: scale(1.1);
    }
    &:active {
      transform: scale(1);
    }
  `
};

export default DetailTab;
