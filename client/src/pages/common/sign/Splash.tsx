// 앱 첫 접속시 소개 페이지 ( 쿠키 반영구로 남기고 재접시 안뜨게 )
import styled from "styled-components";

const Splash = () => {
  return (
    <div>
      <SplashContainer>good</SplashContainer>
    </div>
  );
};

export default Splash;

const SplashContainer = styled.div`
  position: relative;
  background-color: red;
  width: 100%;
  height: 100vh;
`;
