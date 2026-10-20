import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "@/shared/api/baseApi.ts";
import quizStateReducer from "@/pages/Quiz/model/quizSlice.ts";
import { authReducer } from "@/features/Auth/model/authSlice.ts";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  quizState: quizStateReducer,
  auth: authReducer,
});
