import { createSlice } from "@reduxjs/toolkit";
// ref: https://velog.io/@whljm1003/redux-toolkit%EB%A6%AC%EB%8D%95%EC%8A%A4-%ED%88%B4%ED%82%B7-%EC%82%AC%EC%9A%A9%EB%B2%95

enum UserMyTabType {
  history = 1,
  designer = 2,
  third = 3,
}
type InitialState = {
  id: number;
  value: UserMyTabType;
};

const initialState: InitialState = {
  id: 1,
  value: 1, //초기값
};

const UserMypageTabSlice = createSlice({
  name: "userMypageTab",
  initialState,
  reducers: {
    //리듀서란 해당 슬라이스state 업데이트 메서드

    setUserMypageTab: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default UserMypageTabSlice;
export const { setUserMypageTab } = UserMypageTabSlice.actions; //현장에서 import하여 바로 사용
