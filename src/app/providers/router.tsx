import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "@/app/layouts/Layout.tsx";
import CollectionsPage from "@/pages/Collections/ui/CollectionsPage.tsx";
import QuizPage from "@/pages/Quiz/ui/QuizPage.tsx";
import QuizQuestionsPage from "@/pages/Quiz/ui/QuizQuestionsPage.tsx";
import QuizStatisticPage from "@/pages/Quiz/ui/QuizStatisticPage.tsx";
import { DetailedCollectionPage } from "@/pages/DetailedPage/DetailedCollectionPage";
import { DetailedQuestionPage } from "@/pages/DetailedPage/DetailedQuestionPage";
import NotFoundPage from "@/pages/NotFound/ui/NotFoundPage.tsx";
import QuestionsPage from "@/pages/Questions/ui/QuestionsPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        path: "/questions",
        element: <QuestionsPage />,
      },
      {
        path: "/collections",
        element: <CollectionsPage />,
      },
      {
        path: "/collections/:collectionId",
        element: <DetailedCollectionPage />,
      },
      {
        path: "/collections/:collectionId/questions/:questionId",
        element: <DetailedQuestionPage />,
      },
      {
        path: "/quiz",
        element: <QuizPage />,
      },
      {
        path: "/quiz/questions",
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
]);
