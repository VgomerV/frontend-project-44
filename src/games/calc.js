import gameLogic, { getRandomInt } from '../index.js';

// условия/описания игры
const gameCondition = 'What is the result of the expression?.';

const maxRandomNum = 100;
const maxRandomNumSymbol = 3;

// логика вычислений
const getRusltCalc = () => {
  const operationSymbols = ['+', '*', '-'];

  const firstNum = Math.trunc(getRandomInt(0, maxRandomNum));

  const secondNum = Math.trunc(getRandomInt(0, maxRandomNum));

  const randomSymbol = operationSymbols[Math.trunc(getRandomInt(0, maxRandomNumSymbol))];

  let resultCalc;

  switch (randomSymbol) {
    case '+':
      resultCalc = firstNum + secondNum;
      break;

    case '-':
      resultCalc = firstNum - secondNum;
      break;

    case '*':
      resultCalc = firstNum * secondNum;
      break;

    default:
      break;
  }

  return [firstNum, secondNum, randomSymbol, resultCalc];
};

// формирование вопроса и корректного ответа
const getQusetionAndCorrectAnswer = () => {
  const [firstNum, secondNum, randomSymbol, resultCalc] = getRusltCalc();

  const question = `${firstNum} ${randomSymbol} ${secondNum}`;

  const correctAnswer = resultCalc.toString();

  return [question, correctAnswer];
};

export default () => gameLogic(gameCondition, getQusetionAndCorrectAnswer);
