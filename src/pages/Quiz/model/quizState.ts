import type { QuizState } from "./quizSlice.ts";

export function loadQuizState(): QuizState | undefined {
  try {
    const saved = sessionStorage.getItem("quiz");

    if (!saved) {
      return undefined;
    }

    return JSON.parse(saved) as QuizState;
  } catch {
    sessionStorage.removeItem("quiz");
    return undefined;
  }
}
export function saveQuizState(state: QuizState) {
  try {
    sessionStorage.setItem("quiz", JSON.stringify(state));
  } catch (error) {
    console.error("Не удалось сохранить quiz state", error);
  }
}
