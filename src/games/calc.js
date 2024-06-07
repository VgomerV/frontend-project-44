import gameLogic, { getRandomInt } from '../index.js';

// условия/описания игры
const gameCondition = 'What is the result of the expression?.';

const maxRandomNum = 100;
const maxRandomSymbol = 3;

// логика вычислений
const operationCalc = () => {
  const operationSymbol = ['+', '*', '-'];

  const firstNum = Math.trunc(getRandomInt(0, maxRandomNum));

  const secondNum = Math.trunc(getRandomInt(0, maxRandomNum));

  const randomSymbol = operationSymbol[Math.trunc(getRandomInt(0, maxRandomSymbol))];

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
  const [firstNum, secondNum, randomSymbol, resultCalc] = operationCalc();
  
  const question = `${firstNum} ${randomSymbol} ${secondNum}`;

  const correctAnswer = resultCalc.toString();

  return [question, correctAnswer];
};

export default () => gameLogic(gameCondition, getQusetionAndCorrectAnswer);
