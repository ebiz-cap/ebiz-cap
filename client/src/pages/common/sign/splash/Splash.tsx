// 앱 첫 접속시 소개 페이지 ( 쿠키 반영구로 남기고 재접시 안뜨게 )
import { useState, useEffect } from "react";

import styled, { keyframes } from "styled-components";
import splashImg1 from "../../../../env/imgsrc/splash/머리할래_1.png";
import splashImg2 from "../../../../env/imgsrc/splash/머리할래_2.png";
import logo from "../../../../env/imgsrc/brand/메인로고2.png";

const Splash = () => {
  const [isSplash, setIsSplash] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 2280);
  }, []);
  return (
    <SplashContainer className={isSplash ? "active-splash" : "inactive-splash"}>
      <SplashTopTextGroup>
        <SplashTextLineLT>
          <SplashImgUnit src={splashImg1} />
          <SplashImgUnit src={splashImg2} />
          <SplashImgUnit src={splashImg1} />
          <SplashImgUnit src={splashImg2} />
        </SplashTextLineLT>
        <SplashTextLineRT>
          <SplashImgUnit src={splashImg2} />
          <SplashImgUnit src={splashImg1} />
          <SplashImgUnit src={splashImg2} />
          <SplashImgUnit src={splashImg1} />
        </SplashTextLineRT>
      </SplashTopTextGroup>
      <SplashMiddleGroup>
        <SplashMainImgUnit alt="logo" src={logo} />
      </SplashMiddleGroup>
      <SplashBottomTextGroup>
        <SplashTextLineLB>
          <SplashImgUnit src={splashImg1} />
          <SplashImgUnit src={splashImg2} />
          <SplashImgUnit src={splashImg1} />
          <SplashImgUnit src={splashImg2} />
        </SplashTextLineLB>
        <SplashTextLineRB>
          <SplashImgUnit src={splashImg2} />
          <SplashImgUnit src={splashImg1} />
          <SplashImgUnit src={splashImg2} />
          <SplashImgUnit src={splashImg1} />
        </SplashTextLineRB>
      </SplashBottomTextGroup>
    </SplashContainer>
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
  z-index: 2;
  position: relative;
  background-color: #e65b90;
  width: 100%;
  height: 100vh !important;
  display: ${(props) =>
    props.className === "active-splash" ? "flex" : "none"};
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
  text-align: center;
  margin-top: 40vh;
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

const SplashImgUnit = styled.img`
  width: 130px;
`;

const SplashMainImgUnit = styled.img`
  width: 200px;
`;
