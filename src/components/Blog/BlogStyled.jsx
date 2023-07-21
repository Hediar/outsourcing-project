import { styled } from 'styled-components';

const DisplayFlexDivBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const S = {
  // ----------------------
  // ShowBlogList.jsx
  BlogListContainer: styled(DisplayFlexDivBox)`
    flex-direction: column;
    gap: 25px;
  `,
  // ----------------------
  // BlogCard.jsx
  ContentLink: styled.a`
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 8px 10px -4px rgba(0, 0, 0, 0.2);
    }
  `,
  BlogContainer: styled.div`
    box-sizing: border-box;
    border-top: 1px solid orange;
    border-bottom: 1px solid orange;
    padding: 15px 0 15px 0;
    width: 450px;
    overflow: hidden;
    line-height: 1.4;
  `,
  ContentBox: styled.div`
    margin: 0 10px;
    display: flex;
    gap: 10px;
  `,
  ContentImgBox: styled(DisplayFlexDivBox)`
    width: 130px;
    border-radius: 10px;
    overflow: hidden;
    background-color: orange;
  `,
  ContentImg: styled.img`
    height: 100%;
  `,
  ContentNoImg: styled(DisplayFlexDivBox)`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    font-size: 12px;
  `,
  InfoBox: styled.div`
    width: 320px;
  `,
  ContentTitle: styled.div`
    margin: 0 0 0 3px;
    font-size: 20px;
    word-break: keep-all;
    font-weight: 700;
  `,
  ContentTextBox: styled.div`
    margin: 8px 0 0 5px;
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  BlogInfoBox: styled.div`
    margin-top: 15px;
  `,
  Caption: styled.div`
    font-size: 10px;
    margin: 3px;
    color: #c2c2c2;
  `
};

export { S };
