//
import { alpha, styled as Styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";

import { StyledEngineProvider } from "@mui/material/styles";
import React from "react";

const DefaultSignIn = (): JSX.Element => {
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
        <div
          style={{
            marginTop: "15px",
            backgroundColor: "#FF5491",
            textAlign: "center",
            padding: "10px",
            borderRadius: "4px",
            color: "white",
            fontSize: "16px",
          }}
        >
          로그인
        </div>
      </div>
      <div
        style={{
          fontSize: "13px",
          padding: "12px 24px",
        }}
      >
        회원이 아니신가요?
        <u
          style={{
            color: "#FF5491",

            marginLeft: "3px",
          }}
          onClick={() => {}}
        >
          간편하게 회원가입하기
        </u>
      </div>
    </React.Fragment>
  );
};

export default DefaultSignIn;

const SignInputLabel = Styled(InputLabel)(() => ({
  color: "#929CA7 !important",
  fontSize: "16px",
  fontFamily: "Noto Sans KR",
}));
const SignFormControl = Styled(FormControl)(() => ({
  marginTop: "16px",
  width: "100%",
}));

const BootstrapInput = Styled(InputBase)(({ theme }: any) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },

  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 13,
    fontWeight: "bold",
    color: "#495057",
    padding: "8px 10px",
    width: "100%",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha("#FF5491", 0.25)} 0 0 0 0.2rem`,
      borderColor: "#FF5491",
    },
  },
}));
