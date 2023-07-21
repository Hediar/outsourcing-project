import { styled } from 'styled-components';

const S = {
  Header: styled.header`
    width: 100vw;
    background-color: #ffa500;
    position: fixed;
    height: 70px;
    z-index: 99;
    box-sizing: border-box;
  `,
  Logo: styled.div`
    position: absolute;
    left: 100px;
    top: 20px;
    width: 150px;
    height: 30px;
    background-image: url('https://velog.velcdn.com/images/lhb971219/post/c42592a0-754a-43d9-85fc-3a4287975ab6/image.png');
    background-size: cover;
    background-position: center;
  `,
  SelectButtons: styled.div`
    position: fixed;
    left: 50%;
    top: 35px;
    transform: translate(-50%, -50%);
    display: flex;
  `,
  ButtonStyle: styled.button`
    cursor: pointer;
    border: none;
    width: 80px;
    height: 30px;
    margin: 6px;
    border-radius: 10px;
    border: 1px solid white;
    background-color: #ffffff;
    color: #ffa500;
    &:hover {
      box-shadow: 0 40px 12px #ffa500 inset, 0 -40px 12px #ffa500 inset;
      color: rgba(255, 255, 255, 1);
      transition: all 0.5s;
      transform: scale(1.1);
      font-weight: bold;
    }
    &:active {
      transform: scale(1);
    }
  `
};

export { S };
