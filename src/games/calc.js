import gameLogic, { getRandomInt } from '../index.js';

// условия/описания игры
const gameCondition = 'What is the result of the expression?.';

// формирование данных вопроса и корректного ответа
const getQusetionAndCorrectAnswer = () => {
  const maxRandomNum = 100;
  const maxRandomSymbol = 3;

  const operationSymbol = ['+', '*', '-'];

  const firstNum = getRandomInt(maxRandomNum);

  const secondNum = getRandomInt(maxRandomNum);

  const randomSymbol = operationSymbol[getRandomInt(maxRandomSymbol)];

  const question = `${firstNum} ${randomSymbol} ${secondNum}`;

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

  const correctAnswer = resultCalc.toString();

  return [question, correctAnswer];
};

export default () => gameLogic(gameCondition, getQusetionAndCorrectAnswer);
