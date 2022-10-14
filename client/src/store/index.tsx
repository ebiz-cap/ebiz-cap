import { configureStore } from "@reduxjs/toolkit";
import mobUserFooterSlice from "./mobUserFooterSlice";
import mobUserSearchIsGpsSlice from "./mobUserSearchIsGps";

const store = configureStore({
  reducer: {
    mobUserFooter: mobUserFooterSlice.reducer,
    mobUserSearchIsGps: mobUserSearchIsGpsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
