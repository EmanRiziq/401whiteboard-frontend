import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlicer";

export const store = configureStore({
  reducer: {
    Auth: authReducer
  }
})