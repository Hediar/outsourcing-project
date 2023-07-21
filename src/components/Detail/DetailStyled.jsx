import { css, styled } from 'styled-components';

const DisplayFlexDivBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const S = {
  // ----------------------
  // DetailBox.jsx
  MotionBox: styled.div`
    left: 350px;
    position: fixed;
    background-color: white;
    z-index: 2;
  `,
  DetailCloseBtn: styled.button`
    width: 50px;
    height: 50px;
    position: absolute;
    z-index: 2;
    left: 520px;
    border-radius: 25px;
    top: calc((100vh - 50px) / 2);
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    cursor: pointer;
    color: white;
    font-size: 20px;
  `,
  DetailBoxContainer: styled(DisplayFlexDivBox)`
    width: 500px;
    height: calc(100vh - 70px);
    box-sizing: border-box;
    margin-top: 100px;
    flex-direction: column;
    overflow: hidden;
    z-index: 1;
  `,
  DetailInfoBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Img: styled.div`
    width: 430px;
    height: 250px;
    background-image: url(${(props) => props.$image});
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    margin-top: 30px;
  `,
  TitleArea: styled.div`
    margin: 20px;
  `,
  PlaceTitle: styled.h3`
    font-size: 32px;
    font-weight: 600;
    width: 500px;
    text-align: center;
    color: orange;
    &.test {
      box-shadow: 0px 5px 5px -4px gray;
    }
  `,
  SubTitleArea: styled(DisplayFlexDivBox)`
    margin-top: 15px;
    color: white;
  `,
  SubTitle: styled.div`
    border-radius: 20px;
    background-color: orange;
    display: flex;
    gap: 5px;
    padding: 5px 10px 5px 10px;
  `,
  SubTitleText: styled.h3`
    font-size: 16px;
    color: white;
  `,
  // ----------------------
  // DetailTab.jsx
  Container: styled(DisplayFlexDivBox)`
    flex-direction: column;
  `,
  TabArea: styled(DisplayFlexDivBox)`
    box-shadow: 0px 8px 10px -4px rgba(0, 0, 0, 0.2);
  `,
  TabMenu: styled(DisplayFlexDivBox)`
    width: 500px;
  `,
  TapContentArea: styled.div`
    padding-top: 10px;
    height: calc(100vh - 448px);
    overflow-y: scroll;
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
      props.$select === 'Y' &&
      css`
        background-color: orange;
        font-weight: bold;
        color: white;
      `}
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(1);
    }
  `,
  // ----------------------
  // DetailInfor.jsx
  InfoBox: styled.div`
    margin: 0 20px;
    height: calc(100vh - 385px);
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  Info: styled.p`
    font-size: 16px;
    text-align: center;
    margin-bottom: 15px;
    line-height: 1.8;
  `,
  InfoTitle: styled(DisplayFlexDivBox)`
    font-size: 18px;
    font-weight: 700;
    margin: 10px;
    gap: 5px;
  `,
  Title: styled.div`
    color: orange;
  `,
  InfoEmptyBox: styled.div`
    width: 100px;
    height: 100px;
  `
};

export { S };
