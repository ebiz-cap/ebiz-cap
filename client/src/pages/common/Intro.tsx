// 앱 첫 접속시 소개 페이지 ( 쿠키 반영구로 남기고 재접시 안뜨게 )
import styled from "styled-components";

const Intro = () => {
  return (
    <div>
      <StyledButton>good</StyledButton>
      <button value={"good"}>good</button>
    </div>
  );
};

const StyledButton = styled.button`
  background-color: red;
`;

export default Intro;
