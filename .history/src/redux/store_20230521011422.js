import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
console.log(userReducer);
export const store = configureStore({
  reducer: {},
});
