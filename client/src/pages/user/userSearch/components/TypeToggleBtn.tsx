import { useState } from "react";
import styled from "styled-components";
import "./TypeToggleBtn.css";
const TypeToggleBtn = (): JSX.Element => {
  const [isGps, setIsGps] = useState(false);

  return (
    <ToggleContainer>
      <BtnWrapper className="toggle-container">
        <TypeText1
          className={isGps ? "offModeText" : "onModeText"}
          onClick={() => {
            setIsGps(false);
            console.log("yes gps");
          }}
        >
          스타일
        </TypeText1>
        <TypeCircle className={isGps ? "listMode" : "gpsMode"} />
        <TypeText2
          className={isGps ? "onModeText" : "offModeText"}
          onClick={() => {
            setIsGps(true);
            console.log("no gps");
          }}
        >
          내주변
        </TypeText2>
      </BtnWrapper>
    </ToggleContainer>
  );
};

const TypeText1 = styled.div`
  position: absolute;
  padding-top: 4px;
  margin-left: 6.5em;
  z-index: 1;
`;

const TypeText2 = styled.div`
  position: absolute;
  padding-top: 4px;
  margin-right: 6.5em;
  z-index: 1;
`;

const TypeCircle = styled.div`
  background-color: #fab8ff;
  border-radius: 1.5em;
  width: 100px;
  position: relative;
  z-index: 0;
`;

const ToggleContainer = styled.div`
  display: flex;
`;
const BtnWrapper = styled.div`
  position:relative;
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

export default TypeToggleBtn;
