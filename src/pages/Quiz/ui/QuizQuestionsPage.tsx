import { useQuizQuestions } from "@/pages/Quiz/model/useQuizQuestions.ts";
import { useNavigate } from "react-router-dom";
import { HtmlContent } from "@/shared/ui/HtmlContent";
import styles from "./Quiz.module.css";
import ArrowRight from "@/shared/assets/icons/arrowRight.svg?react";
import ThumbsUp from "@/shared/assets/icons/thumbsUp.svg?react";

export default function QuizQuestionsPage() {
  const {
    questions,
    currentQuestion,
    isQuizQuestionsLoading,
    isQuizQuestionsError,

    handlePrevQuestion,
    handleNextQuestion,
    isPrevDisabled,
    isNextDisabled,
    currentQuestionCount,

    openAnswer,
    answerRef,
    heightAnswer,
    setOpenAnswer,

    handleAnswerKnown,
    handleAnswerUnknown,

    currentAnswer,
  } = useQuizQuestions();

  const progress = (currentQuestionCount / questions.length) * 100;

  const navigate = useNavigate();

  const isFinishDisabled = !isNextDisabled || currentAnswer?.answer === undefined;

  if (isQuizQuestionsLoading) {
    return <p>Загрузка...</p>;
  }
  if (!currentQuestion || isQuizQuestionsError) {
    return (
      <div className={styles.quizWrapper}>
        <button
          className={styles.navBackBtn}
          onClick={() => navigate("/quiz")}
        >
          <ArrowRight className={styles.navBackIcon} />
          Назад
        </button>
        <p>Ошибка при загрузке вопросов</p>
      </div>
    );
  }

  return (
    <div className={styles.quizPageWrap}>
      <div className={styles.quizWrapper}>
        <div className={styles.progressbarText}>
          <h2 className={styles.progressbarTitle}>Вопросы собеседования</h2>
          <div className={styles.progressbarCounter}>
            <span>{currentQuestionCount}</span>/<span>{questions.length}</span>
          </div>
        </div>
        <span
          className={styles.progressbar}
          style={
            {
              "--progressbarWidth": `${progress}%`,
            } as React.CSSProperties
          }
        ></span>
      </div>
      <div className={styles.quizWrapper}>
        <div className={styles.questionsNav}>
          <button
            disabled={isPrevDisabled}
            className={`${styles.quizNavBtn} ${isPrevDisabled ? styles.disabled : ""}`}
            onClick={handlePrevQuestion}
          >
            <ArrowRight className={`${styles.quizBtnIcon} ${styles.left}`} />
            Назад
          </button>
          <button
            disabled={isNextDisabled}
            className={`${styles.quizNavBtn} ${(isNextDisabled || currentAnswer === undefined) && styles.disabled}`}
            onClick={handleNextQuestion}
          >
            Далее
            <ArrowRight className={styles.quizBtnIcon} />
          </button>
        </div>
        <div className={styles.quizQuestionContent}>
          <div className={styles.quizQuestion}>
            <div className={styles.quizQuestionAnswer}>
              <h2 className={styles.questionTitle}>{currentQuestion.title}</h2>
              <div
                ref={answerRef}
                className={styles.answerWrapper}
                style={{
                  height: `${heightAnswer}px`,
                }}
              >
                <HtmlContent answer={currentQuestion.shortAnswer} />
              </div>
              <button
                className={`${styles.showAnswer} ${openAnswer ? styles.opened : ""}`}
                onClick={() => setOpenAnswer((prev) => !prev)}
              >
                {openAnswer ? "Скрыть" : "Посмотреть ответ"}
              </button>
            </div>
            <div className={styles.quizAnwerBtns}>
              <button
                className={`${styles.answerBtn} ${styles.answerBtnDown} ${currentAnswer?.answer === "UNKNOWN" ? styles.active : ""}`}
                onClick={handleAnswerUnknown}
              >
                <ThumbsUp />
                Не знаю
              </button>
              <button
                className={`${styles.answerBtn} ${currentAnswer?.answer === "KNOWN" ? styles.active : ""}`}
                onClick={handleAnswerKnown}
              >
                <ThumbsUp />
                Знаю
              </button>
            </div>
          </div>
          {currentQuestion?.imageSrc && (
            <img
              className={styles.quizQuestionImg}
              src={currentQuestion.imageSrc}
              alt=""
            />
          )}
        </div>
        {}
        <button
          disabled={isFinishDisabled}
          className={`${styles.finishQuizBtn} ${isFinishDisabled ? styles.disabled : ""}`}
          onClick={() => navigate("/quiz/statistic")}
        >
          Завершить
        </button>
      </div>
    </div>
  );
}
