import gameLogic, { getRandomInt } from '../index.js';

// условия/описания игры
const gameCondition = 'Find the greatest common divisor of given numbers.';

const maxRandomNum = 100;

// логика вычислений
const getResultCalcGcd = (a, b) => {
  const firstNum = a;
  const secondNum = b;

  while (firstNum !== 0 && secondNum !== 0) {
    if (firstNum > secondNum) {
      firstNum %= secondNum;
    } else {
      secondNum %= firstNum;
    }
  }

  return firstNum + secondNum;
};

// формирование данных вопроса и корректного ответа
const getQusetionAndCorrectAnswer = () => {
  const firstNum = getRandomInt(0, maxRandomNum);
  const secondNum = getRandomInt(0, maxRandomNum);

  const question = `${firstNum} ${secondNum}`;

  const correctAnswer = getResultCalcGcd(firstNum, secondNum).toString();

  return [question, correctAnswer];
};

export default () => gameLogic(gameCondition, getQusetionAndCorrectAnswer);
