import { configureStore } from "@reduxjs/toolkit";
import UserTrend from "pages/user/userTrend";
import mobUserFooterSlice from "./mobUserFooterSlice";
import mobUserSearchIsGpsSlice from "./mobUserSearchIsGpsSlice";
import mobUserTrendIsCurationSlice from "./mobUserTrendIsCurationSlice";
import UserTrendIsMySlice from "./UserTrendIsMy";

const store = configureStore({
  reducer: {
    mobUserFooter: mobUserFooterSlice.reducer,
    mobUserSearchIsGps: mobUserSearchIsGpsSlice.reducer,
    mobUserTrendIsCuration: mobUserTrendIsCurationSlice.reducer,
    userTrendIsMy: UserTrendIsMySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
