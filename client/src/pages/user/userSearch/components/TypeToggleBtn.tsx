import { useState } from "react";
import styled from "styled-components";

const TypeToggleBtn = (): JSX.Element => {
  const [isGps, setIsGps] = useState(false);
  return (
    <ToggleContainer>
      <BtnWrapper className="toggle-container">
        <TypeText>스타일</TypeText>
        <TypeText className="typeText">내주변</TypeText>
      </BtnWrapper>
    </ToggleContainer>
  );
};

const TypeText = styled.div`
  padding-top: 4px;
`;
const ToggleContainer = styled.div`
  display: flex;
`;
const BtnWrapper = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  flex-direction: 
  border-color: gray;
  border-style: solid;
  border-width: 1px;
  border-radius: 1.5em;
  margin: auto;
  margin-top: 90%;
  justify-content:space-evenly;
`;
const TypeBtn = styled.div`
  background-color: #fab8ff;
  border-radius: 1.5em;
  width: 100px;
`;

export default TypeToggleBtn;
