import gameLogic, { getRandomInt } from '../index.js';

// условия/описания игры
const gameCondition = 'What is the result of the expression?.';

const maxRandomNum = 100;

const operationSymbols = ['+', '*', '-'];

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
      return null;
  }
};

// формирование вопроса и корректного ответа
const getQuestionAndCorrectAnswer = () => {
  const firstNum = getRandomInt(0, maxRandomNum);
  const secondNum = getRandomInt(0, maxRandomNum);
  const randomSymbol = operationSymbols[getRandomInt(0, operationSymbols.length)];

  const question = `${firstNum} ${randomSymbol} ${secondNum}`;

  const correctAnswer = getResultCalc(firstNum, secondNum, randomSymbol).toString();

  return [question, correctAnswer];
};

export default () => gameLogic(gameCondition, getQuestionAndCorrectAnswer);
