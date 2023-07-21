import React from 'react';
import { S } from './LoadingStyled';

function Loading() {
  return (
    <>
      <S.LoadingBackground>
        <S.LoadingAnimation />
      </S.LoadingBackground>
    </>
  );
}

export default Loading;
