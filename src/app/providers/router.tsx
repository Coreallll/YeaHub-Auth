import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "@/app/layouts/MainLayout.tsx";
import { LoginPage } from "@/pages/Login";
import { RegisterPage } from "@/pages/Register";
import { DetailedCollectionPage, DetailedQuestionPage } from "@/pages/DetailedPage";
import { NotFoundPage } from "@/pages/NotFound";
import { CollectionsPage } from "@/pages/Collections";
import { QuizPage, QuizQuestionsPage, QuizStatisticPage } from "@/pages/Quiz";
import AuthLayout from "@/app/layouts/AuthLayout/AuthLayout.tsx";
import { QuestionsPage } from "@/pages/Questions";
import { ForgotPasswordPage } from "@/pages/ForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Navigate
            to="/collections"
            replace
          />
        ),
      },
      {
        path: "/Questions",
        element: <QuestionsPage />,
      },
      {
        path: "/Collections",
        element: <CollectionsPage />,
      },
      {
        path: "/Collections/:collectionId",
        element: <DetailedCollectionPage />,
      },
      {
        path: "/Collections/:collectionId/Questions/:questionId",
        element: <DetailedQuestionPage />,
      },
      {
        path: "/quiz",
        element: <QuizPage />,
      },
      {
        path: "/quiz/Questions",
        element: <QuizQuestionsPage />,
      },
      {
        path: "/quiz/statistic",
        element: <QuizStatisticPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: (
          <Navigate
            to="login"
            replace
          />
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
      },
    ],
  },
]);
