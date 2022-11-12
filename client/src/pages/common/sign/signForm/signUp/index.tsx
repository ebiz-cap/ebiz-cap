import { SignInputLabel, SignFormControl, BootstrapInput } from "../components";
import styled from "styled-components";
import { STYLED_PADDING_VALUE } from "pages/components/CustomBox";
import { STYLED_BTN_FULLWIDTH_VALUE } from "pages/components/CustomBtn";
import { BORDERLINE_TB_VALUE } from "pages/components/LAYOUT";
import SocialSign from "../../socialSign";
import { StyledTitleH2 } from "pages/components/CustomText";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <SignUpContainer style={{ marginTop: "10px" }}>
      <StyledTitleH2>회원가입을 해주세요</StyledTitleH2>
      <SocialSign />
      <SignUpFormBox>
        <SignFormControl variant="standard">
          <SignInputLabel shrink htmlFor="nickName-input">
            닉네임
          </SignInputLabel>
          <BootstrapInput
            id="nickName-input"
            placeholder="이메일을 입력해 주세요"
          />
        </SignFormControl>
        <SignFormControl variant="standard">
          <SignInputLabel shrink htmlFor="nickName-input">
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
        <SignUpBtn
          onClick={() => {
            axios
              .post("http://localhost:8000/user/register", {
                id: "a",
                pw: "b",
                name: "c",
              })
              .then((res) => {
                console.log(res);
              });
            navigate("./success");
          }}
        >
          가입하기
        </SignUpBtn>
      </SignUpFormBox>
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
`;

const SignUpFormBox = styled.div`
  ${BORDERLINE_TB_VALUE}
  padding-bottom: 15px;
`;
