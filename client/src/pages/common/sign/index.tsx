import styled, { css, keyframes } from "styled-components";
import UserTypeSelect from "./UserTypeSelect";

//
import Splash from "./splash/Splash";
import { flexbox } from "@mui/system";
import { useSelector } from "react-redux";
import { RootState } from "store";

import { useState } from "react";

import { STYLED_BTN_DONGGLE_VALUE } from "pages/components/CustomBtn";
//
import SocialSignIn from "./socialSignIn";
import DefaultSignIn from "./signForm/defaultSignIn";

//
import { StyledTitleH2 } from "pages/components/CustomText";
import { STYLED_PADDING_VALUE } from "pages/components/CustomBox";

const Sign = (): JSX.Element => {
  const [isSelected, setIsSelected] = useState(false);
  const onClickTypeConfirm = () => {
    setIsSelected(!isSelected);
  };

  const isUserActive = useSelector((state: RootState) => {
    return state.isUserCardActive.value;
  });

  return (
    <SignBody className={isUserActive ? "designer" : "user"}>
      <Splash />

      <SignInContentsContainer>
        <TypeContainer className={isSelected ? "selected" : "notSelected"}>
          <StyledTitleH2>유저 타입을 선택해주세요</StyledTitleH2>
          <UserTypeSelect />
          <ConfirmBtn
            className={isSelected ? "selected" : "notSelected"}
            onClick={onClickTypeConfirm}
          >
            확인
          </ConfirmBtn>
        </TypeContainer>

        <SignContainer className={isSelected ? "selected" : "notSelected"}>
          <StyledTitleH2>로그인 해주세요</StyledTitleH2>
          <SocialSignContainer>
            <SocialSignIn />
          </SocialSignContainer>
          <DefaultSignContainer>
            <DefaultSignIn />
          </DefaultSignContainer>
        </SignContainer>
      </SignInContentsContainer>
    </SignBody>
  );
};

//
const SignBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100vh;
  z-index: 1;
  transition: all 0.5s ease;
`;

const SignInContentsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  max-width: 400px;
`;
//
const selectedTypeContTrans = keyframes`
  from {
    opacity: 100%;
    height: 100%;
  }
  to {
    opacity: 0%;
    height: 0%;
    margin-top: 0%;
  }
`;

const TypeContainer = styled.div`
  ${(props) =>
    props.className === "selected"
      ? css`
          animation: ${selectedTypeContTrans} 0.2s forwards ease-in;
        `
      : css``};

  margin-top: 70px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ConfirmBtn = styled.div`
  margin-top: 100px;
  ${STYLED_BTN_DONGGLE_VALUE};
`;

//
const selectedSignContTrans = keyframes`
  from {
    opacity: 0%;
    height: 0%;
  }
  to {
    opacity: 100%;
    height: 100%;
  }
`;

const SignContainer = styled.div`
  ${(props) =>
    props.className === "selected"
      ? css`
          display: flex;
          animation: ${selectedSignContTrans} 0.4s forwards ease-in;
        `
      : css`
          display: none;
        `};
  flex-direction: column;
  height: 0%;
  ${STYLED_PADDING_VALUE};
`;

const SocialSignContainer = styled.div`
  margin-bottom: 10px;
`;

const DefaultSignContainer = styled.div`
  border-top: 1px solid #f1f3f5;
  border-bottom: 1px solid #f1f3f5;
  margin: 16px 0;
  padding-bottom: 12px;
`;

export default Sign;
