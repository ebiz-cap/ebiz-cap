import { configureStore } from "@reduxjs/toolkit";
import mobUserFooterSlice from "./mobUserFooterSlice";

const store = configureStore({
  reducer: {
    mobUserFooter: mobUserFooterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
