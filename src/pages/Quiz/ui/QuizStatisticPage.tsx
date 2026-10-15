import styles from "./Quiz.module.css";
import ThumbsUp from "@/shared/assets/icons/thumbsUp.svg?react";
import ArrowRight from "@/shared/assets/icons/arrowRight.svg?react";
import questionImage from "./questionImage.png";
import { useNavigate } from "react-router-dom";
import { useQuizQuestions } from "@/pages/Quiz/model/useQuizQuestions.ts";

export default function QuizStatisticPage() {
  const { questions, answers } = useQuizQuestions();

  const navigate = useNavigate();

  return (
    <>
      <button
        className={styles.navBackBtn}
        onClick={() => navigate("/quiz")}
      >
        <ArrowRight className={styles.navBackIcon} />
        Назад
      </button>
      <div className={styles.quizWrapper}>
        <h2 className={styles.quizStatsQuestionsTitle}>Список пройденных вопросов собеседования</h2>
        <ul className={styles.quizStatsList}>
          {questions.map((question) => {
            const currentAnswer = answers.find((answer) => answer.questionId === question?.id);
            return (
              <li
                className={styles.quizStatsQuestionCard}
                key={question.id}
              >
                {question.imageSrc !== null ? (
                  <img
                    className={styles.quizCardImg}
                    src={question.imageSrc}
                    alt=""
                  />
                ) : (
                  <img
                    className={styles.quizCardImg}
                    src={questionImage}
                    alt=""
                  />
                )}
                <div className={styles.quizStatsQuestionCardContent}>
                  <h3 className={styles.quizQuestionCardTitle}>{question.title}</h3>
                  <div className={styles.quizStatsQuestionAnswer}>
                    {currentAnswer?.answer === "KNOWN" ? (
                      <div className={styles.quizStatsQuestionAnswerKnown}>
                        <ThumbsUp />
                        Знаю
                      </div>
                    ) : (
                      <div className={styles.quizStatsQuestionAnswerUnknown}>
                        <ThumbsUp />
                        Не знаю
                      </div>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
