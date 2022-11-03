import { createSlice } from "@reduxjs/toolkit";
// ref: https://velog.io/@whljm1003/redux-toolkit%EB%A6%AC%EB%8D%95%EC%8A%A4-%ED%88%B4%ED%82%B7-%EC%82%AC%EC%9A%A9%EB%B2%95

type IsLoggedNDesigner = {
  isLoggedIn: boolean;
  isDesigner: boolean;
};

type InitialState = {
  id: number;
  value: IsLoggedNDesigner;
};

const initialState: InitialState = {
  id: 1,
  value: {
    isLoggedIn: false,
    isDesigner: false,
  }, //초기값
};

const isLoggedNDesignerSlice = createSlice({
  name: "isDesigner",
  initialState,
  reducers: {
    //리듀서란 해당 슬라이스 state 업데이트 메서드
    setIsLogged: (state, action) => {
      state.value.isLoggedIn = action.payload;
    },
    setIsDesigner: (state, action) => {
      state.value.isDesigner = action.payload;
      // 위의 action.payload는 해당 리듀서가 사용현장에서 받는 인자값임
    },
  },
});

export default isLoggedNDesignerSlice;
export const { setIsDesigner, setIsLogged } = isLoggedNDesignerSlice.actions; //현장에서 import하여 바로 사용
