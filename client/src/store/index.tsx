import { configureStore } from "@reduxjs/toolkit";

import isLoggedNDesignerSlice from "./common/isLoggedNDesignerSlice";

import mobUserFooterSlice from "./user/mobUserFooterSlice";
import mobUserSearchIsGpsSlice from "./user/mobUserSearchIsGpsSlice";
import mobUserTrendIsCurationSlice from "./user/mobUserTrendIsCurationSlice";
import UserTrendIsMySlice from "./user/UserTrendIsMy";
import UserMypageTabSlice from "./user/UserMypageTabSlice";

const store = configureStore({
  reducer: {
    // common
    isLoggedNDesigner: isLoggedNDesignerSlice.reducer,
    // user
    mobUserFooter: mobUserFooterSlice.reducer,
    mobUserSearchIsGps: mobUserSearchIsGpsSlice.reducer,
    mobUserTrendIsCuration: mobUserTrendIsCurationSlice.reducer,
    userTrendIsMy: UserTrendIsMySlice.reducer,
    userMypageTab: UserMypageTabSlice.reducer,

    // designer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
