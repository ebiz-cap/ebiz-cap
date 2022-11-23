import { SignInputLabel, SignFormControl, BootstrapInput } from "../components";
import $ from "jquery";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
//
import { useSelector, useDispatch } from "react-redux";
import { setIsLogged } from "store/common/isLoggedNDesignerSlice";

//
import styled from "styled-components";
import { STYLED_BTN_FULLWIDTH_VALUE } from "pages/components/CustomBtn";
import { StyledTitleH2 } from "pages/components/CustomText";
import SocialSign from "../../socialSign";
import { STYLED_PADDING_VALUE } from "pages/components/CustomBox";
import { RootState } from "store";
import axios from "axios";
import { URL, PORT } from "../../../../../env/proxy";
import { COLOR_PINK1 } from "pages/components/COLOR";

const SignIn = (): JSX.Element => {
  //
  const [cookies, setCookie] = useCookies(["userData"]);

  const setUserCookieCall = (userData: any) => {
    let now = new Date();
    let after2h = new Date();
    console.log(userData);
    after2h.setMinutes(now.getMinutes() + 120);
    setCookie("userData", userData, { path: "/", expires: after2h });
  };

  const navigate = useNavigate();
  const [signFormErrMsg, setSignFormErrMsg] = useState("");

  //
  const [errMsg, setErrMsg] = useState("");

  const dispatch = useDispatch();
  const isDesigner = useSelector((state: RootState) => {
    return state.isLoggedNDesigner.value.isDesigner;
  });

  const setIsLoggedCall = (isLoggedIn: boolean) => {
    dispatch(setIsLogged(isLoggedIn));
    console.log("logged!!!");
  };

  //
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const onChangeSignInData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value,
    });

    console.log("[업데이트 SignInData]");
  };

  const onClickSignIn = () => {
    if (signInData.email === "") {
      setSignFormErrMsg("이메일을 입력해주세요.");
      $("#email-input").focus();
      return;
    }

    if (signInData.password === "") {
      setSignFormErrMsg("비밀번호를 입력해주세요");
      $("password-input").focus();
      return;
    }

    signInReq()
      .then((res) => {
        console.log(res);
        alert(res.data.result);
        setUserCookieCall(res.data.value);
        navigateByUserType();
      })
      .catch((e) => {
        console.log(e);
        setErrMsg(e.response.data.fail);
        alert(`로그인 실패: ${errMsg}`);
      });
  };

  const signInReq = async () => {
    return await axios.post(
      `${URL}${PORT.node}/${isDesigner ? "designer" : "customer"}/signIn`,
      signInData
    );
  };

  const navigateByUserType = () => {
    setIsLoggedCall(true);
    if (isDesigner) {
      navigate("/designer/home");
      return;
    }
    navigate("/customer/home");
    return;
  };

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
              value={signInData.email}
              autoFocus
              onChange={onChangeSignInData}
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
              value={signInData.password}
              autoFocus
              onChange={onChangeSignInData}
              name="password"
            />
          </SignFormControl>
          <p style={{ color: COLOR_PINK1 }}>{signFormErrMsg}</p>
          <SignInBtn onClick={onClickSignIn}>로그인</SignInBtn>
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
