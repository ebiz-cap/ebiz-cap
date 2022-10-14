import { useState } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { setIsGps } from "store/mobUserSearchIsGps";
import "./TypeToggleBtn.css";

const TypeToggleBtn = (): JSX.Element => {
  // 리덕스: isGps
  const isGps = useSelector((state: RootState) => {
    return state.mobUserSearchIsGps.value;
  });
  const dispatch = useDispatch();
  const setIsGpsCall = (isGpsOrNot: boolean) => {
    dispatch(setIsGps(isGpsOrNot));
  };

  return (
    <ToggleContainer className="toggle-container">
      <BtnWrapper>
        <TypeCircle className={isGps ? "listMode" : "gpsMode"} />
        <TypeText1
          className={isGps ? "offModeText" : "onModeText"}
          onClick={() => {
            setIsGpsCall(false);
            console.log("no gps");
          }}
        >
          스타일
        </TypeText1>

        <TypeText2
          className={isGps ? "onModeText" : "offModeText"}
          onClick={() => {
            setIsGpsCall(true);
            console.log("yes gps");
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
  margin-right: 6.5em;
  z-index: 1;
`;

const TypeText2 = styled.div`
  position: absolute;
  padding-top: 4px;
  margin-left: 6.5em;
  z-index: 1;
`;

const TypeCircle = styled.div`
  height: 80%;
  margin-top: 3px;
  width: 90px;
  background-color: #fab8ff;
  border-radius: 1.5em;
  position: relative;
  z-index: 0;
`;

const ToggleContainer = styled.div`
  display: flex;
`;
const BtnWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 30px;
  display: flex;
  border-color: #adadad !important;
  border-style: solid;
  border-width: 1px;
  border-radius: 1.5em;
  margin: auto;
  margin-top: 5%;
  justify-content: space-evenly;
`;

export default TypeToggleBtn;
