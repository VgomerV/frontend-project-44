import gameLogic, { getRandomInt } from './index.js';

// условия/описания игры
const gameCondition = 'Find the greatest common divisor of given numbers.';

// формирование данных вопроса и корректного ответа
const getQusetionAndCorrectAnswer = () => {
  const maxRandomNum = 100;

  let firstNum = getRandomInt(maxRandomNum);

  let secondNum = getRandomInt(maxRandomNum);

  const question = `${firstNum} ${secondNum}`;

  while (firstNum !== 0 && secondNum !== 0) {
    if(firstNum > secondNum){
      firstNum = firstNum % secondNum;
    } else {
      secondNum = secondNum % firstNum;
    }
  }

  const gcd = firstNum + secondNum;

  const correctAnswer = gcd.toString();

  return [question, correctAnswer];
};

export default () => gameLogic(gameCondition, getQusetionAndCorrectAnswer);
