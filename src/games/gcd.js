import gameLogic, { getRandomInt } from '../index.js';

// условия/описания игры
const gameCondition = 'Find the greatest common divisor of given numbers.';

const maxRandomNum = 100;

const getRandomNum = () => {
  const firstNum = getRandomInt(0, maxRandomNum);
  const secondNum = getRandomInt(0, maxRandomNum);

  return [firstNum, secondNum];
};

// логика вычислений
const getResultCalcGcd = () => {
  let [firstNum, secondNum] = getRandomNum();

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
  const [firstNum, secondNum, gcd] = getResultCalcGcd();

  const question = `${firstNum} ${secondNum}`;

  const correctAnswer = gcd.toString();

  return [question, correctAnswer];
};

export default () => gameLogic(gameCondition, getQusetionAndCorrectAnswer);
