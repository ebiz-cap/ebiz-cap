import React from "react";
import { SignInputLabel, SignFormControl, BootstrapInput } from "../components";
import styled from "styled-components";
import { STYLED_PADDING_VALUE } from "pages/components/CustomBox";
import { STYLED_BTN_FULLWIDTH_VALUE } from "pages/components/CustomBtn";

const SignUp = (): JSX.Element => {
  return (
    <SignUpContainer style={{ marginTop: "10px", marginBottom: "10px" }}>
      <SignFormControl variant="standard">
        <SignInputLabel shrink htmlFor="email-input">
          이메일
        </SignInputLabel>
        <BootstrapInput id="email-input" placeholder="이메일을 입력해 주세요" />
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
      <SignFormControl variant="standard">
        <SignInputLabel shrink htmlFor="passwordConfirm-input">
          비밀번호 재확인
        </SignInputLabel>
        <BootstrapInput
          id="passwordConfirm-input"
          placeholder="동일한 비밀번호를 입력해 주세요"
          type="password"
        />
      </SignFormControl>
      <SignUpBtn>회원가입</SignUpBtn>
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpBtn = styled.div`
  ${STYLED_BTN_FULLWIDTH_VALUE}
  margin-top: 20px;
`;
const SignUpContainer = styled.div`
  ${STYLED_PADDING_VALUE};
  margin-top: 10px;
  margin-bottom: 10px;
`;
