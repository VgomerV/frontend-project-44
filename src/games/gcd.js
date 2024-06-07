import gameLogic, { getRandomInt } from '../index.js';

// условия/описания игры
const gameCondition = 'Find the greatest common divisor of given numbers.';

const maxRandomNum = 100;

// логика вычислений
const operationGcd = () => {
  let firstNum = Math.trunc(getRandomInt(0, maxRandomNum));
  let secondNum = Math.trunc(getRandomInt(0, maxRandomNum));

  const questionFirstNum = firstNum;
  const questionSecondNum = secondNum;

  while (firstNum !== 0 && secondNum !== 0) {
    if (firstNum > secondNum) {
      firstNum %= secondNum;
    } else {
      secondNum %= firstNum;
    }
  }

  const gcd = firstNum + secondNum;

  return [questionFirstNum, questionSecondNum, gcd];
};

// формирование данных вопроса и корректного ответа
const getQusetionAndCorrectAnswer = () => {
  let [firstNum, secondNum, gcd] = operationGcd();

  const question = `${firstNum} ${secondNum}`;

  const correctAnswer = gcd.toString();

  return [question, correctAnswer];
};

export default () => gameLogic(gameCondition, getQusetionAndCorrectAnswer);
