export function getQuestionsWord(count: number): string {
  const lastTwoDigits = count % 100;
  const lastDigit = count % 10;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return "вопросов";
  }

  if (lastDigit === 1) {
    return "вопрос";
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return "вопроса";
  }

  return "вопросов";
}