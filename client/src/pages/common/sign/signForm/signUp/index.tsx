import { SignInputLabel, SignFormControl, BootstrapInput } from "../components";
import styled from "styled-components";
import { STYLED_PADDING_VALUE } from "pages/components/CustomBox";
import { STYLED_BTN_FULLWIDTH_VALUE } from "pages/components/CustomBtn";
import { BORDERLINE_TB_VALUE } from "pages/components/LAYOUT";
import SocialSign from "../../socialSign";
import { StyledTitleH2 } from "pages/components/CustomText";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import { RootState } from "store";
import { URL, PORT } from "env/proxy";
import React, { useState } from "react";
import { setSignUpInfo } from "store/common/signUpInfoSlice";

const SignUp = (): JSX.Element => {
  const navigate = useNavigate();

  const isDesigner = useSelector((state: RootState) => {
    return state.isLoggedNDesigner.value.isDesigner;
  });

  const dispatch = useDispatch();
  const setSignUpInfoCall = (signUpInfo: Object) => {
    dispatch(setSignUpInfo(signUpInfo));
    console.log("( signUp redux state Updated! )");
  };
  //
  const [userType, setUserType] = useState("customer");
  const [errMsg, setErrMsg] = useState("");

  //

  const [signUpData, setSignUpData] = useState({
    email: "",
    name: "",
    nickName: "",
    password: "",
    rePassword: "",
    // gender:"M",
    // age:00,
    // phoneNumber:1022970618,
  });

  const onChangeSignUpData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });

    console.log(`[업데이트 SignUpData]`);
  };

  const onClickSignUp = () => {
    if (isDesigner) {
      setUserType("designer");
    } else {
      setUserType("customer");
    }
    postSignUp(userType)
      .then((res: any) => {
        console.log(res);
        setSignUpInfoCall({
          nickName: res.data.value.nickName,
          email: res.data.value.email,
        });

        const MSG_SUCC = "[회원가입 요청 성공]";
        console.log(`${MSG_SUCC}:${res.data}`);

        alert(res.data.result);

        navigate("./success");
      })
      .catch((e) => {
        const MSG_FAIL = "[회원가입 요청 실패]";
        console.log(`${MSG_FAIL}:${e}`);
        setErrMsg(e.response.data.error);
      });
  };

  const postSignUp = async (userType: any) => {
    // console.log(`[postSignUpInfo]: ${userType},${URL},${PORT.node}`);

    return await axios.post(
      `${URL}${PORT.node}/${userType}/signUp`,
      signUpData
    );
  };

  return (
    <SignUpContainer style={{ marginTop: "10px" }}>
      <StyledTitleH2>회원가입을 해주세요</StyledTitleH2>
      <SocialSign />
      <SignUpFormBox>
        <SignFormControl variant="standard">
          <SignInputLabel shrink htmlFor="name-input">
            이름
          </SignInputLabel>
          <BootstrapInput
            id="name-input"
            placeholder="이름을 입력해 주세요"
            value={signUpData.name}
            autoFocus
            onChange={onChangeSignUpData}
            name="name"
          />
        </SignFormControl>
        <SignFormControl variant="standard">
          <SignInputLabel shrink htmlFor="nickName-input">
            닉네임
          </SignInputLabel>
          <BootstrapInput
            id="nickName-input"
            placeholder="닉네임 입력해 주세요"
            value={signUpData.nickName}
            onChange={onChangeSignUpData}
            name="nickName"
          />
        </SignFormControl>
        <SignFormControl variant="standard">
          <SignInputLabel shrink htmlFor="email-input">
            이메일
          </SignInputLabel>
          <BootstrapInput
            id="email-input"
            placeholder="이메일을 입력해 주세요"
            value={signUpData.email}
            onChange={onChangeSignUpData}
            name="email"
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
            value={signUpData.password}
            onChange={onChangeSignUpData}
            name="password"
          />
        </SignFormControl>
        <SignFormControl variant="standard">
          <SignInputLabel shrink htmlFor="repassword-input">
            비밀번호 재확인
          </SignInputLabel>
          <BootstrapInput
            id="repassword-input"
            placeholder="동일한 비밀번호를 입력해 주세요"
            type="password"
            value={signUpData.rePassword}
            onChange={onChangeSignUpData}
            name="rePassword"
          />
        </SignFormControl>
        <SignUpBtn
          onClick={() => {
            onClickSignUp();
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
