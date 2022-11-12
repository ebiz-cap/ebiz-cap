import { createSlice } from "@reduxjs/toolkit";
// ref: https://velog.io/@whljm1003/redux-toolkit%EB%A6%AC%EB%8D%95%EC%8A%A4-%ED%88%B4%ED%82%B7-%EC%82%AC%EC%9A%A9%EB%B2%95

type SignUpInfo = {
  nickName: String;
  email: String;
};
type InitialState = {
  id: number;
  value: SignUpInfo;
};

const initialState: InitialState = {
  id: 1,
  value: {
    nickName: "",
    email: "",
  }, //초기값
};

const signUpInfoSlice = createSlice({
  name: "isDesigner",
  initialState,
  reducers: {
    //리듀서란 해당 슬라이스 state 업데이트 메서드
    setSignUpInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default signUpInfoSlice;
export const { setSignUpInfo } = signUpInfoSlice.actions; //현장에서 import하여 바로 사용
