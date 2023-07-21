import { styled } from 'styled-components';

const DisplayFlexDivBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const S = {
  // ----------------------
  // ShowYtbList.jsx
  YtbListContainer: styled(DisplayFlexDivBox)`
    flex-direction: column;
    gap: 25px;
  `,
  // ----------------------
  // YoutubeCard.jsx
  ContentLink: styled.a`
    transition: 0.2s;
    text-decoration: none;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 8px 10px -4px rgba(0, 0, 0, 0.2);
    }
  `,
  YtbContainer: styled(DisplayFlexDivBox)`
    box-sizing: border-box;
    border-bottom: 1px solid orange;
    padding: 15px 0 15px 0;
    width: 430px;
    overflow: hidden;
    line-height: 1.4;
    flex-direction: column;
  `,
  ContentImgBox: styled(DisplayFlexDivBox)`
    height: 240px;
    border-radius: 10px;
    overflow: hidden;
    background-color: royalblue;
  `,
  ContentImg: styled.img`
    width: 100%;
  `,
  ContentBox: styled.div`
    width: 100%;
    margin: 0 10px;
    display: flex;
    gap: 10px;
  `,
  ContentTitle: styled.div`
    margin: 10px 0 0 3px;
    font-size: 20px;
    word-break: keep-all;
    width: 100%;
    font-weight: 700;
  `
};

export { S };
