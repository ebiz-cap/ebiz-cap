import { createSlice } from "@reduxjs/toolkit";
// ref: https://velog.io/@whljm1003/redux-toolkit%EB%A6%AC%EB%8D%95%EC%8A%A4-%ED%88%B4%ED%82%B7-%EC%82%AC%EC%9A%A9%EB%B2%95

enum CardActiveType {
  user = 0,
  designer = 1,
}

type InitialState = {
  id: number;
  value: CardActiveType;
};

const initialState: InitialState = {
  id: 1,
  value: 0,
};

const isUserCardActiveSlice = createSlice({
  name: "isUserCardActive",
  initialState,
  reducers: {
    //리듀서란 해당 슬라이스 state 업데이트 메서드

    setIsUserCardActive: (state, action) => {
      state.value = action.payload;
      // 위의 action.payload는 해당 리듀서가 사용현장에서 받는 인자값임
    },
  },
});

export default isUserCardActiveSlice;
export const { setIsUserCardActive } = isUserCardActiveSlice.actions; //현장에서 import하여 바로 사용
