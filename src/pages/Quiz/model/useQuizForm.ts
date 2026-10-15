import { useForm, useWatch } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import type { QuizFormValues } from "@/pages/Quiz/ui/QuizPage.tsx";
import { useEffect } from "react";
import { setQuizParams } from "@/pages/Quiz/model/quizSlice.ts";
import { useAppDispatch } from "@/shared/lib/hooks.ts";

export const useQuizForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const methods = useForm<QuizFormValues>({
    defaultValues: {
      specialization: Number(searchParams.get("specialization") ?? 11),
      skills: searchParams.get("skills")?.split(",").map(Number) ?? [],
      complexity: searchParams.get("complexity")?.split(",").map(Number) ?? [],
      limit: Number(searchParams.get("limit") ?? 1),
    },
  });

  function onSubmit(data: QuizFormValues) {
    dispatch(setQuizParams(data));
    navigate("/quiz/questions", {
      state: data,
    });
  }

  const [specialization, skills, complexity, limit] = useWatch({
    control: methods.control,
    name: ["specialization", "skills", "complexity", "limit"],
  });

  useEffect(() => {
    const params = new URLSearchParams();

    if (specialization !== null) {
      params.set("specialization", String(specialization));
    }

    if (skills.length > 0) {
      params.set("skills", skills.join(","));
    }

    if (complexity.length > 0) {
      params.set("complexity", complexity.join(","));
    }

    if (limit >= 1) {
      params.set("limit", String(limit));
    }

    setSearchParams(params, {
      replace: true,
    });
  }, [specialization, skills, complexity, limit, setSearchParams]);

  return { methods, onSubmit };
};
