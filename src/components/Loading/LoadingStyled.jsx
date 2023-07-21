import { styled } from 'styled-components';

const S = {
  LoadingBackground: styled.div`
    width: 100%;
    height: 100vh;
    inset: 0px;
    position: fixed;
    opacity: 0.8;
    z-index: 100;
    background-color: rgb(221, 221, 221);
  `,
  LoadingAnimation: styled.div`
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid orange;
    border-radius: 50%;
    animation: spin 2s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @keyframes spin {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  `
};

export { S };
