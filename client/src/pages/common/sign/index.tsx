import styled, { css, keyframes } from "styled-components";
import UserTypeSelect from "./UserTypeSelect";

//
import Splash from "./splash/Splash";
import { flexbox } from "@mui/system";
import { useSelector } from "react-redux";
import { RootState } from "store";

import { useState } from "react";
//
import img_social_kakao from "../../../env/imgsrc/socialSign/kakao_login_medium_wide.png";
import SocialGoogleBtn from "./social/google";
import DefaultSignIn from "./defaultSignIn";

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
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "100%",
        }}
      >
        <TypeContainer className={isSelected ? "selected" : "notSelected"}>
          <NotifyTextType>유저 타입을 선택해주세요</NotifyTextType>
          <UserTypeSelect />
          <ConfirmBtn
            className={isSelected ? "selected" : "notSelected"}
            onClick={onClickTypeConfirm}
          >
            <div style={{ paddingTop: "10px", fontSize: "20px" }}>확인</div>
          </ConfirmBtn>
        </TypeContainer>

        <SignContainer className={isSelected ? "selected" : "notSelected"}>
          <NotifyTextType>로그인 해주세요</NotifyTextType>
          <SocialSignContainer>
            <img src={img_social_kakao} alt="social_kakao_btn" />
            <SocialGoogleBtn />
          </SocialSignContainer>
          <DefaultSignContainer>
            <DefaultSignIn />
          </DefaultSignContainer>
        </SignContainer>
      </div>
    </SignBody>
  );
};

const COLOR_PINK = "#EC4899";
const COLOR_PURPLE = "#8B5CF6";
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
  text-align: center;
  transition: all 0.5s ease;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  background-color: ${COLOR_PURPLE};
  color: white;
  width: 80px;
  height: 50px;
  border-radius: 1rem;
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
  /* background-color: purple; */
  border-radius: 1rem;
  padding: 40px 36px 28px 36px;
`;

const SocialSignContainer = styled.div`
  border-radius: 2rem;
  margin-bottom: 10px;
`;

const DefaultSignContainer = styled.div`
  border-top: 1px solid #f1f3f5;
  border-bottom: 1px solid #f1f3f5;
  margin: 16px 0;
  padding-bottom: 12px;
`;
const NotifyTextType = styled.h2`
  margin-bottom: 30px;
`;

export default Sign;
