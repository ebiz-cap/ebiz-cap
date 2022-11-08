import { SignInputLabel, SignFormControl, BootstrapInput } from "../components";
//
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
//
import styled from "styled-components";
import { STYLED_BTN_FULLWIDTH_VALUE } from "pages/components/CustomBtn";
import { StyledTitleH2 } from "pages/components/CustomText";
import SocialSign from "../../socialSign";
import { STYLED_PADDING_VALUE } from "pages/components/CustomBox";

const SignIn = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div>
      <StyledTitleH2>로그인 해주세요</StyledTitleH2>
      <SocialSignContainer>
        <SocialSign />
      </SocialSignContainer>
      <DefaultSignContainer>
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <SignFormControl variant="standard">
            <SignInputLabel shrink htmlFor="email-input">
              이메일
            </SignInputLabel>
            <BootstrapInput
              id="email-input"
              placeholder="이메일을 입력해 주세요"
            />
          </SignFormControl>
          <SignFormControl variant="standard">
            <SignInputLabel shrink htmlFor="password-input">
              비밀번호
            </SignInputLabel>
            <BootstrapInput
              id="password-input"
              placeholder="비밀번호를 입력해 주세요"
              type="password"
            />
          </SignFormControl>
          <SignInBtn>로그인</SignInBtn>
        </div>
      </DefaultSignContainer>
      <NavigateToSignUp>
        회원이 아니신가요?
        <u
          onClick={() => {
            navigate("signUp");
          }}
        >
          간편하게 회원가입하기
        </u>
      </NavigateToSignUp>
    </div>
  );
};

export default SignIn;

export const SignInPAD = (): JSX.Element => {
  return (
    <SignInContainer>
      <SignIn />
    </SignInContainer>
  );
};

const SignInContainer = styled.div`
  ${STYLED_PADDING_VALUE}
`;
const SocialSignContainer = styled.div`
  margin-bottom: 10px;
`;

const SignInBtn = styled.div`
  ${STYLED_BTN_FULLWIDTH_VALUE}
  margin-top:15px;
`;

const NavigateToSignUp = styled.div`
  font-size: 13px;
  padding: 12px 24px;

  & > u {
    color: #ff5491;
    margin-left: 3px;
  }
`;

const DefaultSignContainer = styled.div`
  border-top: 1px solid #f1f3f5;
  border-bottom: 1px solid #f1f3f5;
  margin: 16px 0;
  padding-bottom: 12px;
`;
