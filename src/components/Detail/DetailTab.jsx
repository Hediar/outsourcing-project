import React, { useEffect, useState } from 'react';
import DetailInfor from './DetailInfor';
import ShowBlogList from '../Blog/ShowBlogList';
import ShowYtbList from '../Youtube/ShowYtbList';
import { useSelector } from 'react-redux';
import { S } from './DetailStyled';

const DetailTab = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { title } = useSelector((state) => state.detailModal.detailModalData);

  const tabClickHandler = (idx) => {
    setActiveIndex(idx);
  };

  useEffect(() => {
    setActiveIndex(0);
  }, [title]);

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

export default DetailTab;
