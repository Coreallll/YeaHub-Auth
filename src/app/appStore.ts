import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "@/shared/api/baseApi.ts";
import { saveQuizState } from "@/pages/Quiz/model/quizState.ts";
import { rootReducer } from "@/app/appReducer.ts";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

store.subscribe(() => {
  const quiz = store.getState().quizState;
  saveQuizState(quiz);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
