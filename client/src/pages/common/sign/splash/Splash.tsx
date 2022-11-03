// 앱 첫 접속시 소개 페이지 ( 쿠키 반영구로 남기고 재접시 안뜨게 )
import styled, { keyframes } from "styled-components";

const Splash = () => {
  return (
    <div>
      <SplashContainer>
        <SplashTopTextGroup>
          <SplashTextLineLT>
            <SplashTextUnit>머리할래?</SplashTextUnit>
            <SplashTextUnit>머리할래!</SplashTextUnit>
            <SplashTextUnit>머리할래?</SplashTextUnit>
            <SplashTextUnit>머리할래!</SplashTextUnit>
          </SplashTextLineLT>
          <SplashTextLineRT>
            <SplashTextUnit>머리할래!</SplashTextUnit>
            <SplashTextUnit>머리할래?</SplashTextUnit>
            <SplashTextUnit>머리할래?</SplashTextUnit>
            <SplashTextUnit>머리할래!</SplashTextUnit>
          </SplashTextLineRT>
        </SplashTopTextGroup>
        <SplashMiddleGroup>d</SplashMiddleGroup>
        <SplashBottomTextGroup>
          <SplashTextLineLB>
            <SplashTextUnit>머리할래?</SplashTextUnit>
            <SplashTextUnit>머리할래!</SplashTextUnit>
            <SplashTextUnit>머리할래?</SplashTextUnit>
            <SplashTextUnit>머리할래!</SplashTextUnit>
          </SplashTextLineLB>
          <SplashTextLineRB>
            <SplashTextUnit>머리할래!</SplashTextUnit>
            <SplashTextUnit>머리할래?</SplashTextUnit>
            <SplashTextUnit>머리할래!</SplashTextUnit>
            <SplashTextUnit>머리할래?</SplashTextUnit>
          </SplashTextLineRB>
        </SplashBottomTextGroup>
      </SplashContainer>
    </div>
  );
};

export default Splash;

const Fadeout = keyframes`
  from {
    opacity: 100%;
  }
  to {
    opacity: 0%;
  }
`;
const SplashContainer = styled.div`
  position: relative;
  background-color: red;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;

  animation: ${Fadeout} 0.3s 2s linear;
`;

const SplashTopTextGroup = styled.div`
  transform: rotate(30deg);
  position: absolute;
  top: 0px;
`;

const SplashMiddleGroup = styled.div`
  width: 100%;
`;

const SplashBottomTextGroup = styled.div`
  transform: rotate(30deg);
  position: absolute;
  bottom: 0px;
  left: -100px;
`;

//
const LineMoveLeft = keyframes`
  from {
    left: -100px;
    /* top: 0px; */
  }  

  to {
    left: 0px;
    /* top: 1px; */
  }
`;

const LineMoveRight = keyframes`
  from {
    left: 0px;
    /* top: 0px; */
  }  

  to {
    left: -100px;
    /* top: 1px; */
  }
`;

const SplashTextLineLT = styled.div`
  position: absolute;
  top: -120px;
  display: flex;
  animation: ${LineMoveLeft} 5s linear;
`;

const SplashTextLineRT = styled.div`
  top: -70px;
  position: absolute;
  display: flex;
  animation: ${LineMoveRight} 5s linear;
`;

const SplashTextLineLB = styled.div`
  position: absolute;
  bottom: 150px;
  display: flex;
  animation: ${LineMoveLeft} 5s linear;
`;

const SplashTextLineRB = styled.div`
  bottom: 100px;
  position: absolute;
  display: flex;
  animation: ${LineMoveRight} 5s linear;
`;
const SplashTextUnit = styled.div`
  width: 130px;
  font-family: Jalnan;
  color: white;
  font-size: 25px;
`;
