import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { setIsCuration } from "store/user/mobUserTrendIsCurationSlice";

import "./TypeToggleBtn.css";

const TypeToggleBtn = (): JSX.Element => {
  // 리덕스: isCuration
  const isCuration = useSelector((state: RootState) => {
    return state.mobUserTrendIsCuration.value;
  });
  const dispatch = useDispatch();
  const setIsCurationCall = (isCurationOrNot: boolean) => {
    dispatch(setIsCuration(isCurationOrNot));
  };

  return (
    <ToggleContainer className="toggle-container">
      <BtnWrapper>
        <TypeCircle className={isCuration ? "curationMode" : "trendMode"} />
        <TypeText1
          className={isCuration ? "offModeText" : "onModeText"}
          onClick={() => {
            setIsCurationCall(false);
            console.log("no Curation");
          }}
        >
          트렌드
        </TypeText1>

        <TypeText2
          className={isCuration ? "onModeText" : "offModeText"}
          onClick={() => {
            setIsCurationCall(true);
            console.log("yes Curation");
          }}
        >
          큐레이션
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
  position: fixed;
  z-index: 5;
  bottom: 7em;
  margin: 0 auto;
  width: 100%;
`;
const BtnWrapper = styled.div`
  background-color: white;
  position: relative;
  width: 200px;
  height: 30px;
  display: flex;
  border-color: #adadad !important;
  border-style: solid;
  border-width: 1px;
  border-radius: 1.5em;
  margin: auto;
  margin-top: calc(4vh);
  justify-content: space-evenly;
`;

export default TypeToggleBtn;
