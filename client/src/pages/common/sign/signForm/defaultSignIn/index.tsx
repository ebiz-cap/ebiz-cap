import { SignInputLabel, SignFormControl, BootstrapInput } from "../components";
//
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
//
import styled from "styled-components";
import { STYLED_BTN_FULLWIDTH_VALUE } from "pages/components/CustomBtn";

const DefaultSignIn = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default DefaultSignIn;

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
