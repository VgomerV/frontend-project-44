import gameLogic, { getRandomInt } from '../index.js';

// условия/описания игры
const gameCondition = 'What is the result of the expression?.';

const maxRandomNum = 100;
const maxRandomNumSymbol = 3;

const operationSymbols = ['+', '*', '-'];

const getRandomParameters = () => {
  const firstNum = getRandomInt(0, maxRandomNum);
  const secondNum = getRandomInt(0, maxRandomNum);
  const randomSymbol = operationSymbols[getRandomInt(0, maxRandomNumSymbol)];

  return [firstNum, secondNum, randomSymbol];
};

// логика вычислений
const getResultCalc = (firstNum, secondNum, randomSymbol) => {
  switch (randomSymbol) {
    case '+':
      return firstNum + secondNum;

    case '-':
      return firstNum - secondNum;

    case '*':
      return firstNum * secondNum;

    default:
      break;
  }
};

// формирование вопроса и корректного ответа
const getQusetionAndCorrectAnswer = () => {
  const [firstNum, secondNum, randomSymbol] = getRandomParameters();

  const question = `${firstNum} ${randomSymbol} ${secondNum}`;

  const correctAnswer = getResultCalc(firstNum, secondNum, randomSymbol).toString();

  return [question, correctAnswer];
};

export default () => gameLogic(gameCondition, getQusetionAndCorrectAnswer);
