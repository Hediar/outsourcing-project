import { styled } from 'styled-components';
import Select from 'react-select';

const S = {
  // ----------------------
  //  SelectComp.jsx
  SelectBox: styled.div`
    width: 80%;
  `,
  StyledSelect: styled(Select)`
    color: white;
  `,
  ListBox: styled.div`
    width: 100%;
    margin-top: 10px;
    box-sizing: border-box;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  // ----------------------
  //  PlaceList.jsx
  ListTitle: styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 0;
    position: relative;
    &:hover {
      font-weight: 700;
      color: white;
    }
  `,
  ListItem: styled.div`
    display: block;
    margin: 20px 40px;
    border: 1px solid orange;
    font-size: 18px;
    background-color: white;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      font-weight: bold;
      transform: scale(1.1);
      color: white;
      box-shadow: 0px 3px 3px 2px rgba(0, 0, 0, 0.1);
      position: relative;
      background-image: url(${(props) => props.$backgroundSource});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      &::before {
        content: '';
        background-color: rgba(255, 165, 0, 1);
        opacity: 0.9;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
      }
    }
    &:active {
      transform: scale(1);
    }
  `,
  ListEmptyBox: styled.div`
    height: 100px;
    width: 100px;
  `
};

export { S };
