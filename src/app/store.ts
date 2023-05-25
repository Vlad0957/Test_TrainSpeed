import { configureStore } from "@reduxjs/toolkit";
import speedReducer from "../features/train/train-slice";

export const store = configureStore({
  reducer: {
    train: speedReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
